import { useTranslation } from 'react-i18next';

// tr({ en: 'Dance', hi: 'नृत्य' }) -> current language, falls back to English
export default function useTr() {
  const { i18n } = useTranslation();
  return v => {
    if (v == null || typeof v !== 'object') return v;
    const x = v[i18n.language];
    return (Array.isArray(x) ? x.length : x) ? x : v.en;
  };
}
