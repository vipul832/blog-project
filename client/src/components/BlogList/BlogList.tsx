import Pagination from "../Paginate/Pagination";
import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:ms-0 ms-5 mb-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <hr className="bg-gray-700 my-3" />
      <Pagination />
    </div>
    // <div className="flex md:justify-evenly justify-center flex-wrap">
  );
};

export default BlogList;
