import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './en.json';
import hi from './hi.json';

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, hi: { translation: hi } },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  compatibilityJSON: 'v3',
});

AsyncStorage.getItem('lang').then(l => { if (l) i18n.changeLanguage(l); }).catch(() => {});
i18n.on('languageChanged', l => AsyncStorage.setItem('lang', l).catch(() => {}));

export default i18n;
