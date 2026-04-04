import { Search } from "lucide-react";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="flex items-center bg-white px-3 rounded-lg shadow">
      <Search size={18} className="text-gray-400" />
      <input
        type="text"
        placeholder="Search students..."
        className="px-2 py-2 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
export default SearchBox