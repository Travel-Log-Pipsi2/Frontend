import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEn from './languages/en/commonEn.json';
import commonPl from './languages/pl/commonPl.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: Cookies.get('lang') || 'en',
    resources: {
      en: { common: commonEn },
      pl: { common: commonPl },
    },
    debug: true,
    interpolation: { escapeValue: false },
  });

export default i18n;
