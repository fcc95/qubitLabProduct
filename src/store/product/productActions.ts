import {createAsyncThunk} from '@reduxjs/toolkit';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const getProducts = createAsyncThunk(FETCH_PRODUCTS, async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  return response.json();
});
