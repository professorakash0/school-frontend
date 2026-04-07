import StatCard from "./StatCard";
import { useEffect, useState } from "react";
import API from "../services/api";
import { Users, Presentation, BookOpen } from "lucide-react";

const StatsGrid = () => {
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    classes: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Fetch all data in parallel (faster)
        const [studentsRes, teachersRes, classesRes] = await Promise.all([
          API.get("/students"),
          API.get("/teachers"),
          API.get("/classes"),
        ]);

        setStats({
          students: studentsRes.data?.length || 0,
          teachers: teachersRes.data?.teachers?.length || 0,
          classes: classesRes.data?.length || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      
      <StatCard
        title="Students"
        value={stats.students}
        icon={<Users size={20} />}
      />

      <StatCard
        title="Teachers"
        value={stats.teachers}
        icon={<Presentation size={20} />}
      />

      <StatCard
        title="Classes"
        value={stats.classes}
        icon={<BookOpen size={20} />}
      />

    </div>
  );
};

export default StatsGrid;