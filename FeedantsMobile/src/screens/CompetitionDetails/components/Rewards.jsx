import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import { inr } from '../../../utils/format';

const ICONS = { 1: ['trophy', '#F0A213'], 2: ['medal', '#9AA3A8'], 3: ['medal', '#F07A1E'] };

export default function Rewards({ rewards }) {
  const { t } = useTranslation();
  return (
    <Card className="p-3">
      <View className="flex-row items-baseline mb-1 ml-1">
        <Text className="text-[15px] font-bold text-ink">{t('rewards')}</Text>
        <Text className="text-[14px] text-muted ml-2">{t('allPositions')}</Text>
      </View>
      {rewards.map(r => {
        const [icon, color] = ICONS[r.position] || ['star-outline', '#0B6B6B'];
        return (
          <View key={r.position} className="flex-row items-center bg-[#F4F8F8] rounded-md px-3 py-1.5 mt-1.5">
            <View className="w-8"><Icon name={icon} size={26} color={color} /></View>
            <Text className="flex-1 ml-2 text-[15px] font-semibold text-ink">{t(`winner${r.position}`)}</Text>
            <Text className="text-[19px] font-bold text-tealDark mr-2">{inr(r.amount)}</Text>
          </View>
        );
      })}
    </Card>
  );
}
