import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com',

    prepareHeaders: (headers) =>
      headers.set('Content-Type', 'application/json'),
  }),

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/api/books', //the book end point
    }),

    getAccount: builder.query({
      query: () => '/api/users/me', // get the user's account
    }),

    getSingleBook: builder.query({
      query: (id) => `/api/books/${id}`, //the end point
    }),

    register: builder.mutation({
      query: (user) => ({
        url: `/api/users/register`, //register new user
        method: 'POST',
        body: user,
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.error,
    }),

    login: builder.mutation({
      query: (user) => ({
        url: `/api/users/login`, //login existing user
        method: 'POST',
        body: user,
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.error,
    }),

    checkout: builder.mutation({
      query: (id) => ({
        url: `/api/books/${id}`, //connect to single book
        method: 'PATCH',
        body: JSON.stringify({available: false})
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.error,
    }),

    return: builder.mutation({
      query: (id) => ({
        url: `/api/books/${id}`, //connect to account
        method: 'PATCH',
        body: JSON.stringify({available: true})
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.error,
    }),
  }),
});

export default api;

export const {
  useGetBooksQuery,
  useGetAccountQuery,
  useGetSingleBookQuery,
  useRegisterMutation,
  useLoginMutation,
  useCheckoutMutation,
  useReturnMutation,
} = api;
