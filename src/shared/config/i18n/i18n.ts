import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: __IS_DEV__,
    interpolation: {
      escapeValue: false,
    },
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
    returnNull: false,
  });

export default i18n;
