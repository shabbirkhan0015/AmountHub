import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import QueueManager from "./pages/QueueManager";
import ContactPage from "./pages/ContactPage";
import ApplicationPage from "./pages/ApplicationPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/queue" element={<QueueManager />} />
        <Route
          path="/queue/:applicationId"
          element={<ApplicationPage />}
        />{" "}
      </Routes>
    </Router>
  );
}

export default App;
