import { createStore } from "vuex";

const store = createStore({
  state: {
    countries: null,
    selectedCountries: [],
  },
  mutations: {
    setCountries(state, countries) {
      console.log(" countries", countries);
      state.countries = countries;
    },
  },

  actions: {},
  getters: {},
});

export default store;
