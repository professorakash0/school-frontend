import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api.js";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    fatherName: "",
    class: "",
    feeStatus: "not paid",
  });

  

  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch student + classes
  useEffect(() => {
    const fetchData = async () => {
      try {       
        const [studentRes, classRes] = await Promise.all([
          API.get(`/students/${id}`),
          API.get("/classes"),
        ]);

        const student = studentRes.data.student;
        

        // ✅ Set form with existing data
        setForm({
          fullName: student.fullName || "",
          fatherName: student.fatherName || "",
          class: student.class?._id || "", // IMPORTANT
          feeStatus: student.feeStatus || "not paid",
        });

        setClasses(classRes.data || []);
      } catch (error) {
        console.error("ERROR:", error.response || error);
        alert(error.response?.data?.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // ✅ Handle change (controlled inputs)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/students/${id}`, {
        ...form,
        class: form.class || null,
      });

      alert("Student updated successfully");
      navigate("/admin/students");
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
    }
  };

  // ✅ Loading state
  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-4">Edit Student</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          {/* Father Name */}
          <input
            type="text"
            name="fatherName"
            value={form.fatherName}
            onChange={handleChange}
            placeholder="Father Name"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          {/* Class */}
          <select
            name="class"
            value={form.class}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            {classes.map((c) => (
              <option key={c._id} value={c._id}>
                {c.className}
              </option>
            ))}
          </select>

          {/* Fee Status */}
          <select
            name="feeStatus"
            value={form.feeStatus}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="paid">Paid</option>
            <option value="not paid">Not Paid</option>
          </select>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/students")}
              className="px-4 py-2 bg-gray-100 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Update Student
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditStudent;