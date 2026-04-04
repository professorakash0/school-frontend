const TableHeader = () => {
  return (
    <thead className="bg-gray-50">
      <tr className="text-gray-600 text-sm">
        <th className="p-4">Name</th>
        <th className="p-4">father</th>
        <th className="p-4">Class</th>
        <th className="p-4">Fee Status</th>
        <th className="p-4 text-right">Actions</th>
      </tr>
    </thead>
  );
}
export default TableHeader