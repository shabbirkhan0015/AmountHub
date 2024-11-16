import TaskCard from "./TaskCard";
const TaskInfo = () => {
  return (
    <div className="flex flex-col space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Operation Task Section */}
      <div className="flex flex-col space-y-3">
        <h1 className="text-xl sm:text-2xl font-bold">Operation Task (1)</h1>
        <div className="border-t border-gray-600"></div>
        <p className="text-sm sm:text-base text-gray-600 font-bold">
          0/0 task complete for this stage
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Responsive Task Cards */}
          <TaskCard
            title={"Collect Basis Application Info"}
            status={"Complete"}
          />
          <TaskCard
            title={"Collect Basis Application Info"}
            status={"Partial"}
          />
        </div>
        <span className="border-gray-600 border-2 p-0.5 bg-gray-200 rounded inline-block text-center w-fit text-sm sm:text-base">
          + Add a Task
        </span>
        <div className="border-t border-gray-600"></div>
      </div>

      {/* Customer Task Section */}
      <div className="flex flex-col space-y-3">
        <h1 className="text-xl sm:text-2xl font-bold">Customer Task (1)</h1>
        <div className="border-t border-gray-600"></div>
        <p className="text-sm sm:text-base text-gray-600 font-bold">
          0/0 task complete for this stage
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Responsive Task Cards */}
          <TaskCard
            title={"Collect Basis Application Info"}
            status={"Complete"}
          />
          <TaskCard
            title={"Collect Basis Application Info"}
            status={"Partial"}
          />
        </div>
        <div className="border-t border-gray-600"></div>
      </div>
    </div>
  );
};

export default TaskInfo;
