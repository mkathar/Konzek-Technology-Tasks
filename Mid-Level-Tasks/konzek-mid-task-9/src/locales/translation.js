import tr from "./languagePacks/tr.json";
import fr from "./languagePacks/fr.json";
import en from "./languagePacks/en.json";

export const getMessagesForLocale = (locale) => {
  switch (locale) {
    case "en":
      return en;
    case "tr":
      return tr;
    case "fr":
      return fr;
    default:
      return en;
  }
};
