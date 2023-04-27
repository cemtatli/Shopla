import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "~/utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

export const getCategoryProducts = createAsyncThunk("getcategory", async (category) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await res.json();
  return data;
});
export const getDetailProduct = createAsyncThunk("getproduct", async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAILED;
    });
    builder.addCase(getDetailProduct.pending, (state, action) => {
      state.productDetailStatus = STATUS.LOADING;
    });
    builder.addCase(getDetailProduct.fulfilled, (state, action) => {
      state.productDetailStatus = STATUS.SUCCESS;
      state.productDetail = action.payload;
    });
    builder.addCase(getDetailProduct.rejected, (state, action) => {
      state.productDetailStatus = STATUS.FAILED;
    });
    builder.addCase(getCategoryProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getCategoryProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAILED;
    });
  },
});

export default productSlice.reducer;
