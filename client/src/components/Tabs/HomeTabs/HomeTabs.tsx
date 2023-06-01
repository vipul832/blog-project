import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import BlogList from "../../BlogList/BlogList";
import { useGetPostsQuery } from "../../../App/api/postsApi";

export default function HomeTabs() {
  const [activeTab, setActiveTab] = React.useState("view all");
  const { data } = useGetPostsQuery(activeTab);
  console.log(data);
  const data1 = [
    {
      label: "View all",
      value: "view all",
      desc: <BlogList posts={data ? data : []} />,
    },
    {
      label: "Design",
      value: "design",
      desc: <BlogList posts={data ? data : []} />,
    },
    {
      label: "Product",
      value: "product",
      desc: <BlogList posts={data ? data : []} />,
    },
    {
      label: "Software",
      value: "software",
      desc: <BlogList posts={data ? data : []} />,
    },
    {
      label: "Customer",
      value: "customer success",
      desc: <BlogList posts={data ? data : []} />,
    },
  ];
  return (
    <Tabs value={activeTab} className="min-h-screen mt-20 mb-16 ">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 items-center lg:w-[40%] overflow-auto"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-purple-600 shadow-none rounded-none",
        }}
      >
        {data1.map(({ label, value }) => (
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
        {data1.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="p-0">
            {desc}
            {/* <Desc /> */}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
