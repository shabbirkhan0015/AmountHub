const QueueManager = () => {
  return (
    <div>
      <div className="flex flex-col h-24 border-b border-black">
        <div className="flex items-center mx-6 my-auto justify-between">
          <h1 className="text-xl"> Queue Manager</h1>
          <button className="bg-blue-600 p-2 text-white rounded-lg">
            Create Aplication
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100">
        <div className="flex justify-end mx-6 space-x-2 items-center my-4 text-sm">
          <h1 className="bg-gray-400 p-2">Config Search </h1>
          <input
            type="text"
            name="search"
            placeholder="Search.."
            class="border-2 w-1/3 border-gray-300 rounded-lg bg-white bg-[url('/Users/shabbirkhan/Desktop/Shabbir/GR/AmountHub/src/assets/searchincon.png')] bg-[length:20px_20px] bg-[10px] bg-no-repeat p-2 pl-10"
          />
          <h1>Result 1232</h1>
        </div>
      </div>
      <div className="flex flex-col px-10 bg-gray-100 rounded-lg">
        <div className="overflow-x-auto flex justify-between">
          <div className="px-4 text-left text-sm font-semibold flex items-center">
            Application ID
            <span className="flex flex-col ml-2 text-gray-500">
              <span className="text-xs leading-none">&#9650;</span>
              <span className="text-xs leading-none">&#9660;</span>
            </span>
          </div>
          <div className="p-4 text-left text-sm font-semibold flex items-center">
            Days in Queue
            <span className="flex flex-col ml-2 text-gray-500">
              <span className="text-xs leading-none">&#9650;</span>
              <span className="text-xs leading-none">&#9660;</span>
            </span>
          </div>
          <div className="p-4 text-left text-sm font-semibold flex items-center">
            Applicant First Name
            <span className="flex flex-col ml-2 text-gray-500">
              <span className="text-xs leading-none">&#9650;</span>
              <span className="text-xs leading-none">&#9660;</span>
            </span>
          </div>
          <div className="p-4 text-left text-sm font-semibold border-b border-gray-200 flex items-center">
            Applicant Last Name
            <span className="flex flex-col ml-2 text-gray-500">
              <span className="text-xs leading-none">&#9650;</span>
              <span className="text-xs leading-none">&#9660;</span>
            </span>
          </div>
          <div className="p-4 text-left text-sm font-semibold flex items-center">
            Decision Status
            <span className="flex flex-col ml-2 text-gray-500">
              <span className="text-xs leading-none">&#9650;</span>
              <span className="text-xs leading-none">&#9660;</span>
            </span>
          </div>
          <div className="p-4 text-left text-sm font-semibold flex items-center">
            Decision Stage
            <span className="flex flex-col ml-2 text-gray-500">
              <span className="text-xs leading-none">&#9650;</span>
              <span className="text-xs leading-none">&#9660;</span>
            </span>
          </div>
        </div>

        {/* Data Rows */}
        <div className="flex flex-col bg-gray-100 rounded-lg bg-white text-md">
          <div className="overflow-x-auto flex flex-col">
            {/* Example data array */}
            {[
              {
                id: "svc-grt1222939322",
                days: 4,
                firstName: "John",
                lastName: "Smith",
                status: "Approved",
                stage: "Approved",
              },
              {
                id: "svc-grt1222939323",
                days: 5,
                firstName: "Jane",
                lastName: "Doe",
                status: "Pending",
                stage: "Under Review",
              },
              {
                id: "svc-grt1222939324",
                days: 2,
                firstName: "Mike",
                lastName: "Johnson",
                status: "Rejected",
                stage: "Closed",
              },
            ].map((application, index) => (
              <div
                key={index}
                className="flex justify-center bg-white border-gray-200 mb-2"
              >
                <span className="flex-1 text-center">{application.id}</span>
                <span className="flex-1 text-center">
                  {application.days} days
                </span>
                <span className="flex-1 text-center">
                  {application.firstName}
                </span>
                <span className="flex-1 text-center">
                  {application.lastName}
                </span>
                <span className="flex-1 text-center">{application.status}</span>
                <span className="flex-1 text-center">{application.stage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueManager;
