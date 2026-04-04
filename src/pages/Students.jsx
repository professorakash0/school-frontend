import React, { useEffect, useState } from "react";
import StudentsHeader from "../components/StudentsHeader";
import StudentsTable from "../components/StudentsTable";
import API from "../services/api.js";

// ================= MAIN PAGE =================
const Students = () => {
    const [search, setSearch] = useState("");
    const [students, setStudents] = useState([]);
    
    

    const fetchStudents = async () => {
        try {
            const res = await API.get("/students");
            setStudents(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    

    useEffect(() => {
        fetchStudents();
    }, []);

    const filtered = students.filter((s) =>
        s.fullName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 space-y-6">
            <StudentsHeader search={search} setSearch={setSearch} />
            <StudentsTable students={filtered} />
        </div>
    );
}
export default Students