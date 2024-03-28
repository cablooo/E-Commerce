// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isSignedIn: false,
  },
  reducers: {
    signIn: (state) => {
      state.isSignedIn = true;
    },
    signOut: (state) => {
      state.isSignedIn = false;
    },
  },
});

export const { reducer: authReducer } = authSlice;
export const selectIsSignedIn = (state) => state.auth.isSignedIn; // Modified selector function
export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
