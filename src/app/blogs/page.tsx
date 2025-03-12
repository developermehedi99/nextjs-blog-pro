import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogsPages = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  return (
    <div className="w-[90%] mx-auto grid grid-cols-3 gap-6 my-10">
      {blogs.map((blog: Blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsPages;
