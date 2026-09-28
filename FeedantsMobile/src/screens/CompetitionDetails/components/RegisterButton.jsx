import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function RegisterButton({ isRegistered, registering, full, onRegister, onUpload }) {
  const { t } = useTranslation();
  const disabled = registering || (!isRegistered && full);
  const title = isRegistered ? t('upload') : full ? t('closed') : t('registerNow');
  return (
    <View className="px-3 pb-2 bg-[#F4F8F8]">
      <TouchableOpacity
        disabled={disabled}
        onPress={isRegistered ? onUpload : onRegister}
        className={`rounded-lg py-3 items-center justify-center ${disabled ? 'bg-primary/60' : 'bg-primary'}`}>
        {registering ? <ActivityIndicator color="#fff" /> : <Text className="text-white text-[17px] font-bold">{title}</Text>}
        {isRegistered && <Text className="text-white/90 text-[13px]">{t('registered')}</Text>}
      </TouchableOpacity>
    </View>
  );
}
