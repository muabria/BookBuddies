import { configureStore } from '@reduxjs/toolkit';

import booksApi from './booksApi';

const store = configureStore({
  reducers: {
    [booksApi.reducerPath]: booksApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(booksApi.middleware);
  },
});

export default store;
