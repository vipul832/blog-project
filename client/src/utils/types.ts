import React, { ReactNode, FC } from "react";
export type BlogTabs = {
  label: string;
  value: string;
  desc?: React.ElementType;
}[];
