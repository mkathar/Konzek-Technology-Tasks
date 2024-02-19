import { createSlice } from "@reduxjs/toolkit";

const CountriesSlice = createSlice({
  name: "Countries",
  initialState: {
    countries: [],
    selectedCountries: [],
  },
  reducers: {
    setData: (state, action) => {
      state.countries = action.payload;
    },
    setSelectedCountries: (state, action) => {
      state.selectedCountries = action.payload;
    },
  },
});

export const { setData, setSelectedCountries } = CountriesSlice.actions;

export const CountriesReducer = CountriesSlice.reducer;
