import React from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function BlogEditorPage() {
  const [content, setContent] = useState("");

  console.log(content);
  return (
    <div className="min-h-screen">
      <Typography variant="h3" className="mt-5">
        Write your thought here ....
      </Typography>

      <form className="mt-10 p-6">
        <div className="lg:flex justify-between">
          <div className="lg:w-[70%] ">
            <div className="w-[50%]">
              <label htmlFor="title">
                Title <sup className="text-red-500">*</sup>
              </label>
              <Input label="Title" name="title" />
            </div>
            <div className="mt-6">
              <label htmlFor="content">
                Content <sup className="text-red-500">*</sup>
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                className="lg:h-52"
                id="content"
              />
            </div>
          </div>
          <div>
            <div className="border border-primaryPurple lg:p-10 p-5 lg:mt-0 mt-10 text-center leading-6">
              <Typography variant="h3" className="text-primaryPurple">
                Publish
              </Typography>
              <p>
                <b>Status:</b>Draft
              </p>
              <p>
                <b>Visibility:</b>Private
              </p>
              <label htmlFor="thumbnail" className="underline text-blue-400">
                Thumbnail Image<sup className="text-red-500">*</sup>
              </label>
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                className="absolute left-[-999px] hidden"
              />
            </div>
            <div className="border border-primaryPurple lg:p-10 p-5  text-center mt-10">
              <Typography variant="h3" className="text-primaryPurple">
                Category
              </Typography>
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
