import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddStudentButton= () => {

  const navigate = useNavigate()
  return (
    <button 
    onClick={()=>navigate("/admin/add-students")}
    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      <Plus size={18} /> Add Student
    </button>
  );
}
export default AddStudentButton