import { Post } from "../../utils/types";
import BlogCard from "./BlogCard";

type BloglistProps = {
  posts: Post[];
};

function BlogList({ posts }: BloglistProps) {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:ms-0 ms-5 mb-5 min-h-screen">
        {posts?.map((value, index) => {
          return (
            <BlogCard
              key={index}
              title={value.title}
              body={value.desc}
              id={value._id ? value._id : ""}
              category={value.category}
              img={value.thumbnail}
              blogInfo={value}
              userProfile={value.userProfile ? value.userProfile : ""}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;
