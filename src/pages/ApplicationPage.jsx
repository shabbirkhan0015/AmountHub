import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import ApplicationDetails from "../components/ApplicationDetails";
import DecisionSection from "../components/DecisonSection";
import DocumentsInfo from "../components/DocumentsInfo";
import UnderwritingInfo from "../components/UnderWritingInfo";
import VerificationInfo from "../components/VerificationInfo";
import ThirdPartyInfo from "../components/ThirdPartyInfo";
import DecisionInfo from "../components/DecisionInfo";
import AppInfo from "../components/AppInfo";
import OffersList from "../components/OffersList";
import FraudInfo from "../components/FraudInfo";
const ApplicationPage = (applicationId) => {
  const [selectedMenu, setSelectedMenu] = useState("Application");

  const handleSelect = (menuName) => {
    setSelectedMenu(menuName);
    console.log("Selected menu item:", menuName); // You can use this to conditionally render content based on selection
  };

  const renderMainContent = () => {
    const components = {
      Application: <AppInfo />,
      Fraud: <FraudInfo />,
      Verification: <VerificationInfo />,
      "Third Party Info": <ThirdPartyInfo />,
      Decision: <DecisionInfo />,
      Documents: <DocumentsInfo />,
      Underwriting: <UnderwritingInfo />,
    };

    return components[selectedMenu];
  };
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-gray-100 border-b-2 bg-white py-4">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Michael Scott</h1>
          <p className="text-gray-600">Stage: Income Verification</p>
          <p className="text-gray-600">Decision Status: Partial</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
          Withdraw or Appeal
        </button>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 pt-4">
        {/* Sidebar */}
        <div className="col-span-1 md:col-span-2 bg-white p-2 rounded-lg shadow-md">
          <Sidebar onSelect={handleSelect} />
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-8 bg-gray-50 p-2 rounded-lg shadow-md">
          {renderMainContent()}
        </div>

        {/* Application Details */}
        <div className="col-span-1 md:col-span-2 bg-white p-2 rounded-lg shadow-md">
          <ApplicationDetails menu={selectedMenu} />
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
