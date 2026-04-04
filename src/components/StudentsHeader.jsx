import AddStudentButton from "./AddStudentButton";
import SearchBox from "./SearchBox";

const StudentsHeader = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h1 className="text-2xl font-bold">Students</h1>

      <div className="flex gap-3">
        <SearchBox search={search} setSearch={setSearch} />
        <AddStudentButton />
      </div>
    </div>
  );
}

export default StudentsHeader