import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
    endpoints: (builder) => ({
        posts: builder.query('/posts'),
    })
})