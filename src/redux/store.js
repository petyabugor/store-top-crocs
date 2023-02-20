import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import products from './slices/productSlice';

export default configureStore({
   reducer: {
      filter,
      cart,
      products,
   },
});
