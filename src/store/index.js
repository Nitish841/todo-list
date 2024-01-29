import { createSlice } from '@reduxjs/toolkit';

const INITIAL_ITEM = ['item1', 'item2', 'item3', 'item4'];

const itemSlice = createSlice({
  name: 'items',
  initialState: INITIAL_ITEM,
  reducers: {
    addItem: (items, action) => {
      items.push(action.payload);
    },
    deleteItem: (items, action) => {
      items = items.filter((item) => item !== action.payload);
      return items;
    },
    updateItem: (items, action) => {
      items;
    },
  },
});
export const itemSliceAction = itemSlice.actions;

export default itemSlice;
