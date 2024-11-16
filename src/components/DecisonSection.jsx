// components/ApplicationDetails.js
import React from "react";

const ApplicationDetails = () => {
  const stages = [
    { name: "Application", status: "Completed on 11/08/2024" },
    { name: "Offer Selection", status: "Completed on 11/08/2024" },
    { name: "ID Verification", status: "Completed on 11/08/2024" },
    { name: "Income Verification Method", status: "Completed on 11/08/2024" },
    { name: "Income Verification", status: "1 task incomplete" },
  ];

  return (
    <div className="application-details bg-white border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Application Details</h2>
      <div className="space-y-2">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-2"
          >
            <span className="text-gray-700 font-medium">{stage.name}</span>
            <span
              className={`text-sm ${
                stage.status.includes("incomplete")
                  ? "text-red-500"
                  : "text-green-600"
              }`}
            >
              {stage.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationDetails;
