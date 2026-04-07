import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api.js";

const PostsSection = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch posts
  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data.data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // ✅ Truncate text
  const truncate = (text, limit = 100) => {
    if (!text) return "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <section id="posting" className="py-12 md:py-16 px-4 sm:px-6 bg-gray-100">
      
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Latest Updates
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((p) => (
            <div
              key={p._id}
              onClick={() => navigate(`/post/${p._id}`)}
              className="bg-white p-4 sm:p-5 rounded-2xl shadow cursor-pointer hover:shadow-lg transition duration-300"
            >
              {/* Image */}
              {p.image && (
                <img
                  src={p.image}
                  alt="post"
                  className="w-full h-36 sm:h-40 object-cover rounded-lg mb-3"
                />
              )}

              {/* Title */}
              <h3 className="font-semibold text-base sm:text-lg mb-2 line-clamp-2">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-3">
                {truncate(p.description)}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No posts available
          </p>
        )}
      </div>
    </section>
  );
};

export default PostsSection;