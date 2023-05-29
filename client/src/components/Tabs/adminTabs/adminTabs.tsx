import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import BlogInRow from "../../BlogDisplayInAdmin/BlogInRow";
import { DRAFTBLOG, PUBLISHEDBLOG } from "../../../constant/constants";

export default function AdminTags() {
  const [activeTab, setActiveTab] = React.useState("draft");
  const data = [
    {
      label: "Draft",
      value: "draft",
      desc: <BlogInRow data={DRAFTBLOG} />,
    },
    {
      label: "Published",
      value: "published",
      desc: <BlogInRow data={PUBLISHEDBLOG} />,
    },
  ];
  return (
    <Tabs value={activeTab} className="mt-20 mb-16 w-[90%] z-0">
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
