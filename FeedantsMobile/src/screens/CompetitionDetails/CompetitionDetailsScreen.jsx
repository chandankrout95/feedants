import React, { useCallback, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { fetchCompetition, registerForCompetition } from '../../store/slices/competitionSlice';
import HeaderBar from './components/HeaderBar';
import SummaryCard from './components/SummaryCard';
import JudgeCard from './components/JudgeCard';
import CountdownBanner from './components/CountdownBanner';
import DatesGrid from './components/DatesGrid';
import PreviousWinners from './components/PreviousWinners';
import InfoTabs from './components/InfoTabs';
import Rewards from './components/Rewards';
import { Disclaimer, InfoRow, ReferCard, HearUsers, AdSlot } from './components/Extras';
import RegisterButton from './components/RegisterButton';
import Skeleton from './components/Skeleton';

// Matches the slug created by `npm run seed` in /backend
const COMPETITION_ID = 'feedants-classical-dance';

export default function CompetitionDetailsScreen() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const competition = useSelector(s => s.competition.competition);
  const availability = useSelector(s => s.competition.availability);
  const userState = useSelector(s => s.competition.userState);
  const status = useSelector(s => s.competition.status);
  const error = useSelector(s => s.competition.error);
  const registering = useSelector(s => s.competition.registering);
  const registerError = useSelector(s => s.competition.registerError);

  const load = useCallback(() => dispatch(fetchCompetition(COMPETITION_ID)), [dispatch]);
  useEffect(() => { load(); }, [load]);
  useEffect(() => { if (registerError) Alert.alert(t('registrationFailed'), t(`errors.${registerError}`)); }, [registerError, t]);

  const onRegister = () => { if (!registering) dispatch(registerForCompetition(COMPETITION_ID)); };

  return (
    <SafeAreaView className="flex-1 bg-[#F4F8F8]" edges={['top']}>
      <HeaderBar />
      {(status === 'idle' || status === 'loading') && <Skeleton />}
      {status === 'error' && (
        <View className="flex-1 items-center justify-center px-8">
          <Text className="text-[16px] text-ink text-center mb-4">{t(`errors.${error}`)}</Text>
          <TouchableOpacity onPress={load} className="bg-primary rounded-lg px-8 py-3"><Text className="text-white font-bold">{t('retry')}</Text></TouchableOpacity>
        </View>
      )}
      {status === 'success' && competition && (
        <>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 8 }}>
            <SummaryCard competition={competition} availability={availability} isRegistered={userState.isRegistered} />
            <JudgeCard judge={competition.judge} />
            <CountdownBanner closesAt={competition.dates.registerBefore} />
            <DatesGrid dates={competition.dates} />
            <PreviousWinners winners={competition.previousWinners} />
            <InfoTabs content={competition.info} />
            <Rewards rewards={competition.rewards} />
            <Disclaimer text={competition.disclaimer} />
            <InfoRow />
            <ReferCard link={competition.referral.link} amount={competition.referral.amountPerSignup} />
            <HearUsers />
            <AdSlot />
            <RegisterButton
              isRegistered={userState.isRegistered}
              registering={registering}
              full={availability.remaining <= 0}
              onRegister={onRegister}
              onUpload={() => Alert.alert(t('upload'), t('uploadSoon'))}
            />
          </ScrollView>

        </>
      )}
    </SafeAreaView>
  );
}
