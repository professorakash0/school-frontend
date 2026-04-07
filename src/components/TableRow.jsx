const TableRow = ({ name, classValue, fee }) => {
  return (
    <tr className="border-b last:border-none hover:bg-gray-50 transition">
      
      <td className="py-3 pr-4 whitespace-nowrap text-sm sm:text-base">
        {name}
      </td>

      <td className="py-3 pr-4 whitespace-nowrap text-sm sm:text-base">
        {classValue}
      </td>

      <td
        className={`py-3 whitespace-nowrap text-sm sm:text-base font-medium ${
          fee === "Paid" ? "text-green-600" : "text-red-500"
        }`}
      >
        {fee}
      </td>

    </tr>
  );
};

export default TableRow;