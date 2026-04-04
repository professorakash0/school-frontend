const TableHeaderClass = () => {
  return (
    <thead className="bg-gray-50">
      <tr className="text-gray-600 text-sm">
        <th className="p-4">Class Name</th>
        <th className="p-4">Incharge</th>
        <th className="p-4">Students</th>
        <th className="p-4">Student fee</th>
        <th className="p-4 text-right">Actions</th>
      </tr>
    </thead>
  );
}
export default TableHeaderClass