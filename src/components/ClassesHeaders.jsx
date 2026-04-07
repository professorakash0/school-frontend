import AddClassButton from "./AddClassButton";
import BackButton from "./BackButton";
import SearchBoxClasses from "./SearchBoxClasses";


const ClassesHeader = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <BackButton />
      <h1 className="text-2xl font-bold">Classes</h1>

      <div className="flex gap-3">
        <SearchBoxClasses search={search} setSearch={setSearch} />
        <AddClassButton />
      </div>
    </div>
  );
}

export default ClassesHeader