import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../product/product.types';
import {Cart} from './cart.types';

export type CartState = {
  items: {[key: string]: Cart};
  totalAmount: number;
  productNumber: number;
  hasError: boolean;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: CartState = {
  items: {},
  productNumber: 0,
  totalAmount: 0,
  hasError: false,
  loading: 'idle',
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addCart(
      state,
      {payload}: PayloadAction<{quantity: number; product: Product}>,
    ) {
      const {quantity, product} = payload;
      let items = Object.assign(state.items, {});
      let totalAmount = 0;
      let productNumber = 0;

      const prevQuantity = items[product.id]?.quantity || 0;

      items[product.id] = {
        quantity: prevQuantity + quantity,
        product,
      };

      for (const productId in items) {
        const quantity = items[productId].quantity;
        const productPrice = items[productId].product.price;
        productNumber += quantity;
        totalAmount += quantity * productPrice;
      }

      state.productNumber = productNumber;
      state.items = items;
      state.totalAmount = totalAmount;
    },
    updateCart(
      state,
      {payload}: PayloadAction<{quantity: number; productId: number}>,
    ) {
      const {quantity, productId} = payload;
      const items = {...state.items};
      let totalAmount = 0;
      let productNumber = 0;

      if (quantity) {
        items[productId].quantity = quantity;
      } else {
        delete items[productId];
      }

      for (const productId in items) {
        const {quantity, product} = items[productId];
        const productPrice = product.price;
        productNumber += quantity;
        totalAmount += quantity * productPrice;
      }

      state.productNumber = productNumber;
      state.totalAmount = totalAmount;
      state.items = items;
    },
  },
});

export default cartSlice.reducer;
export const {addCart, updateCart} = cartSlice.actions;
