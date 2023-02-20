import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProductsStatus', async (params) => {
   const { category, sortBy, id } = params;
   const { data } = await axios.get(
      `https://63b2bd9f5901da0ab36c48c2.mockapi.io/items?${category}&sortby=${sortBy}&order=asc`,
   );
   return data;
});

const initialState = {
   items: [],
   isLoading: 'loading',
};

const productSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setItems(state, actions) {
         state.items = actions.payload;
      },
   },
   extraReducers: {
      [fetchProducts.pending]: (state, action) => {
         state.isLoading = 'loading';
         state.items = [];
      },
      [fetchProducts.fulfilled]: (state, action) => {
         state.items = action.payload;
         state.isLoading = 'success';
      },
      [fetchProducts.rejected]: (state, action) => {
         state.isLoading = 'error';
         state.items = [];
      },
   },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
