import { Button, Typography } from "@material-tailwind/react";
import { PostsDb, PostsGetData } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import { useDeleteBlogMutation } from "../../App/api/postApi";

type BlogTabProps = {
  data: PostsDb;
};

export default function BlogInRow({ data }: BlogTabProps) {
  return (
    <>
      {data.map((blog, index) => {
        return <BlogTabCard key={index} blog={blog} />;
      })}
    </>
  );
}

type blogTabProps = {
  blog: PostsGetData;
};

function BlogTabCard({ blog }: blogTabProps) {
  const navigate = useNavigate();
  const [deleteBlog] = useDeleteBlogMutation();
  return (
    <div className="mt-10">
      <div className="lg:flex lg:justify-between">
        <div className="lg:flex lg:w-[70%] w-full items-center">
          <img src={blog.thumbnail} alt="" className="w-60 rounded-lg h-40" />
          <div className="md:ms-5 mt-3">
            <Typography variant={"h6"} className="text-black">
              {blog.title}
            </Typography>
            <Typography className={"lg:w-[70%]"}>
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
          <Button size="sm" className="mx-2" color="deep-purple">
            Published
          </Button>
        </div>
      </div>
    </div>
  );
}
