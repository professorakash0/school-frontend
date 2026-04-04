import ActionButtonsTeacher from "./ActionButtonsTeacher";
import StatusBadge from "./StatusBadge";

const TeacherRow = ({ teacher }) => {
  
  

  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="p-4 font-medium">{teacher.name}</td>
      <td className="p-4 font-medium">{teacher.email}</td>
      <td className="p-4 font-medium">{teacher.classIncharge? teacher.classIncharge.className : "Not Assigned"}</td>
      <td className="p-4">
        <StatusBadge status={teacher.salaryStatus} paidDate={teacher.salaryPaidDate} />
      </td>
      <td className="p-4 text-right space-x-2">
        <ActionButtonsTeacher teacherId={teacher._id}/>
      </td>
    </tr>
  );
}

export default TeacherRow