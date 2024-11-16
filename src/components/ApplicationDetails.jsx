import { CheckCircleIcon } from "@heroicons/react/24/solid";

const stages = [
  { title: "Application", status: "completed", date: "11/08/2024" },
  { title: "Offer Selection", status: "completed", date: "11/08/2024" },
  { title: "ID Verification", status: "completed", date: "11/08/2024" },
  {
    title: "Income Verification Method",
    status: "completed",
    date: "11/08/2024",
  },
  {
    title: "Income Verification",
    status: "incomplete",
    tasks: "1 task incomplete",
  },
];

const ApplicationStage = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Application Stage</h2>
      <div className="relative">
        {/* Vertical progress line connecting all completed steps */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 bg-teal-500" />
        <div className="space-y-4">
          {stages.map((stage, index) => (
            <div key={index} className="flex items-center space-x-3">
              {/* Step Circle with Icon or Placeholder */}
              <div
                className={`relative w-8 h-8 flex items-center justify-center rounded-full 
                ${stage.status === "completed" ? "bg-teal-500" : "bg-gray-200"} 
                border-2 ${
                  stage.status === "completed"
                    ? "border-teal-500"
                    : "border-gray-300"
                }`}
              >
                {stage.status === "completed" ? (
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                ) : (
                  <div className="w-3 h-3 bg-gray-400 rounded-full" />
                )}

                {/* Vertical line connecting completed tasks */}
                {stage.status === "completed" && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 bg-teal-500 h-full" />
                )}
              </div>

              <div className="flex-1">
                <p
                  className={`font-medium ${
                    stage.status === "incomplete"
                      ? "text-black"
                      : "text-gray-700"
                  }`}
                >
                  {stage.title}
                </p>
                <p className="text-gray-500 text-sm">
                  {stage.status === "completed"
                    ? `Completed on ${stage.date}`
                    : stage.tasks}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationStage;
