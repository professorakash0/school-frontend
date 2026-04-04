import ClassRow from "./ClassRow";
import TableHeaderClass from "./TableHeaderClass";

const ClassTable = ({ classes }) => {
  return (
    <div className="bg-white rounded-2xl shadow overflow-x-auto">
      <table className="w-full text-left">
        <TableHeaderClass />
        <tbody>
          {classes.map((clas) => (
            <ClassRow key={clas._id} clas={clas} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassTable