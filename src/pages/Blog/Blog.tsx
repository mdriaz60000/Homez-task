import Container from "@/components/shared/Container";
import b1 from "../../assets/blog/type3.jpg.png"
import b2 from "../../assets/blog/Figure → Link → p11-q38zewj2rpvfbg4j3u8tlic1y6iuf8mj8d2eblcq2k.jpg.png"
import b3 from "../../assets/blog/Figure → Link → p7-q38zexgs9pl7k532t8j9joxc2i340miufah1uys8hk.jpg.png"
import b4 from "../../assets/blog/Figure → Link → featured-img-q38zevl3w1imwx5t47q0epeevqcdl8bdr162wev0u0.jpg.png"
import Sponsor from "./Sponsor";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      img: b1,
      category: "Townhome",
      date: "Feb 03",
      title: "Unveils the Best Canadian Cities for Biking and Walk",
      type: "large",
    },
    {
      id: 2,
      img: b2,
      category: "Villa",
      date: "Feb 03",
      title: "Diamond Manor Apartment in the New York and Service",
      type: "large",
    },
    {
      id: 3,
      img: b4,
      category: "Townhome",
      date: "February 3, 2023",
      title: "7 Simple Ways to Keep Your Kids’ Toys From Cluttering",
      type: "small",
    },
    {
      id: 4,
      img: b3,
      category: "Houses",
      date: "February 3, 2023",
      title: "Housing Markets That Changed the Most This Year",
      type: "small",
    },
  ];

  return (
    <Container>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">From Our Blog</h2>
        <p className="text-gray-500 text-sm mt-2">
          Aliquam lacinia diam quis lacus euismod
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left 2 Large Blogs */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {blogs
            .filter((b) => b.type === "large")
            .map((blog) => (
              <div
                key={blog.id}
                className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="relative">
                  <img src={blog.img} alt={blog.title} className="w-full h-56 object-cover" />
                  <div className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-lg shadow text-center">
                    <p className="text-xs font-medium text-gray-600">Feb</p>
                    <p className="text-lg font-bold">03</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500">{blog.category}</p>
                  <h3 className="text-base font-semibold mt-1">{blog.title}</h3>
                </div>
              </div>
            ))}
        </div>

        {/* Right Small Blogs */}
        <div className="flex flex-col gap-6">
          {blogs
            .filter((b) => b.type === "small")
            .map((blog) => (
              <div key={blog.id} className="flex gap-4 items-center">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-40 h-30 object-cover rounded-lg"
                />
                <div>
                  <p className="text-xs text-gray-500">{blog.category}</p>
                  <h4 className="text-sm font-semibold leading-snug line-clamp-2">
                    {blog.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Sponsor />
    </Container>
  );
};

export default BlogSection;
