import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.js";
import FormField from "./FormField.jsx";
const AddStudentForm = ()=> {
  const [form, setForm] = useState({
    fullName: "",
    fatherName: "",
    class: "",
    feeStatus: "",
  });

  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  // 🔥 Fetch classes
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await API.get("/classes");
        setClasses(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClasses();
  }, []);

  // 🔄 Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🚀 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullName || !form.fatherName || !form.class || !form.feeStatus) {
      return alert("Please fill all fields");
    }

    try {
      await API.post("/students", form);

      alert("Student added successfully");

      navigate("/admin/students");

    } catch (error) {
      alert(error.response?.data?.message || "Error adding student");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="bg-white p-6 rounded-2xl shadow max-w-xl w-full">
        <h2 className="text-xl font-semibold mb-4">Add Student</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <FormField label="Full Name">
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter student name"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </FormField>

          {/* Father Name */}
          <FormField label="Father Name">
            <input
              type="text"
              name="fatherName"
              value={form.fatherName}
              onChange={handleChange}
              placeholder="Enter father name"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </FormField>

          {/* Class */}
          <FormField label="Class">
            <select
              name="class"
              value={form.class}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="">Select Class</option>
              {classes.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.className}
                </option>
              ))}
            </select>
          </FormField>

          {/* Fee Status */}
          <FormField label="Fee Status">
            <select
              name="feeStatus"
              value={form.feeStatus}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="">Select Status</option>
              <option value="paid">Paid</option>
              <option value="not paid">Not Paid</option>
            </select>
          </FormField>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/students")}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Student
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
export default AddStudentForm