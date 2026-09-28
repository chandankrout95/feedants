import { createSlice } from '@reduxjs/toolkit';

// Minimal auth state. Never store passwords; persist tokens only via secure storage.
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isAuthenticated: false, loading: false, error: null },
  reducers: {
    setCredentials: (s, { payload }) => {
      s.user = payload.user; s.token = payload.token; s.isAuthenticated = true;
    },
    logout: s => { s.user = null; s.token = null; s.isAuthenticated = false; },
  },
});
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
