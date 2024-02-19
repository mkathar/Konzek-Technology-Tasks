import { createStore } from "redux";
import { getMessagesForLocale } from "../locales/translation";

const initialState = {
  intl: {
    locale: "en",
    messages: getMessagesForLocale("en"),
    languages: [
      { code: "en", name: "English" },
      { code: "tr", name: "Turkish" },
      { code: "fr", name: "Français" },
    ],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        intl: {
          ...state.intl,
          locale: action.payload,
          messages: getMessagesForLocale(action.payload),
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
