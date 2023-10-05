import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const booksApi = createApi({
  reducerPath: 'booksApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/',

    prepareHeaders: (headers) =>
      headers.set('Content-Type', 'application/json'),
  }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
  }),
});

export default booksApi;

export const { useGetBooksQuery } = booksApi;
