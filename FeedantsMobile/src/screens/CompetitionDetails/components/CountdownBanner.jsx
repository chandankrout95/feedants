import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/Icon';
import useCountdown from '../../../utils/useCountdown';
import { fmtCountdown } from '../../../utils/format';

export default function CountdownBanner({ closesAt }) {
  const { t } = useTranslation();
  const ms = useCountdown(closesAt);
  return (
    <View className="mx-3 mb-3 bg-tint rounded-xl px-5 py-4 flex-row items-center justify-between">
      <Icon name="timer-sand" size={28} />
      <Text className="text-[15px] font-semibold text-ink ml-3">{t('closesIn')}</Text>
      <Text className="text-[19px] font-bold text-primary ml-4">{fmtCountdown(ms)}</Text>
      <View className="flex-1" />
      <Icon name="timer-outline" size={26} />
      <Text className="text-[15px] font-semibold text-primary ml-2">{t('hurry')}</Text>
    </View>
  );
}
