import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PostsSendData,
  Root,
  adminBLogSend,
  PostsDb,
  PostUpdate,
  PostsGetData,
  filterPost,
} from "../../utils/types";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/posts`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Root, filterPost>({
      query: (filter) =>
        `/?cat=${filter.category}&page=${filter.page}&limit=${filter.limit}`,
      providesTags: ["Post"],
    }),

    addPosts: builder.mutation<void, PostsSendData>({
      query: (posts) => ({
        url: `/`,
        method: "POST",
        body: posts,
      }),
      invalidatesTags: ["Post"],
    }),
    getAdminBlogs: builder.query<PostsDb, adminBLogSend>({
      query: (adminInfo) =>
        `/adminblog/?id=${adminInfo.id}&status=${adminInfo.status}`,
      providesTags: ["Post"],
    }),
    updateBlog: builder.mutation<void, PostUpdate>({
      query: (post) => ({
        url: `/update/${post._id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deleteBlog: builder.mutation<void, PostsGetData>({
      query: (post) => ({
        url: `/delete/${post._id}`,
        method: "DELETE",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostsMutation,
  useGetAdminBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = postApi;
