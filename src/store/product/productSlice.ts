import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Product} from './product.types';
import {getProducts} from './productActions';

export type ProductState = {
  products: Array<Product>;
  hasError: boolean;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: ProductState = {
  products: [],
  hasError: false,
  loading: 'idle',
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ProductState>) => {
    builder
      .addCase(getProducts.pending, state => {
        state.loading = 'pending';
      })
      .addCase(
        getProducts.fulfilled,
        (state, {payload}: PayloadAction<Array<Product>>) => {
          state.loading = 'succeeded';
          state.products = payload;
        },
      )
      .addCase(getProducts.rejected, state => {
        state.loading = 'failed';
        state.hasError = true;
      });
  },
});

export default productSlice.reducer;
