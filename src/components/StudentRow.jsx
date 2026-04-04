
import ActionButtons from "./ActionButtons";
import StatusBadge from "./StatusBadge";

const StudentRow = ({ student }) => {
  
  
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="p-4 font-medium">{student.fullName}</td>
      <td className="p-4 font-medium">{student.fatherName}</td>
      <td className="p-4">{student.class?.className || "N/A"}</td>
      <td className="p-4">
        <StatusBadge status={student.feeStatus} paidDate={student.feePaidDate} />
      </td>
      <td className="p-4 text-right space-x-2">
        <ActionButtons studentId={student._id}/>
      </td>
    </tr>
  );
}

export default StudentRow