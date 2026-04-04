import TableHeaderTeacher from "./TableHeaderTeacher";
import TeacherRow from "./TeacherRow";

const TeacherTable = ({ teachers }) => {
  return (
    <div className="bg-white rounded-2xl shadow overflow-x-auto">
      <table className="w-full text-left">
        <TableHeaderTeacher />
        <tbody>
          {teachers.map((teacher) => (
            <TeacherRow key={teacher._id} teacher={teacher} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherTable