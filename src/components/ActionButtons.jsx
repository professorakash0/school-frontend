import { useNavigate } from "react-router-dom";
import API from "../services/api.js";

const ActionButtons = ({ studentId }) => {

  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      await API.delete(`/students/${studentId}`);
      window.location.reload(); // simple refresh
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <button
      onClick={() => navigate(`/admin/students/edit/${studentId}`)}
      className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
        Edit
      </button>
      <button 
       onClick={handleDelete}
      className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200">
        Delete
      </button>
    </>
  );
}

export default ActionButtons