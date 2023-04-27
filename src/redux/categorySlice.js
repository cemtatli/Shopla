import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const getCategoriesData = createAsyncThunk("category", async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = res.json();
    return data;
  } catch (error) {
    console.log("An error occurred while fetching categories data: ", error);
    throw error;
  }
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesData.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
