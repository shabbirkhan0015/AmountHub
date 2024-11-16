// components/Sidebar.js
import React, { useState } from "react";
import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  IdentificationIcon,
  InformationCircleIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ onSelect }) => {
  const [selected, setSelected] = useState("Application");

  const menuItems = [
    { name: "Application", icon: <HomeIcon className="h-5 w-5" /> },
    {
      name: "Underwriting",
      icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
    },
    { name: "Fraud", icon: <ShieldCheckIcon className="h-5 w-5" /> },
    { name: "Verification", icon: <MagnifyingGlassIcon className="h-5 w-5" /> },
    {
      name: "Third Party Info",
      icon: <InformationCircleIcon className="h-5 w-5" />,
    },
    { name: "Decision", icon: <FolderOpenIcon className="h-5 w-5" /> },
    { name: "Documents", icon: <FolderOpenIcon className="h-5 w-5" /> },
  ];

  const handleClick = (name) => {
    setSelected(name);
    onSelect(name); // Pass selected item to parent
  };

  return (
    <div className="p-4">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 py-2 ${
              selected === item.name
                ? "font-bold text-black sm:text-base md:text-sm border-t-2 border-b-2 border-cyan-500"
                : "text-gray-500 sm:text-base sm:text-md"
            }`}
            onClick={() => handleClick(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
            {item.name === "Underwriting" && (
              <span className="bg-red-500 text-white text-base ml-2 px-2 rounded-full">
                1
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
