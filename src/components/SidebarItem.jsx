import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon, label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
          isActive
            ? "bg-blue-100 text-blue-600 font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default SidebarItem;