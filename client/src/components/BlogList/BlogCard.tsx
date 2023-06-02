import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { PostsGetData } from "../../utils/types";

type BlogCardProp = {
  title: string;
  body: string;
  id: string;
  category: string;
  img: string;
  blogInfo: PostsGetData;
};

export default function BlogCard({
  title,
  img,
  category,
  body,
  id,
  blogInfo,
}: BlogCardProp) {
  const navigate = useNavigate();
  return (
    <Card className="xl:w-[24rem] lg:w-[20rem] shadow-none mt-5 m-5" id={id}>
      <CardHeader className="p-0" floated={false} shadow={false}>
        <img
          src={img}
          alt=""
          className="w-full h-[200px] md:object-scale-down object-fill"
        />
      </CardHeader>
      <CardBody className="pt-3">
        <Typography className="text-primaryPurple font-bold text-sm">
          {category}
        </Typography>
        <div className="flex justify-between">
          <Link to="/blog">
            <Typography
              variant="h5"
              className="text-black font-bold underline cursor-pointer"
            >
              {title.length <= 15 ? title : title.substring(0, 40) + "..."}
            </Typography>
          </Link>
          <div className="md:block hidden">
            <Button
              variant="text"
              className="text-md"
              onClick={() => navigate("/blog", { state: blogInfo })}
            >
              A
            </Button>
          </div>
        </div>
        <div
          className="mt-2 text-sm"
          dangerouslySetInnerHTML={{
            __html: `${
              body.length <= 18 ? body : body.substring(0, 100) + "..."
            }`,
          }}
        >
          {/* {body.length <= 18 ? "" : body.substr(0, 100) + "..."} */}
        </div>
      </CardBody>
      <CardFooter className="py-0 pb-2">
        <div className="flex items-center justify-start">
          <Avatar
            size="md"
            variant="circular"
            alt="natali craig"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            className="border-2 border-white hover:z-10"
          />
          <div className="ms-3">
            <Typography className="text-sm font-bold text-black">
              Olivia Rhye
            </Typography>
            <Typography className="text-sm">20 Jan 2024</Typography>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
