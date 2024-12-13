import { RootState } from '@/globalRedux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number; 
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface BasketState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: BasketState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },
    removeItem(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);

      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      } else {
        console.error('Item not found in basket');
      }
    },
    clearBasket(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    updateItemQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);

      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        state.totalQuantity += quantity - item.quantity;
        state.totalPrice += item.price * (quantity - item.quantity);
        state.items[itemIndex].quantity = quantity;
      } else {
        console.error('Item not found in basket');
      }
    },
  },
});

export const { addItem, removeItem, clearBasket, updateItemQuantity } = basketSlice.actions;
export const selectItems = (state: RootState) => state.basket.items;


export default basketSlice.reducer;
