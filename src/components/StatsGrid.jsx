import StatCard from "./StatCard";
import { useEffect, useState } from "react";
import API from "../services/api";
import { Users } from "lucide-react";



const StatsGrid = () => {

    const [stats, setStats] = useState({
        students: 0,
        teachers: 0,
        classes: 0
    });
    useEffect(() => {
        const fetchData = async () => {
            const students = await API.get("/students");
            const teachers = await API.get("/teachers");
            const classes = await API.get("/classes");
            
            
            

            setStats({
                students: students.data?.length,
                teachers: teachers.data?.teachers.length,
                classes: classes.data?.length
            });
        };

        fetchData();
    }, []);


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard title="Students" value={stats.students} icon={<Users/>} />
            <StatCard title="Teachers" value={stats.teachers} />
            <StatCard title="Classes" value={stats.classes} />
        </div>
    );
}

export default StatsGrid