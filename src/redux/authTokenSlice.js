import { createSlice } from '@reduxjs/toolkit';
import api from './api';

const authTokenSlice = createSlice({
  name: 'token',
  initialState: null,
  reducers: {
    setToken: (_state) => null,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.register.matchFulfilled,
      (state, { payload }) => payload.token
    );
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => payload.token
    );
  },
});

export default authTokenSlice.reducer;

export const { setToken } = authTokenSlice.actions;
