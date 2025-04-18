import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product } from '@/types';

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id == action.payload);
      if (existingItem) {
        if (existingItem.quantity != 1)
          existingItem.quantity -= 1;
        else
          state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    removePositionFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart, removePositionFromCart} = cartSlice.actions;
export default cartSlice.reducer;