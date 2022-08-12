import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice';
const initState = { counter: 0, showCounter: false };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.counter += action.payload;
    },
    decrease: (state, action) => {
      state.counter -= action.payload;
    },
    toggleCounter: (state, action) => {
      state.showCounter = !state.showCounter;
    },
  },
});
export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
