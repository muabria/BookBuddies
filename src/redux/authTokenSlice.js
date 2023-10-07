import { createSlice } from '@reduxjs/toolkit';
import api from './api';

const authTokenSlice = createSlice({
  name: 'token',
  initialState: null,
  reducers: {
    setToken: (_state, { payload }) => payload.token,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.register.matchFulfilled,
      (state, { payload }) => payload.token
    );
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        return { token: payload.token };
      }
    );
  },
});

export default authTokenSlice.reducer;

export const { setToken } = authTokenSlice.actions;
