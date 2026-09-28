import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import useTr from '../../../i18n/useTr';
import { inr } from '../../../utils/format';

const Chip = ({ t }) => (
  <View className="bg-[#EEF2F3] rounded-lg px-3 py-1.5 mr-2"><Text className="text-[13px] text-ink font-medium">{t}</Text></View>
);

export default function SummaryCard({ competition: c, availability: a, isRegistered }) {
  const { t } = useTranslation();
  const tr = useTr();
  const pct = a.maxParticipants ? (a.registered / a.maxParticipants) * 100 : 0;
  return (
    <Card className="p-4">
      <View className="flex-row justify-between items-start">
        <Text className="text-[22px] font-bold text-ink flex-1 pr-2">{tr(c.title)}</Text>
        {isRegistered && (
          <View className="flex-row items-center bg-tint  border-l-2 border-primary/30 rounded-xl px-3 py-2">
            <Icon name="check-circle" size={20} color="#0B6B6B" />
            <Text className="ml-2 text-[14px] font-semibold text-tealDark">{t('registered')}</Text>
          </View>
        )}
      </View>
      <View className="flex-row items-center mt-2">
        <Chip t={tr(c.category)} /><Chip t={tr(c.winnerType)} />
        <Icon name="trophy-outline" size={22} />
        <Text className="ml-2 text-[14px] text-primary font-medium">{tr(c.perk)}</Text>
      </View>
      <View className="flex-row mt-4 items-end">
        <View className="mr-8">
          <Text className="text-[14px] font-[600] text-muted">{t('prizePool')}</Text>
          <Text className="text-[34px] font-bold text-tealDark">{inr(c.prizePool)}</Text>
        </View>
        <View className="mr-6">
          <Text className="text-[14px] font-[600] text-muted">{t('entryFee')}</Text>
          <Text className="text-[30px] font-bold text-black">{inr(c.entryFee)}</Text>
        </View>
        <View className="flex-1">
          <View className="flex-row items-center mb-2">
            <Icon name="account-multiple-outline" size={20} />
            <Text className="ml-2 text-[15px] font-medium text-tealDark">
              {a.remaining > 0 ? t('spotsLeft', { n: a.remaining }) : t('full')}
            </Text>
          </View>
          <View className="h-[6px] rounded-full bg-line overflow-hidden">
            <View className="h-full bg-primary rounded-full" style={{ width: `${Math.max(pct, 4)}%` }} />
          </View>
          <Text className="text-[14px] font-[600] text-muted mt-2">{t('booked', { registered: a.registered, max: a.maxParticipants })}</Text>
        </View>
      </View>
    </Card>
  );
}
