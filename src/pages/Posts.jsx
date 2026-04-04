import { useEffect, useState } from "react";
import API from "../services/api.js";
import PostCard from "../components/PostCard.jsx";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-6 space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Posts</h1>
        <button
          onClick={() => navigate("/admin/posts/create")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Create Post
        </button>
      </div>

      {/* Posts */}
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} onDelete={fetchPosts} />
        ))}
      </div>

    </div>
  );
};

export default Posts;