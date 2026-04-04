import RecentStudents from "./RecentStudents";
import StatsGrid from "./StatsGrid";

const MainContent = () => {
  return (
    <main className="p-6 space-y-6">
      <StatsGrid />
      <RecentStudents />
    </main>
  );
}

export default MainContent