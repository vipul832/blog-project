import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import BlogList from "../BlogList/BlogList";

export default function HomeTabs() {
  const [activeTab, setActiveTab] = React.useState("view-all");
  const data = [
    {
      label: "View all",
      value: "view-all",
      desc: <BlogList />,
    },
    {
      label: "Design",
      value: "design",
      desc: "Design Blog",
    },
    {
      label: "Product",
      value: "product",
      desc: "Product Blog",
    },
    {
      label: "Software",
      value: "sde",
      desc: "Software Blog",
    },
    {
      label: "Customer",
      value: "customer-success",
      desc: "Customer Blog",
    },
  ];
  return (
    <Tabs value={activeTab} className="container mt-20 mx-auto mb-16">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 items-center lg:w-[40%] overflow-auto"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-purple-600 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
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
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="p-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
