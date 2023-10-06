import { configureStore } from '@reduxjs/toolkit';

import booksApi from '../api/booksApi';
import singleBookApi from '../api/singleBookApi';

const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    [singleBookApi.reducerPath]: singleBookApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(booksApi.middleware);
  },
});

export default store;
