import { Bell } from "lucide-react";
const Topbar = () => {
    return (
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center gap-4">
                <Bell className="text-gray-600" />
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    A
                </div>
                <button
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/admin";
                }}
                className="text-sm text-red-500"
            >
                Logout
            </button>
            </div>
        </header>
    );
}

export default Topbar