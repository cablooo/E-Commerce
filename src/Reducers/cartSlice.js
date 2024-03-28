// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item exists
      } else {
        state.items.push({ ...item, quantity: 1 }); // Add item with quantity of 1 if it doesn't exist
      }
    },
    removeItemFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const itemId = action.payload;
      const selectedItem = state.items.find((item) => item.id === itemId);
      if (selectedItem) {
        selectedItem.quantity++;
      }
    },
    decreaseItemQuantity(state, action) {
      const itemId = action.payload;
      const selectedItem = state.items.find((item) => item.id === itemId);
      if (selectedItem && selectedItem.quantity > 1) {
        selectedItem.quantity--;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items; // Selector to get cart items
export const selectCartItemQuantity = (itemId) => (state) => {
  const selectedItem = state.cart.items.find((item) => item.id === itemId);
  return selectedItem ? selectedItem.quantity : 0;
}; // Selector to get quantity for a specific item

export default cartSlice.reducer;
