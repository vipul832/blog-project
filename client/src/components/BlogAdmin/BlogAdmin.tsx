import { useSelector } from "react-redux";
import { getUserInfo } from "../../App/feature/userSlice";
import { Button, Typography } from "@material-tailwind/react";
import AdminTabs from "../Tabs/adminTabs/adminTabs";
import { Link } from "react-router-dom";

const BlogAdmin = () => {
  const userInfo = useSelector(getUserInfo);
  return (
    <div className=" min-h-screen my-10 relative">
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
              <Link to="/blogeditor">
                <Button className="mt-5" color="blue">
                  Write new blog
                </Button>
              </Link>
            </div>
            <div className="lg:flex hidden">
              <img src="./assets/content_creator.svg" alt="content-creator" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-20 mb-10 justify-center flex">
        <AdminTabs />
      </div>
    </div>
  );
};

export default BlogAdmin;
