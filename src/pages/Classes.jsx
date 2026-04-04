import React, { useEffect, useState } from "react";
import API from "../services/api.js";
import ClassesHeader from "../components/ClassesHeaders.jsx";
import ClassTable from "../components/ClassTable.jsx";

// ================= MAIN PAGE =================
const Classes = () => {
    const [search, setSearch] = useState("");
    const [classes, setClasses] = useState([]);
    console.log(classes);
    

    
    const fetchClasses = async () => {
        try {
            const res = await API.get("/classes");
            setClasses(res.data);
        } catch (error) {
            console.error(error);
        }
    };



    useEffect(() => {
        fetchClasses();
    }, []);

    const filtered = classes.filter((s) =>{
       return s.className.toLowerCase().includes(search.toLowerCase())
    });
    

    return (
        <div className="p-6 space-y-6">
            <ClassesHeader search={search} setSearch={setSearch} />
            <ClassTable classes={filtered} />
        </div>
    );
}
export default Classes