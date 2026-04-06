import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api.js";


const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    try {
      const res = await API.get(`/posts/${id}`);
      setPost(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 hover:underline"
        >
          ← Back
        </button>

        {/* 📦 Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* 🖼️ Image */}
          {post.image && (
            <img
              src={post.image}
              alt="post"
              className="w-full h-72 object-cover"
            />
          )}

          {/* 📄 Content */}
          <div className="p-6 md:p-8">

            {/* 🏷️ Title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              {post.title}
            </h1>

            {/* 📅 Date */}
            {post.createdAt && (
              <p className="text-sm text-gray-400 mb-6">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            )}

            {/* 📝 Description */}
            <p className="text-gray-700 leading-relaxed text-[15px] md:text-base whitespace-pre-line">
              {post.description}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;