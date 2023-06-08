import * as Yup from "yup";

export const blogSchema = Yup.object().shape({
  title: Yup.string().required("Title  is required !"),
  desc: Yup.string().required("Description is required !"),
  // content: Yup.string().required("Content is required !"),
  category: Yup.string().required("Category is Required"),
});
