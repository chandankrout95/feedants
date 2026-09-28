import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import useTr from '../../../i18n/useTr';

export default function PreviousWinners({ winners }) {
  const { t } = useTranslation();
  const tr = useTr();
  return (
    <Card className="p-3">
      <Text className="text-[15px] font-bold text-ink mb-3 ml-1">{t('previousWinners')}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {winners.map((w, i) => (
          <View key={i} className="flex-row items-center bg-[#F1F5F5] rounded-xl mr-3 pr-4">
            <View>
              <Image source={{ uri: w.photoUrl }} className="w-[92px] h-[92px] rounded-xl" />
              <TouchableOpacity className="absolute bottom-1 right-1 w-7 h-7 border-[3px] border-white rounded-full bg-primary items-center justify-center">
                <Icon name="play" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
            <View className="ml-3 mt-6">
              <Text className="text-[14px] font-medium text-ink">{tr(w.name)}</Text>
              <Text className="text-[13px] font-[500] text-primary mt-1">{t(`winner${w.position}`)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </Card>
  );
}
