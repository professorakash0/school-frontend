import RecentStudents from "./RecentStudents";
import StatsGrid from "./StatsGrid";

const MainContent = () => {
  return (
    <main className="flex-1 w-full p-4 sm:p-6 md:p-8 space-y-6 bg-gray-50">
      
      <StatsGrid />

      <div className="w-full">
        <RecentStudents />
      </div>

    </main>
  );
};

export default MainContent;