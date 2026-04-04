import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.js";
import FormField from "./FormField.jsx";
const AddClassForm = () => {

  const [form, setForm] = useState({
    className: "",
    monthlyFee: "",
  });

  const navigate = useNavigate();

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

    if (!form.className || !form.monthlyFee) {
      return alert("Please add class name and monthly fee");
    }

    try {
      await API.post("/classes", form);

      alert("Class added successfully");
      navigate("/admin/classes");

    } catch (error) {
      alert(error.response?.data?.message || "Error adding class");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="bg-white p-6 rounded-2xl shadow max-w-xl w-full">
        <h2 className="text-xl font-semibold mb-4">Add Class</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* name */}
          <FormField label="Class Name">
            <input
              type="text"
              name="className"
              value={form.className}
              onChange={handleChange}
              placeholder="Enter class name"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </FormField>
          <FormField label="Student fee">
            <input
              type="number"
              name="monthlyFee"
              value={form.monthlyFee}
              onChange={handleChange}
              placeholder="Enter monthly fee"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </FormField>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/classes")}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Class
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
export default AddClassForm