import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./Form/Login/LoginForm";
import SignUpForm from "./Form/SignUp/SignUpForm";
import HomePage from "./Form/HomePage/HomePage"
function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
