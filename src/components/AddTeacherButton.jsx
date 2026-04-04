import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddTeacherButton= () => {

  const navigate = useNavigate()
  return (
    <button 
    onClick={()=>navigate("/admin/add-teachers")}
    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      <Plus size={18} /> Add Teacher
    </button>
  );
}
export default AddTeacherButton