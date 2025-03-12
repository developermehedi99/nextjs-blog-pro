import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const BlogIdpage = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();

  return (
    <div>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogIdpage;
