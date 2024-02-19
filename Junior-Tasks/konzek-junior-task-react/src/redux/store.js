import { configureStore } from "@reduxjs/toolkit";
import { CountriesReducer } from "./slices/countriesSlice";

export const store = configureStore({
  reducer: {
    Countries: CountriesReducer,
  },
});
