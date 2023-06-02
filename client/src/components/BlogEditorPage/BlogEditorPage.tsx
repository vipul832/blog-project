import {
  Button,
  Input,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import { useAddPostsMutation } from "../../App/api/postsApi";
import ImageInput from "../ImageInput/ImageInput";

type sendDataPosts = {
  title: string;
  desc: string;
  content: string;
  category: string;
  username: string;
};

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
  const [thumbnail, setThumbnail] = useState("");
  const [addPosts] = useAddPostsMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      content: "",
      category: "",
      username: "vipul",
    },
    onSubmit: () => {},
  });

  function handleFormSubmit(status: string) {
    let values = formik.values;
    if (thumbnail) {
      if (status === "publish") {
        addPostsToServer(values, status, "public", thumbnail);
      } else {
        addPostsToServer(values, status, "private", thumbnail);
      }
    } else {
      console.log("Photo dal");
      return;
    }
    handleFormReset();
  }

  async function addPostsToServer(
    values: sendDataPosts,
    status: string,
    visibility: string,
    thumbnail: string
  ) {
    await addPosts({
      ...values,
      status: status,
      visibility: visibility,
      thumbnail: thumbnail,
    });
  }

  function handleFormReset() {
    formik.resetForm();
    setThumbnail("");
  }

  return (
    <div className="min-h-screen">
      <Typography variant="h3" className="mt-5">
        Write your thought here ....
      </Typography>

      <form
        className="mt-10 p-6"
        onSubmit={formik.handleSubmit}
        onReset={handleFormReset}
      >
        <div className="lg:flex justify-between">
          <div className="lg:w-[70%]">
            <div className="mt-5">
              <ImageInput
                image={thumbnail}
                setImage={setThumbnail}
                lable="Thumbnail Image"
              />
            </div>
            <div className="lg:w-[50%]">
              <label htmlFor="title" className="block pb-1">
                Title <sup className="text-red-500">*</sup>
              </label>
              <Input
                label="Title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="text-start lg:w-[50%] mt-5">
              <label className="block pb-1">
                Category <sup className="text-red-500">*</sup>
              </label>
              <Select
                label="Category"
                id="category"
                value={formik.values.category}
                onChange={(value) => formik.setFieldValue("category", value)}
              >
                <Option value="Software">Software</Option>
                <Option value="Design">Design</Option>
                <Option value="Product">Product</Option>
                <Option value="Customer">Customer</Option>
              </Select>
            </div>
            <div className="lg:w-[50%] mt-6">
              <label htmlFor="desc" className="block pb-1">
                Description <sup className="text-red-500">*</sup>
              </label>
              <Input
                label="Description"
                name="desc"
                value={formik.values.desc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className=" pt-5 h-[350px]">
              <label htmlFor="content">
                Content <sup className="text-red-500">*</sup>
              </label>
              <ReactQuill
                theme="snow"
                value={formik.values.content}
                onChange={(content) => {
                  formik.setFieldValue("content", content);
                }}
                modules={EditorModules}
                formats={EditorFormats}
                className="h-52"
                id="content"
              />
            </div>
          </div>
          {/* <div className="border border-primaryPurple  w-[250px] p-3 lg:mt-0  text-center leading-6 h-[150px]">
            <Typography variant="h3" className="text-primaryPurple">
              Publish
            </Typography>
            <p>
              <b>Status:</b>Draft
            </p>
            <p>
              <b>Visibility:</b>Private
            </p>
          </div> */}
        </div>
        <div className="pt-10 text-center">
          <Button
            type="submit"
            size="lg"
            color="deep-purple"
            className="m-2"
            onClick={() => handleFormSubmit("publish")}
          >
            Publish
          </Button>
          <Button type="reset" size="lg" color="deep-purple" className="m-2">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            color="deep-purple"
            className="m-2"
            onClick={() => handleFormSubmit("draft")}
          >
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
}
