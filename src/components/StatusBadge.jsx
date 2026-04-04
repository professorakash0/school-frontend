const StatusBadge = ({ status, paidDate }) => {
  if (!status) {
    return (
      <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
        Unknown
      </span>
    );
  }

  const normalized = status.toLowerCase().trim();
  const isPaid = normalized === "paid";

  // ✅ Format date
  const formattedDate = paidDate
    ? new Date(paidDate).toLocaleDateString()
    : null;

  return (
    <span
      className={`px-3 py-1 text-sm rounded-full ${
        isPaid
          ? "bg-green-100 text-green-600"
          : "bg-red-100 text-red-600"
      }`}
    >
      {isPaid
        ? `Paid: ${formattedDate}`
        : "Not Paid"}
    </span>
  );
};

export default StatusBadge;