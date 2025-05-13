 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate for navigation
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null); // To store login error
  const navigate = useNavigate(); // To navigate after successful login

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Post data to the backend API for login
      const response = await axios.post(
        "https://gym-backend-production-ec3e.up.railway.app/api/user/login",
        data
      );
      
      // If login is successful, navigate to the dashboard
      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.token);
         // Store the token (or any other user data you need)
        navigate("/dashboard"); // Navigate to dashboard
      }
    } catch (error) {
      alert("Invalid email or password. Please try again.")
      setError("Invalid email or password. Please try again.");
      console.error("Login Error:", error);
    }
  };

  // Handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="login-container">
        <div className="tab-section">
          <Link to="/">
            <div
              className={`tab-item ${activeTab === "login" ? "active" : ""}`}
              onClick={() => handleTabChange("login")}
            >
              Login
            </div>
          </Link>

          <Link to="/signup">
            <div
              className={`tab-item ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => handleTabChange("signup")}
            >
              Register
            </div>
          </Link>
        </div>

        <form onSubmit={handleLogin}>
          {/* Display error if login fails */}
          {error && <div className="error-message">{error}</div>}

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <div className="input-icon">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                name="email"
                className="custom-input"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <div className="input-icon">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                id="password"
                name="password"
                className="custom-input"
                placeholder="Enter your password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="remember-forgot">
            <div className="custom-checkbox">
              <input
                type="checkbox"
                id="remember"
                className="form-check-input"
              />
              <label htmlFor="remember" className="form-check-label ms-2">
                Remember me
              </label>
            </div>
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="custom-btn login-btn">
            Login
          </button>

          <div className="divider">Or continue with</div>

          <div className="social-logins">
            <button type="button" className="social-btn">
              <i className="fab fa-google"></i> Google
            </button>
            <button type="button" className="social-btn">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
