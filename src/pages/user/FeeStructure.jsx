import { useEffect, useState } from "react";
import API from "../../services/api.js";

const FeeStructure = () => {
  const [form, setForm] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await API.get("/classes");
        setForm(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchClasses();
  }, []);

  return (
    <section id="fee-structure" className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Fee Structure
      </h2>

      {/* List */}
      <div className="max-w-3xl mx-auto grid gap-4">
        {form.map((f, i) => (
          <div
            key={i}
            className="bg-white p-4 sm:p-5 rounded-xl shadow flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0"
          >
            {/* Class Name */}
            <span className="text-gray-700 text-sm sm:text-base">
              {f.className}
            </span>

            {/* Fee */}
            <span className="font-semibold text-green-600 text-sm sm:text-base">
              {f.monthlyFee}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeeStructure;