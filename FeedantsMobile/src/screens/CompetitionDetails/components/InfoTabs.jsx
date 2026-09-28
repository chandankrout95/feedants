import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import useTr from '../../../i18n/useTr';

const TABS = [
  ['about', 'tabAbout'],
  ['judging', 'tabJudging'],
  ['rules', 'tabRules'],
];

export default function InfoTabs({ content }) {
  const { t } = useTranslation();
  const tr = useTr();
  const [tab, setTab] = useState('about');
  const [expanded, setExpanded] = useState(false);
  const lines = tr(content[tab]) || [];
  const shown = expanded ? lines : lines.slice(0, 3);
  return (
    <Card className="pt-2 pb-3 px-3">
      <View className="flex-row border-b border-line">
        {TABS.map(([k, l]) => (
          <TouchableOpacity key={k} onPress={() => { setTab(k); setExpanded(false); }}
            className={`flex-1 items-center py-3 border-b-2 ${tab === k ? 'border-primary' : 'border-transparent'}`}>
            <Text className={`text-[14px] font-[700] ${tab === k ? 'text-tealDark' : 'text-muted'}`}>{t(l)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="mt-3 px-1">
        {shown.map((line, i) => <Text key={i} className="text-[15px] text-muted leading-6">{line}</Text>)}
      </View>
      {lines.length > 3 && (
        <TouchableOpacity onPress={() => setExpanded(e => !e)} className="flex-row items-center justify-center mt-1">
          <Text className="text-[14.5px]  text-primary font-[600]">{expanded ? t('viewLess') : t('viewMore')}</Text>
          <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={20} />
        </TouchableOpacity>
      )}
    </Card>
  );
}
