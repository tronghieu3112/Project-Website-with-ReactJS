import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from 'react-icons/fa';
import "./login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [missingInfo, setMissingInfo] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMissingInfo(true);
      return;
    }
    try {
      if (username === "hieu" && password === "hieu123") {
        console.log("Logged in successfully!");
        // Chuyển hướng đến trang HomePage
        window.location.href = "/HomePage";
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (err) {
      setError(err.message || "An error occurred during login");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <br />
        <span className="forgot">
          <Link to="/forgot-password">Quên mật khẩu</Link>
        </span>
        <br />
        <span className="have">
          if you don't have an account <Link to="/signup">Click here</Link>
        </span>
      </form>
      {missingInfo && <p style={{ color: "red" }}>Vui lòng điền đầy đủ thông tin</p>}
    </div>
  );
};

export default LoginForm;
