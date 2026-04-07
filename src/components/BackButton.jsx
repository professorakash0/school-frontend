import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-4"
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
};

export default BackButton;