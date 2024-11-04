import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-[#f0f8ff] min-h-screen pt-16">
      {" "}
      {/* Padding to prevent overlap */}
      <div className="flex justify-center items-center space-x-16 p-6">
        <Link to="/queue">
          <Card
            title="Queue Manager"
            content="This is the content of card 1."
          />
        </Link>
        <Link to="/">
          <Card
            title="Documentation Portal"
            content="This is the content of card 2."
          />
        </Link>
        <Link to="/admin">
          <Card title="Admin" content="This is the content of card 3." />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
