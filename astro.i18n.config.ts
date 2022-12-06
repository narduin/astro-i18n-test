import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
  defaultLangCode: "fr",
  supportedLangCodes: ["en", "it"],
  showDefaultLangCode: false,
  translations: {},
  routeTranslations: {},
});
