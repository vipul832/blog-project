import { Button, Typography } from "@material-tailwind/react";
import { DRAFTBLOG } from "../../constant/constants";

type BlogTabProps = {
  data: typeof DRAFTBLOG;
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

type blogstruct = {
  blog: {
    userId: number;
    id: number;
    title: string;
    body: string;
    published: boolean;
  };
};

function BlogTabCard({ blog }: blogstruct) {
  return (
    <div className="mt-10">
      <div className="lg:flex lg:justify-between block">
        <div className="lg:flex lg:w-[70%] w-full">
          <img src="./assets/7.jpg" alt="" className="w-60 rounded-lg" />
          <div className="md:ms-5 mt-3">
            <Typography variant={"h6"} className="text-black">
              {blog.title}
            </Typography>
            <Typography className={"lg:w-[50%]"}>
              {blog.body.length <= 18 ? "" : blog.body.substr(0, 100) + "..."}
            </Typography>
            <Typography className="font-bold">12/01/23</Typography>
          </div>
        </div>
        <div className="">
          <Button size="sm" className="mx-2" color="deep-purple">
            Edit
          </Button>
          <Button size="sm" className="mx-2" color="deep-purple">
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
