import API from "../services/api.js";

const PostCard = ({ post, onDelete }) => {

  const handleDelete = async () => {
    if (!window.confirm("Delete this post?")) return;

    try {
      await API.delete(`/posts/${post._id}`);
      onDelete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      
      {post.image && (
        <img
          src={`https://school-production-f386.up.railway.app/${post.image}`}
          alt="post"
          className="w-full h-40 object-cover"
        />
      )}

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{post.title}</h3>
        <p className="text-sm text-gray-600">{post.description}</p>

        <button
          onClick={handleDelete}
          className="text-red-500 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;