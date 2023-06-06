import React, { ReactNode, FC } from "react";
export type BlogTabs = {
  label: string;
  value: string;
  desc?: React.ElementType;
}[];

export type PostsGetData = {
  category: string;
  createdAt: string;
  desc: string;
  thumbnail: string;
  status: string;
  visibility: string;
  content: string;
  title: string;
  updatedAt?: string;
  username: string;
  userId?: string;
  __v?: number;
  _id?: string;
};

export type PostsSendData = Omit<
  PostsGetData,
  "__v" | "_id" | "createdAt" | "updatedAt"
>;

export type PostsDb = PostsGetData[];

export type UploadResponse = {
  fileId: string;
  filePath: string;
  fileType: string;
  height: number;
  name: string;
  size: number;
  thumbnailUrl: string;
  url: string;
  width: number;
};

export interface Root {
  message: string;
  posts: Post[];
  totalDoc: number;
  totalPages: number;
  category: string;
}

export interface Post {
  _id: string;
  title: string;
  desc: string;
  content: string;
  thumbnail: string;
  username: string;
  category: string;
  status: string;
  visibility: string;
  createdAt: string;
  updatedAt: string;
}

export type AuthSendData = {
  username: string;
  email: string;
  password: string;
  profilePic: string;
};

export type AuthReceiveData = {
  _id: string;
  username: string;
  email: string;
  profilePic: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type AuthLoginSendData = Omit<AuthSendData, "profilePic" | "username">;

export type adminBLogSend = {
  id: string;
  status: string;
};

export type PostUpdate = Omit<Post, "createdAt" | "updatedAt">;

export type sendDataPosts = {
  title: string;
  desc: string;
  content: string;
  category: string;
  username: string;
};

export type filterPost = {
  category: string;
  limit?: number;
  page?: number;
};
