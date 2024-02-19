import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../services/REST_API/baseURL";

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const response = await axiosInstance.get("products");
    return response.data;
  }
);

export const filterProductsByCategory = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    filterByCategory: (state, action) => {
      if (action.payload === "All") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
      }
    },
    filterByName: (state, action) => {
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products = action.payload;

      state.filteredProducts = action.payload;
    });
  },
});

export const { setProducts, filterByCategory, filterByName } =
  filterProductsByCategory.actions;
export const productsReducer = filterProductsByCategory.reducer;

export const filterProductsByPrice =
  ({ minPrice, maxPrice }) =>
  (dispatch, getState) => {
    const { products } = getState();

    let filteredProducts = [...products.products];
    if (minPrice !== "" && maxPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    dispatch(setProducts(filteredProducts));
  };
