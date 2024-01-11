import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: "uz",
    debug: true,
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true,
    },
  });

export default i18n;
