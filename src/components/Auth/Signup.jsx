 import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
  });


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., validation, sending data to backend)
    if(userData.password!=userData.confirmPassword){
      alert("password and confirm password are not shame")
      console.log("password and confirm password are not shame")
      return
    }
    const registerUser = async()=>{
                 try {
     await axios.post("https://gym-backend-production-ec3e.up.railway.app/api/user/signUp",userData)
    } catch (error) {
      
    }
    }
   registerUser()
    console.log(userData);
  };

  return (
    <>
      <div className="reg-form-container">
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

        <form onSubmit={handleSubmit}>
          <div className="reg-form-field-wrapper">
            <label className="reg-field-label">Full Name</label>
            <div className="reg-icon-wrapper">
              <i className="reg-input-icon">👤</i>
              <input
                type="text"
                name="fullName"
                className="reg-text-input reg-input-with-icon"
                placeholder="Enter your full name"
                value={userData.fullName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="reg-form-field-wrapper">
            <label className="reg-field-label">Email</label>
            <div className="reg-icon-wrapper">
              <i className="reg-input-icon">✉️</i>
              <input
                type="email"
                name="email"
                className="reg-text-input reg-input-with-icon"
                placeholder="Enter your email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="reg-form-field-wrapper">
            <label className="reg-field-label">Phone Number</label>
            <div className="reg-icon-wrapper">
              <i className="reg-input-icon">📱</i>
              <input
                type="tel"
                name="phoneNumber"
                className="reg-text-input reg-input-with-icon"
                placeholder="Enter your phone number"
                value={userData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="reg-form-field-wrapper">
            <label className="reg-field-label">Password</label>
            <div className="reg-icon-wrapper">
              <i className="reg-input-icon">🔒</i>
              <input
                type="password"
                name="password"
                className="reg-text-input reg-input-with-icon"
                placeholder="Create password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="reg-form-field-wrapper">
            <label className="reg-field-label">Confirm Password</label>
            <div className="reg-icon-wrapper">
              <i className="reg-input-icon">🔒</i>
              <input
                type="password"
                name="confirmPassword"
                className="reg-text-input reg-input-with-icon"
                placeholder="Confirm password"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="reg-two-column-row">
            <div className="reg-column-half">
              <label className="reg-field-label">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                className="reg-text-input"
                value={userData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="reg-column-half">
              <label className="reg-field-label">Gender</label>
              <select
                className="reg-text-input"
                name="gender"
                value={userData.gender}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="reg-terms-checkbox">
            <input type="checkbox" id="terms" name="agreeTerms" />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>

          <button type="submit" className="reg-submit-button">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
