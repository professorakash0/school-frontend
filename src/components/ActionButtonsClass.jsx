import API from "../services/api.js";

const ActionButtonsClass = ({ classId }) => {

    const handleDelete = async () => {
        try {
            await API.delete(`/classes/${classId}`);
            window.location.reload();
        } catch (error) {
            alert(error.response?.data?.message || "Error deleting class");
        }
    };


    return (
        <>
            <button
                onClick={handleDelete}
                className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200">
                Delete
            </button>
        </>
    );
}

export default ActionButtonsClass