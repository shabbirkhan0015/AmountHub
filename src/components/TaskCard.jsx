const TaskCard = ({ title, status }) => {
  const statusColor = () => {
    if (status === "Complete") return "text-green-500";
    if (status === "Partial") return "text-yellow-500";
    if (status === "Failed") return "text-red-500";
    return "text-gray-500"; // Default for other statuses
  };

  return (
    <div className="border bg-gray-100 rounded-lg w-60 h-40 shadow-md flex flex-col justify-between p-2">
      <p className="text-lg font-semibold">{title}</p>
      <span
        className={`text-md font-medium bg-gray-200 ${statusColor()} w-24 text-center px-2 py-1 rounded`}
      >
        {status}
      </span>
      <div className="border-t-2 border-black p-2"></div>
    </div>
  );
};

export default TaskCard;
