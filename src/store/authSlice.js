import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggin: false },
  reducers: {
    logIn: (state) => {
      state.isLoggin = true;
    },
    logout: (state) => {
      state.isLoggin = false;
    },
  },
});

export const { logIn, logout } = authSlice.actions;
export default authSlice.reducer;
