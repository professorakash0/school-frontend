import ActionButtonsClass from "./ActionButtonsClass";


const ClassRow = ({ clas }) => {
  
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="p-4 font-medium">{clas.className}</td>
      <td className="p-4 font-medium">{clas.classIncharge}</td>
      <td className="p-4 font-medium">{clas.studentCount}</td>
      <td className="p-4 font-medium">{clas.monthlyFee}</td>
      <td className="p-4 text-right space-x-2">
        <ActionButtonsClass classId={clas._id}/>
      </td>
    </tr>
  );
}

export default ClassRow