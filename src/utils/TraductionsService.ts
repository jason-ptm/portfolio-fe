import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import traductions from './constants/traductions.json';
import { StorageService } from '.';

const resources = traductions;
const lang = StorageService.getLang();

i18n.use(initReactI18next).init({
  resources,
  lng: lang ? lang : 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
