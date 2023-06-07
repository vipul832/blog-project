import { Button, Typography } from "@material-tailwind/react";
import { PostUpdate, Post } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import {
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} from "../../App/api/postApi";

type BlogInRowProps = {
  data: Post[];
};

export default function BlogInRow({ data }: BlogInRowProps) {
  return (
    <>
      {data.map((blog, index) => {
        return <BlogTabCard key={index} blog={blog} />;
      })}
    </>
  );
}

type blogTabCardProps = {
  blog: Post;
};

function BlogTabCard({ blog }: blogTabCardProps) {
  const navigate = useNavigate();
  const [updateBlog] = useUpdateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();
  return (
    <div className="mt-10">
      <div className="lg:flex lg:justify-between">
        <div className="lg:flex lg:w-[70%] w-full items-center">
          <img src={blog.thumbnail} alt="" className="w-60 rounded-lg h-40" />
          <div className="md:ms-5 mt-3">
            <Typography className={"text-primaryPurple font-bold"}>
              {blog.category}
            </Typography>
            <Typography variant={"h6"} className="text-black">
              {blog.title}
            </Typography>
            <Typography className={"lg:w-[70%] text-black"}>
              {blog.desc.length <= 18
                ? ""
                : blog.desc.substring(0, 100) + "..."}
            </Typography>
            <Typography className="font-bold">12/01/23</Typography>
          </div>
        </div>
        <div className="whitespace-nowrap">
          <Button
            size="sm"
            className="mx-2"
            color="deep-purple"
            onClick={() => {
              navigate("/blogeditor", { state: blog });
            }}
          >
            Edit
          </Button>
          <Button
            size="sm"
            className="mx-2"
            color="deep-purple"
            onClick={() => deleteBlog(blog)}
          >
            Delete
          </Button>
          {blog.status === "publish" ? null : (
            <Button
              size="sm"
              className="mx-2"
              color="deep-purple"
              onClick={() => {
                console.log(blog);
                updateBlog({
                  ...blog,
                  status: "publish",
                  visibility: "public",
                } as PostUpdate);
              }}
            >
              Published
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
