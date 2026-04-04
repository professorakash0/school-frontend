const TableRow= ({ name, classValue, fee })=> {
  return (
    <tr className="border-b last:border-none">
      <td className="py-3">{name}</td>
      <td className="py-3">{classValue}</td>
      <td className="py-3">{fee}</td>
    </tr>
  );
}

export default TableRow