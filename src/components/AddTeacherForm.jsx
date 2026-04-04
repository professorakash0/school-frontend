import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.js";
import FormField from "./FormField.jsx";
const AddTeacherForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    classIncharge: "",
    salaryStatus: "not paid",
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

    if (!form.name || !form.email) {
      return alert("name and email are required");
    }

    try {
      await API.post("/teachers", form);



      alert("Teacher added successfully");
      navigate("/admin/teachers");

    } catch (error) {
      alert(error.response?.data?.message || "Error adding teacher");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="bg-white p-6 rounded-2xl shadow max-w-xl w-full">
        <h2 className="text-xl font-semibold mb-4">Add Teacher</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* name */}
          <FormField label="name">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter teacher name"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </FormField>

          {/* Email */}
          <FormField label="Email">
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </FormField>

          {/* Class Incharge */}
          <FormField label="Incharge">
            <select
              name="classIncharge"
              value={form.classIncharge}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="">No Class Assigned</option>
              {classes.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.className}
                </option>
              ))}
            </select>
          </FormField>

          {/* Fee Status */}
          <FormField label="Salary Status">
            <select
              name="salaryStatus"
              value={form.salaryStatus}
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
              onClick={() => navigate("/admin/teachers")}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Teacher
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
export default AddTeacherForm