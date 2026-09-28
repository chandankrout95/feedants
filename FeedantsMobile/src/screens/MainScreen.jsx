import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import BottomBar from '../components/BottomBar';
import CompetitionDetailsScreen from './CompetitionDetails/CompetitionDetailsScreen';

const BlankScreen = ({ title }) => (
    <View className="flex-1 bg-[#F4F8F8] items-center justify-center">
        <Text className="text-[#0B6B6B] text-[20px] font-semibold">{title}</Text>
    </View>
);

export default function MainScreen() {
    const { t } = useTranslation();
    const [tab, setTab] = useState('competitions'); // local UI state, not Redux
    return (
        <View className="flex-1 bg-[#F4F8F8]">
            <View className="flex-1">
                {tab === 'competitions' ? <CompetitionDetailsScreen /> : <BlankScreen title={t(tab)} />}
            </View>
            <BottomBar active={tab} onChange={setTab} />
        </View>
    );
}