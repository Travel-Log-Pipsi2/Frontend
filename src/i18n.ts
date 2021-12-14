import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import addTravelEn from './languages/en/addTravelEn.json';
import addTravelPl from './languages/pl/addTravelPl.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: { addTravel: addTravelEn, common: addTravelEn },
      pl: { addTravel: addTravelPl, common: addTravelPl },
    },
    debug: true,
    interpolation: { escapeValue: false },
  });

export default i18n;
