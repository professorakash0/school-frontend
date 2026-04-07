import { Bell, Menu } from "lucide-react";

const Topbar = ({ setIsOpen }) => {
  return (
    <header className="bg-white shadow-sm px-4 sm:px-6 py-4 flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        
        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>

        <h1 className="text-lg sm:text-xl font-semibold">
          Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 sm:gap-4">
        
        {/* Bell */}
        <Bell className="text-gray-600" size={20} />

        {/* Avatar */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
          A
        </div>

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin";
          }}
          className="text-xs sm:text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;