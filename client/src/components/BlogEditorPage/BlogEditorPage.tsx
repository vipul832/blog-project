import React from "react";
import { Button, Input, Radio, Typography } from "@material-tailwind/react";
import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import { useAddPostsMutation } from "../../App/api/postsApi";
import ImageInput from "../ImageInput/ImageInput";

const EditorModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      { align: ["", "right", "center", "justify"] },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const EditorFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
  "direction",
];

export default function BlogEditorPage() {
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [addPosts] = useAddPostsMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      content: "",
      category: "",
      createdAt: "",
      username: "vipul",
    },
    onSubmit: async (values) => {
      if (thumbnail === "") {
        console.log("photo dal");
        return;
      }
      await addPosts({ ...values, thumbnail });
      console.log({ ...values, thumbnail });
    },
  });
  return (
    <div className="min-h-screen">
      <Typography variant="h3" className="mt-5">
        Write your thought here ....
      </Typography>

      <form className="mt-10 p-6" onSubmit={formik.handleSubmit}>
        <div className="lg:flex justify-between">
          <div className="lg:w-[70%] h-[500px]">
            <div className="w-[50%]">
              <label htmlFor="title">
                Title <sup className="text-red-500">*</sup>
              </label>
              <Input
                label="Title"
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="w-[50%] mt-6">
              <label htmlFor="desc">
                Description <sup className="text-red-500">*</sup>
              </label>
              <Input
                label="Description"
                name="desc"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="mt-6">
              <label htmlFor="content">
                Content <sup className="text-red-500">*</sup>
              </label>
              <ReactQuill
                theme="snow"
                onChange={(content) => {
                  setContent(content);
                  formik.setFieldValue("content", content);
                }}
                modules={EditorModules}
                formats={EditorFormats}
                className="h-52"
                id="content"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="border border-primaryPurple  w-[250px] p-3 lg:mt-0 mt-10 text-center leading-6">
              <Typography variant="h3" className="text-primaryPurple">
                Publish
              </Typography>
              <p>
                <b>Status:</b>Draft
              </p>
              <p>
                <b>Visibility:</b>Private
              </p>
              <div className="mt-5">
                <ImageInput
                  image={thumbnail}
                  setImage={setThumbnail}
                  lable="Thumbnail Image"
                />
              </div>
            </div>
            <div className="border border-primaryPurple w-[250px] text-center mt-10">
              <Typography variant="h3" className="text-primaryPurple">
                Category
              </Typography>
              <div className="text-start">
                <Radio
                  id="design"
                  name="category"
                  label="Design"
                  onChange={() => formik.setFieldValue("category", "design")}
                />
                <Radio
                  id="product"
                  name="category"
                  label="Product"
                  onChange={() => formik.setFieldValue("category", "product")}
                />
                <Radio
                  id="software"
                  name="category"
                  label="Software"
                  onChange={() => formik.setFieldValue("category", "software")}
                />
                <Radio
                  id="customer"
                  name="category"
                  label="Customer"
                  onChange={() => formik.setFieldValue("category", "customer")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Button type="submit" size="lg" color="deep-purple" className="m-2">
            Save as Draft
          </Button>
          <Button type="submit" size="lg" color="deep-purple" className="m-2">
            Publish
          </Button>
        </div>
      </form>
    </div>
  );
}
