import { FileText, Presentation, Users, BookOpen, Settings, LayoutDashboard } from "lucide-react";

import SidebarItem from "./SidebarItem";
const Sidebar = ()=> {
  return (
    <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col">
      <div className="p-6 text-2xl font-bold text-blue-600 border-b">
        School Admin
      </div>
      <nav className="flex-1 p-4 space-y-3">
        <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" to="/admin/dashboard" active />
        <SidebarItem icon={<Users size={18} />} label="Students" to="/admin/students" />
        <SidebarItem icon={<Presentation size={18} />} label="teachers" to="/admin/teachers" />
        <SidebarItem icon={<BookOpen size={18} />} label="Classes" to="/admin/classes"/>
        <SidebarItem icon={<FileText size={18} />} label="Posts" to="/admin/posts"/>
      </nav>
    </aside>
  );
}

export default Sidebar