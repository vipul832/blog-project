import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PostsSendData,
  Root,
  AuthLoginSendData,
  AuthReceiveData,
  AuthSendData,
  adminBLogSend,
  PostsGetData,
  PostsDb,
} from "../../utils/types";

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
    signUpUser: builder.mutation<void, AuthSendData>({
      query: (user) => ({
        url: `/auth/register`,
        method: "POST",
        body: user,
      }),
    }),

    loginUser: builder.mutation<AuthReceiveData, AuthLoginSendData>({
      query: (user) => ({
        url: `/auth/login`,
        method: "POST",
        body: user,
      }),
    }),
    getAdminBlogs: builder.query<PostsDb, adminBLogSend>({
      query: (adminInfo) =>
        `/posts/adminblog/?id=${adminInfo.id}&status=${adminInfo.status}`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostsMutation,
  useSignUpUserMutation,
  useLoginUserMutation,
  useGetAdminBlogsQuery,
} = userPostsApi;
