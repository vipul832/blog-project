import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import BlogList from "../../BlogList/BlogList";
import { useGetPostsQuery } from "../../../App/api/postApi";
import Pagination from "../../Paginate/Pagination";

export default function HomeTabs() {
  const [activeTab, setActiveTab] = React.useState("view_all");
  const [page, setPage] = useState(1);
  const { data } = useGetPostsQuery({
    category: activeTab,
    page: page,
    limit: 5,
  });
  console.log("homepage");
  const totalPage = data?.totalPages;
  const data1 = [
    {
      label: "View all",
      value: "view_all",
      desc: <BlogList posts={data ? data.posts : []} />,
    },
    {
      label: "Design",
      value: "Design",
      desc: <BlogList posts={data ? data.posts : []} />,
    },
    {
      label: "Product",
      value: "Product",
      desc: <BlogList posts={data ? data.posts : []} />,
    },
    {
      label: "Software",
      value: "Software",
      desc: <BlogList posts={data ? data.posts : []} />,
    },
    {
      label: "Customer",
      value: "Customer",
      desc: <BlogList posts={data ? data.posts : []} />,
    },
  ];
  return (
    <>
      <Tabs value={activeTab} className="min-h-screen mt-20 mb-16">
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 items-center lg:w-[40%] overflow-auto z-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-purple-600 shadow-none rounded-none",
          }}
        >
          {data1.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => {
                setActiveTab(value);
                setPage(1);
              }}
              className={`${
                activeTab === value ? "text-purple-600" : ""
              } whitespace-nowrap`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {data1?.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="p-0">
              {desc}
            </TabPanel>
          ))}
          {totalPage! > 1 ? (
            <Pagination
              totalPage={totalPage ? totalPage : 0}
              setPage={setPage}
            />
          ) : null}
        </TabsBody>
      </Tabs>
    </>
  );
}
