import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import { fmtDate, fmtTime } from '../../../utils/format';

const Cell = ({ icon, label, iso, lang, className = '' }) => (
  <View className={`w-1/2 flex-row p-4 ${className}`}>
    <Icon name={icon} size={34} />
    <View className="ml-5 flex-1">
      <Text className="text-[13px] font-[500] text-muted">{label}</Text>
      <Text className="text-[16px] font-bold text-tealDark mt-1">{fmtDate(iso, lang)}</Text>
      <Text className="text-[15px] font-bold text-black">{fmtTime(iso)}</Text>
    </View>
  </View>
);

export default function DatesGrid({ dates }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <Card className="p-3">
      <Text className="text-[15px] font-bold text-ink mb-2 ml-1">{t('importantDates')}</Text>
      <View className="border border-line rounded-lg flex-row flex-wrap">
        <Cell icon="calendar-month-outline" label={t('registerBefore')} lang={lang} iso={dates.registerBefore} className="border-r border-b border-line" />
        <Cell icon="send-outline" label={t('submissionStarts')} lang={lang} iso={dates.submissionStarts} className="border-b border-line" />
        <Cell icon="upload-outline" label={t('submissionEnds')} lang={lang} iso={dates.submissionEnds} className="border-r border-line" />
        <Cell icon="trophy-outline" label={t('resultDate')} lang={lang} iso={dates.resultDate} />
      </View>
    </Card>
  );
}
