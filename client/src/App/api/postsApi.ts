import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostsData, PostsDb, PostsSendData } from "../../utils/types";

export const userPostsApi = createApi({
  reducerPath: "postsDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<void, string>({
      query: (category) => `/posts/?cat=${category}`,
    }),
    addPosts: builder.mutation<void, PostsData>({
      query: (posts) => ({
        url: `/posts/`,
        method: "POST",
        body: posts,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostsMutation } = userPostsApi;
