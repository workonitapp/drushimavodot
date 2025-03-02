import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enTranslations from './translations/en.json';
import heTranslations from './translations/he.json';

// Clear any stored language preference
localStorage.removeItem('language');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      he: {
        translation: heTranslations,
      },
    },
    fallbackLng: 'en',
    lng: 'en', // Force English
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'language',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Force LTR direction for English
document.documentElement.dir = 'ltr';
document.documentElement.lang = 'en';
document.documentElement.classList.add('english');

export default i18n;
