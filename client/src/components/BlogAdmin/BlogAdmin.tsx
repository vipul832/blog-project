import { useSelector } from "react-redux";
import { getUserInfo } from "../../App/feature/userSlice";
import { Button, Typography } from "@material-tailwind/react";

const BlogAdmin = () => {
  const userInfo = useSelector(getUserInfo);

  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <div className="w-[80%] p-5 mt-10 shadow-lg rounded-lg bg-gradient-to-br from-[#4942E4] to-primaryPurple shadow-primaryPurple">
          {/* Introduction area */}
          <div className="flex lg:justify-between justify-center h-full px-12 items-center">
            <div>
              <Typography
                variant="h3"
                className="text-white font-bold whitespace-nowrap"
              >
                Hello, <span className="text-[2.5rem]">{userInfo.name} !</span>
              </Typography>
              <div className="lg:w-96 h-20 text-gray-300 w-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                quae quisquam excepturi itaque hic maxime.
              </div>
              <Button className="mt-5" color="blue">
                Write new blog
              </Button>
            </div>
            <div className="lg:flex hidden">right</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%] p-5 mt-10 shadow-lg rounded-lg"></div>
      </div>
    </div>
  );
};

export default BlogAdmin;
