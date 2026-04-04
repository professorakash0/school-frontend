import { useNavigate } from "react-router-dom";
import API from "../services/api.js";

const ActionButtonsTeacher = ({ teacherId }) => {

  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      await API.delete(`/teachers/${teacherId}`);
      window.location.reload(); 
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <button 
       onClick={() => navigate(`/admin/teachers/edit/${teacherId}`)}
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

export default ActionButtonsTeacher