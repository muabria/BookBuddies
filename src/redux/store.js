import { configureStore } from '@reduxjs/toolkit';

import api from './api';
import authTokenSliceReucer from './authTokenSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    token: authTokenSliceReucer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export default store;
