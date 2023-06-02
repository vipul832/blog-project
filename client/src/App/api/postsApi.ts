import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostsSendData, Root } from "../../utils/types";

export const userPostsApi = createApi({
  reducerPath: "postsDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Root, string>({
      query: (category) => `/posts/?cat=${category}&page=1&limit=10`,
    }),

    addPosts: builder.mutation<void, PostsSendData>({
      query: (posts) => ({
        url: `/posts/`,
        method: "POST",
        body: posts,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostsMutation } = userPostsApi;
