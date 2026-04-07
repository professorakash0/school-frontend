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
        fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        flex flex-col
      `}
    >
      {/* Header */}
      <div className="p-6 text-2xl font-bold text-blue-600 border-b flex items-center justify-between">
        School Admin

        {/* Close button (mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <X size={22} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-3 overflow-y-auto">
        <SidebarItem
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          to="/admin/dashboard"
          active
        />

        <SidebarItem
          icon={<Users size={18} />}
          label="Students"
          to="/admin/students"
        />

        <SidebarItem
          icon={<Presentation size={18} />}
          label="Teachers"
          to="/admin/teachers"
        />

        <SidebarItem
          icon={<BookOpen size={18} />}
          label="Classes"
          to="/admin/classes"
        />

        <SidebarItem
          icon={<FileText size={18} />}
          label="Posts"
          to="/admin/posts"
        />
      </nav>
    </aside>
  );
};

export default Sidebar;