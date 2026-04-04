import AddTeacherButton from "./AddTeacherButton";
import SearchBoxTeacher from "./SearchBoxTeacher";

const TeachersHeader = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h1 className="text-2xl font-bold">Teachers</h1>

      <div className="flex gap-3">
        <SearchBoxTeacher search={search} setSearch={setSearch} />
        <AddTeacherButton />
      </div>
    </div>
  );
}

export default TeachersHeader