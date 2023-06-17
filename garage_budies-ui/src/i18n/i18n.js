import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import languageDetector from "i18next-browser-languagedetector"
import en from "./translations/en.json"
import lt from "./translations/lt.json"

i18n.use(initReactI18next).use(languageDetector).init(
    {
        resources: {
            en, lt
        },
        whiteList: ['en', 'lt'],
        lang: "en",
        fallbackLang: "en",
        interpolation: {
            escapeValue: false
        }
    }
);
export default i18n