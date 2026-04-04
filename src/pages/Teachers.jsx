import React, { useEffect, useState } from "react";
import API from "../services/api.js";
import TeachersHeader from "../components/TeachersHeader.jsx";
import TeacherTable from "../components/TeacherTable.jsx";

// ================= MAIN PAGE =================
const Teachers = () => {
    const [search, setSearch] = useState("");
    const [teachers, setTeachers] = useState([]);


    const fetchTeachers = async () => {
        try {
            const res = await API.get("/teachers");

            setTeachers(res.data.teachers);
        } catch (error) {
            console.error(error);
        }
    };



    useEffect(() => {
        fetchTeachers();
    }, []);

    const filtered = Array.isArray(teachers)
        ? teachers.filter((t) =>
            t.name.toLowerCase().includes(search.toLowerCase())
        )
        : [];



    return (
        <div className="p-6 space-y-6">
            <TeachersHeader search={search} setSearch={setSearch} />
            <TeacherTable teachers={filtered} />
        </div>
    );
}
export default Teachers