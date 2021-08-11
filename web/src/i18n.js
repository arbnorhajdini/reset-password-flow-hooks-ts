import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationDe from './localize/de/translation.json'
import translationEn from './localize/en/translation.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    resources: {
      en: {
        translations: translationEn
      },
      de: {
        translations: translationDe
      }
    }
  })

export default i18n
