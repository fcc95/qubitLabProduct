import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Product} from './product.types';
import {getProducts} from './productActions';

export type ProductState = {
  products: Array<Product>;
  selectedProduct: Product | null;
  hasError: boolean;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  hasError: false,
  loading: 'idle',
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    selectProduct: (state, {payload}: PayloadAction<{productId: number}>) => {
      const {productId} = payload;
      const selectedProduct = state.products.find(
        product => product.id === productId,
      );
      if (selectedProduct) {
        state.selectedProduct = selectedProduct;
      }
    },
  },
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

export const {selectProduct} = productSlice.actions;
