const TableRow = ({ name, classValue, fee }) => {
  return (
    <tr className="border-b last:border-none hover:bg-gray-50 transition">
      
      <td className="py-3 pr-4 whitespace-nowrap">
        {name}
      </td>

      <td className="py-3 pr-4 whitespace-nowrap">
        {classValue}
      </td>

      <td
        className={`py-3 whitespace-nowrap font-medium ${
          fee === "Paid" ? "text-green-600" : "text-red-500"
        }`}
      >
        {fee}
      </td>

    </tr>
  );
};

export default TableRow;