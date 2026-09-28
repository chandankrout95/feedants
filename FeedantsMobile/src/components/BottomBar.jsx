import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';

const Tab = ({ icon, label, active, onPress }) => (
  <TouchableOpacity onPress={onPress} className="items-center flex-1">
    <Icon name={icon} size={30} color={active ? '#0B6B6B' : '#8AA0A3'} />
    <Text className={`text-[12px] mt-0.5 ${active ? 'text-primary font-semibold' : 'text-muted'}`}>{label}</Text>
  </TouchableOpacity>
);

export default function BottomBar({ active, onChange }) {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-row items-end bg-white pt-2 border-t border-line/60" style={{ paddingBottom: Math.max(insets.bottom, 8) }}>
      <Tab icon="home" label={t('home')} active={active === 'home'} onPress={() => onChange('home')} />
      <Tab icon="magnify" label={t('explore')} active={active === 'explore'} onPress={() => onChange('explore')} />
      <View className="flex-1 items-center">
        <TouchableOpacity onPress={() => onChange('create')}
          className="w-[70px] h-[52px] rounded-2xl bg-primary items-center justify-center -mt-4">
          <View className="w-9 h-9 rounded-full bg-white items-center justify-center">
            <Icon name="plus" size={26} color="#0B6B6B" />
          </View>
        </TouchableOpacity>
      </View>
      <Tab icon="trophy" label={t('competitions')} active={active === 'competitions'} onPress={() => onChange('competitions')} />
      <TouchableOpacity onPress={() => onChange('profile')} className="items-center flex-1">
        <Image source={{ uri: 'https://i.pravatar.cc/80?img=12' }} className="w-9 h-9 rounded-full" />
        <Text className={`text-[12px] mt-0.5 ${active === 'profile' ? 'text-primary font-semibold' : 'text-muted'}`}>{t('profile')}</Text>
      </TouchableOpacity>
    </View>
  );
}