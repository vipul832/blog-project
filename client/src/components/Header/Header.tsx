import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, removeUser } from "../../App/feature/userSlice";
import { getAuthStatus } from "../../App/feature/authSlice";
import { setSignOutUser } from "../../App/feature/authSlice";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const userAuthStatus = useSelector(getAuthStatus);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-gray-700"
      >
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-gray-700"
      >
        <NavLink to="/blogpanel" className="flex items-center">
          Blogs Admin
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 shadow-none">
      <div className="flex items-center lg:justify-around justify-between text-blue-gray-900">
        <div className="flex items-center gap-4">
          <div className="main-logo flex items-center">
            <div className="logo-img-div relative w-8 h-8 rounded-lg items-center overflow-hidden flex justify-center">
              <img
                className="logo-img"
                src="./assets/logo.svg"
                alt="logo"
                width="32"
                height="32"
              />
              <div className="logo-blur-rectangle z-[2] w-full h-1/2 backdrop-blur-[3px] absolute top-1/2 bottom-0 left-0 right-0 "></div>
              <div className="logo-dot z-[1] w-1/2 h-1/2 bg-red-500 rounded-[50%] absolute bg-gradient-to-r from-primaryPurple to-[#53389e]"></div>
            </div>
            <Typography className="logo-text ms-2 font-medium font-inter">
              GrandTalk's
            </Typography>
          </div>
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>

        {userAuthStatus.authStatus ? (
          <div>
            <ProfileMenu />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="hidden gap-2 lg:flex">
              <Link to="/signin">
                <Button variant="text" size="sm" color="blue-gray">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="gradient" size="sm" color="deep-purple">
                  Sign Up
                </Button>
              </Link>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        )}
      </div>

      <Collapse open={openNav}>
        {navList}
        <Link to="/signup">
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Sign Up</span>
          </Button>
        </Link>
        <Link to="/signin">
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Log In</span>
          </Button>
        </Link>
      </Collapse>
    </Navbar>
  );
}

const profileMenuItems = [
  {
    label: "Sign Out",
    icon: "p",
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src={userInfo.profileImage}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                closeMenu();
                dispatch(setSignOutUser());
                dispatch(removeUser());
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {/* {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })} */}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
