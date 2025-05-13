import React from "react";
import "./MemberPortal.css"

const MainMemberPortal = () => {
  return (
    <>
      <div className="aira-container">
        <div className="aira-logo-container">
          <svg
            className="aira-logo"
            width={200}
            height={60}
            viewBox="0 0 200 60"
          >
            <path
              d="M 93.5 25 L 85 25 L 70 40 L 85 55 L 93.5 55 L 78.5 40 Z"
              fill="#000000"
            />
            <path d="M 78.5 40 L 93.5 25 L 102 25 L 87 40 Z" fill="#00ccff" />
            <text
              x={105}
              y={45}
              fontFamily="Arial, sans-serif"
              fontSize={16}
              fontWeight="bold"
            >
              <tspan fill="#00ccff">GYM</tspan>
              <tspan fill="#000000"></tspan>
            </text>
          </svg>
        </div>
        <h1 className="aira-title">Gym Management Member Portal</h1>
        <div className="aira-form-container">
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control aira-input"
                placeholder="Email"
              />
            </div>
            <div className="mb-3 aira-password-wrapper">
              <input
                type="password"
                className="form-control aira-input"
                placeholder="Password"
              />
              <i className="bi bi-eye aira-eye-icon" />
            </div>
            <button
              type="submit"
              className="btn btn-success w-100 aira-login-btn"
            >
              Member Log In
            </button>
          </form>
          <div className="aira-forgot-password">
            <a href="#" className="aira-forgot-link">
              Forgot Password?
            </a>
          </div>
          <div className="aira-buttons-row">
            <a href="#" className="btn btn-primary w-50 aira-signup-btn">
              Sign Up
            </a>
            <a href="#" className="btn btn-primary w-50 aira-contact-btn">
              Contact Us
            </a>
          </div>
          <a href="#" className="btn btn-primary w-100 aira-booking-btn">
            Not a Member? Make a Booking
          </a>
          <div className="aira-app-stores">
            <a href="#" className="aira-app-link">
              <img
                src="https://i.ibb.co/1Gr58xHG/image.png"
                alt="Get it on Google Play"
                className="aira-app-badge"
              />
            </a>
            <a href="#" className="aira-app-link">
              <img
                src="https://i.ibb.co/FLZFrG3s/image.png"
                alt="Download on the App Store"
                className="aira-app-badge"
              />
            </a>
          </div>
          <div className="aira-footer">
            Membership Software by{" "}
            <a href="#" className="aira-gymmaster">
              GYMMASTER
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMemberPortal;
