import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




const singleBookApi = createApi({
  reducerPath: 'booksApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com',

    prepareHeaders: (headers) =>
      headers.set('Content-Type', 'application/json'),
  }),

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/api/books/${params.id}`, //the end point
    }),
  }),
});

export default singleBookApi;

export const { useGetSingleBookQuery } = singleBookApi;