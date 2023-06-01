import { PostsDb } from "../../utils/types";
import Pagination from "../Paginate/Pagination";
import BlogCard from "./BlogCard";

type BloglistProps = {
  posts: PostsDb;
};

function BlogList({ posts }: BloglistProps) {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:ms-0 ms-5 mb-5">
        {posts.map((value, index) => {
          return (
            <BlogCard
              key={index}
              title={value.title}
              body={value.desc}
              id={index}
              category={value.category}
              img={value.thumbnail}
            />
          );
        })}
      </div>
      <hr className="bg-gray-700 my-3" />
      <Pagination />
    </div>
  );
}

export default BlogList;
