import * as Yup from "yup";

export const blogSchema = Yup.object().shape({
  title: Yup.string().required("Title name is required !"),
  description: Yup.string().required("Description is required !"),
  content: Yup.string().required("Content is required !"),
  thumbnail: Yup.string().required("Thumbnail is required !"),
  photo: Yup.string().required("Photo Required"),
  checkbox: Yup.bool() // use bool instead of boolean
    .oneOf([true], "You must accept the terms and conditions"),
});
