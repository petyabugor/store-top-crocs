import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   categoryId: 0,
   sort: { name: 'популярністю', sortProperty: 'rating' },
   itemId: 0,
};

const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setCategoryId(state, action) {
         state.categoryId = action.payload;
      },
      setSort(state, action) {
         state.sort = action.payload;
      },
      setItemId(state, action) {
         state.itemId = Number(action.payload);
         console.log(state.itemId)
      },
      setFilters(state, action) {
         state.categoryId = Number(action.payload.categoryId);
         state.sort = Number(action.payload.sort);
      },
   },
});

export const { setCategoryId, setSort, setFilters, setItemId } = filterSlice.actions;

export default filterSlice.reducer;
