import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./translations/en.json";
import cz from "./translations/cz.json";

const resources = {
  en,
  cz,
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  defaultNS: "common",
  fallbackLng: "en",
});
