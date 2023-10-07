import { configureStore } from '@reduxjs/toolkit';

import api from './api';
import authTokenReducer from './authTokenSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    token: authTokenReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export default store;
