import { BlogTabs } from "../utils/types";
import BlogList from "../components/BlogList/BlogList";

export const homeTabData: BlogTabs = [
  {
    label: "View all",
    value: "view-all",
    desc: BlogList,
  },
  {
    label: "Design",
    value: "design",
  },
  {
    label: "Product",
    value: "product",
  },
  {
    label: "Software",
    value: "sde",
  },
  {
    label: "Customer",
    value: "customer-success",
  },
];

export const adminTabData: BlogTabs = [
  {
    label: "Draft",
    value: "draft",
    desc: BlogList,
  },
  {
    label: "Published",
    value: "published",
  },
];
