import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import API from "../services/api.js";

const RecentStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await API.get("/students");
      setStudents(res.data);
    };
    fetchStudents();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Recent Students
      </h2>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[500px] w-full text-left text-sm sm:text-base">
          
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Class</th>
              <th className="py-2">Fee</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <TableRow
                key={s._id}
                name={s.fullName}
                classValue={s.class?.className}
                fee={s.feeStatus === "paid" ? "Paid" : "Not Paid"}
              />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default RecentStudents;