import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MainContent from "../components/MainContent";

// ================= MAIN DASHBOARD =================
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard