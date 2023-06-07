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
import {
  useAddPostsMutation,
  useUpdateBlogMutation,
} from "../../App/api/postApi";
import ImageInput from "../ImageInput/ImageInput";
import { getUserInfo } from "../../App/feature/userSlice";
import { useSelector } from "react-redux";
import { EditorModules, EditorFormats } from "../../constant/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { PostUpdate, addPostData } from "../../utils/types";

export default function BlogEditorPage() {
  const { state } = useLocation();
  const postData = state as PostUpdate;
  const [thumbnail, setThumbnail] = useState(postData?.thumbnail ?? "");
  const [addPosts] = useAddPostsMutation();
  const userInfo = useSelector(getUserInfo);
  const navigate = useNavigate();
  const [updateBlog] = useUpdateBlogMutation();

  const formik = useFormik({
    initialValues: {
      title: postData?.title ?? "",
      desc: postData?.desc ?? "",
      content: postData?.content ?? "",
      category: postData?.category ?? "",
      username: postData?.username ?? "",
    },
    onSubmit: () => {},
  });

  function handleFormSubmit(status: string, post: PostUpdate) {
    let values = formik.values;
    if (thumbnail) {
      if (status === "publish") {
        if (post) {
          console.log("in if publish post");
          updateBlog({
            ...post,
            ...values,
            status: status,
            visibility: "public",
            thumbnail: thumbnail,
          });
        } else {
          console.log("in else publish post");
          addPostsToServer(
            values,
            status,
            "public",
            thumbnail,
            userInfo.userId,
            userInfo.name
          );
        }
      } else {
        if (post) {
          updateBlog({
            ...post,
            ...values,
            status: status,
            visibility: "private",
            thumbnail: thumbnail,
          });
        } else {
          addPostsToServer(
            values,
            status,
            "private",
            thumbnail,
            userInfo.userId,
            userInfo.name
          );
        }
      }
    } else {
      console.log("Photo dal");
      return;
    }
    navigate("/blogpanel");
    handleFormReset();
  }

  async function addPostsToServer(
    values: addPostData,
    status: string,
    visibility: string,
    thumbnail: string,
    userId: string,
    username: string
  ) {
    await addPosts({
      ...values,
      status: status,
      visibility: visibility,
      thumbnail: thumbnail,
      userId: userId,
      username: username,
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
        <div className="lg:flex justify-center">
          <div className="lg:w-[70%]">
            <div className="mt-5">
              <ImageInput
                image={thumbnail}
                setImage={setThumbnail}
                lable="Thumbnail Image"
              />
            </div>
            <div className="">
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
            <div className="text-start  mt-5">
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
            <div className=" mt-6">
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
        </div>
        <div className="pt-10 text-center">
          <Button
            type="submit"
            size="lg"
            color="deep-purple"
            className="m-2"
            onClick={() => handleFormSubmit("publish", postData)}
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
            onClick={() => handleFormSubmit("draft", postData)}
          >
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
}
