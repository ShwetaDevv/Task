import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SubmittedData from "./components/SubmittedData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/submitted" element={<SubmittedData />} />
      </Routes>
    </Router>
  );
};

export default App;
