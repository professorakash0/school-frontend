import {
  FileText,
  Presentation,
  Users,
  BookOpen,
  LayoutDashboard,
  X,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <aside
      className={`
    fixed md:sticky top-0 left-0 h-screen md:h-screen w-64 
    bg-white border-r shadow-sm z-50
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
    flex flex-col
  `}
    >
      {/* Header */}
      <div className="p-6 text-xl font-bold text-blue-600 border-b flex justify-between items-center">
        School Admin

        <button className="md:hidden" onClick={() => setIsOpen(false)}>
          <X size={22} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" to="/admin/dashboard" />
        <SidebarItem icon={<Users size={18} />} label="Students" to="/admin/students" />
        <SidebarItem icon={<Presentation size={18} />} label="Teachers" to="/admin/teachers" />
        <SidebarItem icon={<BookOpen size={18} />} label="Classes" to="/admin/classes" />
        <SidebarItem icon={<FileText size={18} />} label="Posts" to="/admin/posts" />
      </nav>
    </aside>
  );
};

export default Sidebar;