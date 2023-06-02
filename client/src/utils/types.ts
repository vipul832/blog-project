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
