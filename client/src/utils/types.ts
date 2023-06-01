import React, { ReactNode, FC } from "react";
export type BlogTabs = {
  label: string;
  value: string;
  desc?: React.ElementType;
}[];

export type PostsData = {
  category: string;
  createdAt: string;
  desc: string;
  thumbnail: string;
  title: string;
  updatedAt?: string;
  username: string;
  __v?: number;
  _id?: string;
};

export type PostsSendData = Omit<PostsData, "__v" | "_id">;

export type PostsDb = PostsData[];

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
