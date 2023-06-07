import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import BlogInRow from "../../BlogDisplayInAdmin/BlogInRow";
import { getUserInfo } from "../../../App/feature/userSlice";
import { useSelector } from "react-redux";
import { useGetAdminBlogsQuery } from "../../../App/api/postApi";

export default function AdminTags() {
  const [activeTab, setActiveTab] = React.useState("publish");
  const userInfo = useSelector(getUserInfo);
  const { data } = useGetAdminBlogsQuery({
    id: userInfo.userId,
    status: activeTab,
  });
  console.log(data);
  const blogTabs = [
    {
      label: "Publish",
      value: "publish",
      desc: <BlogInRow data={data ? data : []} />,
    },
    {
      label: "Draft",
      value: "draft",
      desc: <BlogInRow data={data ? data : []} />,
    },
  ];
  return (
    <Tabs
      value={activeTab}
      className="mt-20 mb-16 w-[90%] z-0 backdrop-blur-lg p-4 rounded-md"
    >
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 items-center lg:w-[40%] overflow-auto"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-purple-600 shadow-none rounded-none",
        }}
      >
        {blogTabs.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`${
              activeTab === value ? "text-purple-600" : ""
            } whitespace-nowrap`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody>
        {blogTabs.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="p-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
