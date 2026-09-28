import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import useTr from '../../../i18n/useTr';

export default function JudgeCard({ judge }) {
  const { t } = useTranslation();
  const tr = useTr();
  return (
    <Card className="p-3 flex-row items-center">
      <Image source={{ uri: judge.photoUrl }} className="w-[100px] h-[100px] rounded-full" />
      <View className="flex-1 ml-4">
        <Text className="text-[14px] font-[500] text-muted">{t('judge')}</Text>
        <Text className="text-[20px] font-bold text-ink">{tr(judge.name)}</Text>
        <Text className="text-[13.5px] font-[500] text-muted mt-1">{tr(judge.title)}</Text>
        <Text className="text-[13.5px]  font-[500] text-muted">{tr(judge.experience)}</Text>
      </View>
      <TouchableOpacity className="items-center mr-2">
        <View className="w-[54px] h-[54px] rounded-full bg-tint items-center justify-center">
          <Icon name="play" size={30} />
        </View>
        <Text className="text-[13.5px] font-[500]  text-muted mt-2">{t('introVideo')}</Text>
      </TouchableOpacity>
    </Card>
  );
}
