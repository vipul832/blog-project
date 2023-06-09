import { Button, Typography } from "@material-tailwind/react";
import { Post } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import {
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} from "../../App/api/postApi";
import publishError from "../../../public/assets/publish error.svg";
import draftError from "../../../public/assets/draft error.svg";
import { toast } from "react-hot-toast";
import DeleteConfirm from "../modelForDelete/DeleteConfirm";

type BlogInRowProps = {
  data: Post[];
  tab: string;
};

export default function BlogInRow({ data, tab }: BlogInRowProps) {
  return (
    <>
      {data.length > 0 ? (
        data.map((blog, index) => {
          return <BlogTabCard key={index} blog={blog} />;
        })
      ) : tab === "publish" ? (
        <div className="text-center">
          <Typography
            className="text-2xl font-bold mt-8 tracking-[0.1rem]"
            variant="paragraph"
          >
            Write Some Blog
          </Typography>
          <div className="flex justify-center mt-8">
            <img src={publishError} alt="publish error" width="500px" />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Typography
            className="text-2xl font-bold mt-8 tracking-[0.1rem]"
            variant="paragraph"
          >
            All Work Done
          </Typography>
          <div className="flex justify-center mt-8">
            <img src={draftError} alt="publish error" width="500px" />
          </div>
        </div>
      )}
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
          <img
            src={blog.thumbnail}
            alt="thumbnail"
            className="rounded-lg object-cover"
            width="250px"
            height="160px"
          />
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
          <DeleteConfirm blog={blog} />

          {blog.status === "publish" ? null : (
            <Button
              size="sm"
              className="mx-2"
              color="deep-purple"
              onClick={async () => {
                await updateBlog({
                  ...blog,
                  status: "publish",
                  visibility: "public",
                });
                /*toast */
                toast.success("Post Publish Successful");
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
