const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl shadow hover:shadow-md transition flex items-center justify-between">
      
      {/* Left Content */}
      <div>
        <p className="text-gray-500 text-xs sm:text-sm">
          {title}
        </p>

        <h3 className="text-xl sm:text-2xl font-bold mt-1">
          {value}
        </h3>
      </div>

      {/* Icon */}
      {icon && (
        <div className="bg-blue-100 text-blue-600 p-2 sm:p-3 rounded-xl">
          {icon}
        </div>
      )}

    </div>
  );
};

export default StatCard;