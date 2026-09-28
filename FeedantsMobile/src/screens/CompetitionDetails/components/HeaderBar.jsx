import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/Icon';

export default function HeaderBar() {
  const { t, i18n } = useTranslation();
  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      <TouchableOpacity className="flex-row items-center">
        <Icon name="arrow-left" size={26} color="#0F1F24" />
        <Text className="ml-3 text-[17px] font-[700] text-ink">{t('goBack')}</Text>
      </TouchableOpacity>
      <View className="flex-row bg-[#E9EDEE] rounded-full p-0.5">
        {[['en', 'ENG'], ['hi', 'हिंदी']].map(([code, l]) => (
          <TouchableOpacity key={code} onPress={() => i18n.changeLanguage(code)}
            className={`px-4 py-1.5 rounded-full ${i18n.language === code ? 'bg-primary' : ''}`}>
            <Text className={`text-[14px] font-semibold ${i18n.language === code ? 'text-white' : 'text-ink'}`}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
