import React from 'react';
import { View, Text, TouchableOpacity, Clipboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import MegaphoneIcon from '../../../icons/Megaphoneicon';
import useTr from '../../../i18n/useTr';
import { inr } from '../../../utils/format';

export const Disclaimer = ({ text }) => {
  const { t } = useTranslation();
  const tr = useTr();
  return (
    <View className="mx-3 mb-3 bg-tint rounded-lg px-3 py-3 flex-row items-center">
      <Icon name="information-outline" size={20} />
      <Text className="ml-3 flex-1 text-[13.5px] font-[500] text-muted">
        <Text className="font-bold text-primary">{t('disclaimer')} </Text>{tr(text)}
      </Text>
    </View>
  );
};

export const InfoRow = () => {
  const { t } = useTranslation();
  return (
    <Card className="p-3 flex-row items-center">
      <TouchableOpacity className="flex-row items-center flex-1 pr-3">
        <View className="w-[60px] h-[60px] rounded-xl bg-mint items-center justify-center">
          <View className="w-9 h-9 rounded-full bg-tealDark items-center justify-center"><Icon name="play" size={22} color="#fff" /></View>
        </View>
        <View className="ml-3 flex-1">
          <Text className="text-[14.5px] font-bold text-ink">{t('howReceive')}</Text>
          <Text className="text-[12.5px] font-[500] text-muted mt-1">{t('watchVideo')}</Text>
        </View>
      </TouchableOpacity>
      <View className="flex-1">
        <View className="flex-row items-center mb-3"><Icon name="shield-check-outline" size={26} color="#0F1F24" /><Text className="ml-3 text-[13.5px] font-[500] text-muted">{t('refund')}</Text></View>
        <View className="flex-row items-center"><Icon name="shield-check-outline" size={26} color="#0F1F24" />
          {/* Swap the italic text for the official Razorpay logo <Image> from razorpay.com/newsroom/brand-assets */}
          <Text className="ml-3 text-[13px] font-[500] text-muted flex-1">{t('securePay')} <Text className="text-[#1A4DB3] font-bold italic text-[15px]">Razorpay</Text></Text>
        </View>
      </View>
    </Card>
  );
};

export const ReferCard = ({ link, amount }) => {
  const { t } = useTranslation();
  return (
    <View className="mx-3 mb-3 bg-mint rounded-2xl p-3 flex-row items-center">
      <MegaphoneIcon size={64} />
      <View className="flex-1 ml-4">
        <Text className="text-[15px] font-bold text-ink">{t('referTitle')}</Text>
        <View className="flex-row mt-2 bg-white rounded-lg border border-line overflow-hidden">
          <Text numberOfLines={1} className="flex-1 px-3 py-2.5 text-[13.5px] text-primary">{link}</Text>
          <TouchableOpacity onPress={() => Clipboard.setString(link)} className="border-l border-line px-3 justify-center">
            <Text className="text-[13.5px] font-bold text-tealDark">{t('copyLink')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="ml-3 w-[190px]">
        <TouchableOpacity className="bg-primary rounded-md py-3 items-center"><Text className="text-white font-bold text-[14.5px]">{t('referNow')}</Text></TouchableOpacity>
        <Text className="text-[13px] text-tealDark text-muted mt-2 text-center">{t('earnPrefix')} <Text className="text-tealDark font-bold text-[15px]">{inr(amount).replace(' ', '')}</Text> {t('earnSuffix')}</Text>
      </View>
    </View>
  );
};

export const HearUsers = () => {
  const { t } = useTranslation();
  return (
    <Card className="px-4 py-4 flex-row items-center">
      <Icon name="message-text-outline" size={26} color="#0F1F24" />
      <View className="flex-1 ml-4">
        <Text className="text-[14.5px] font-bold text-ink">{t('hearUsers')}</Text>
        <Text className="text-[12px] text-muted mt-0.5">{t('hearSub')}</Text>
      </View>
      <Icon name="chevron-right" size={24} color="#0F1F24" />
    </Card>
  );
};

export const AdSlot = () => {
  const { t } = useTranslation();
  return (
    <View className="mx-3 mb-3 border border-dashed border-line rounded-xl py-3 flex-row items-center justify-center">
      <Icon name="bullhorn-outline" size={24} color="#8AA0A3" />
      <Text className="ml-3 text-[14px] font-semibold text-muted">{t('adHere')}</Text>
    </View>
  );
};
