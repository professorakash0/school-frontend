import StudentRow from "./StudentRow";
import TableHeader from "./TableHeader";

const StudentsTable = ({ students }) => {
  return (
    <div className="bg-white rounded-2xl shadow overflow-x-auto">
      <table className="w-full text-left">
        <TableHeader />
        <tbody>
          {students.map((student) => (
            <StudentRow key={student._id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsTable