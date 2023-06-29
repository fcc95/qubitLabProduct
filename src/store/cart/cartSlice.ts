import {createSlice} from '@reduxjs/toolkit';

export type CartState = {
  hasError: boolean;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: CartState = {
  hasError: false,
  loading: 'idle',
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
