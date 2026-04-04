import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import API from "../services/api.js"

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
        <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Students</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-500 border-b">
                            <th className="py-2">Name</th>
                            <th className="py-2">Class</th>
                            <th className="py-2">Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((s)=>(
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
}
export default RecentStudents