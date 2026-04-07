import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <div
        className={`
          fixed md:static z-50 h-full
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 transition-transform duration-300
        `}
      >
       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col w-full">
        <Topbar setIsOpen={setIsOpen} />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;