import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when a link is clicked
  const handleLinkClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      <style>
        {`
          .form-control::placeholder {
            color: #6c757d; /* Secondary color */
          }
          .dropdown-item-setting {
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            display: block;
          }
          .dropdown-item-setting:hover {
            background-color: #2c3a50;
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* Title and Sidebar Toggle Button */}
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center gap-2">
            <h4
              className="navbar-title animate-charcter"
              style={{
                fontFamily: "ui-monospace",
                fontSize: "18px",
                fontWeight: "600",
                padding: "11px 15px",
                backgroundColor: "#000000",
              }}
            >
              <span style={{ color: "#337ab7" }}>GYM </span>
              <span style={{ color: "white" }}>MANAGEMENT</span>
            </h4>
            <button
              onClick={toggleSidebar}
              className="toggle-button"
              style={{ fontSize: "24px", padding: "3px", color: "white" }}
            >
              ☰
            </button>
          </div>

          {/* Right-side Content */}
          <div className="d-flex align-items-center">
            {/* Search Input */}
            <div className="mt-2 me-2 position-relative d-none d-md-block">
              <input
                type="search"
                placeholder="Find Member"
                className="search-bar form-control rounded-2 ps-5 text-secondary"
                style={{
                  background: "transparent",
                  borderColor: "#ccc",
                  marginBottom: "10px",
                }}
              />
              <i
                className="fa-solid fa-magnifying-glass position-absolute"
                style={{
                  top: "50%",
                  left: "10px", // Corrected position
                  transform: "translateY(-50%)",
                  color: "#6c757d",
                }}
              ></i>
            </div>
            
            {/* Profile Dropdown */}
            <div className="dropdown profile-element me-3">
              <div
                className="me-2 fw-bold p-1 rounded-4 profile d-flex align-items-center"
                style={{ cursor: "pointer" }}
                onClick={() => {}}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="profile-element">
                  <div className="avatar-online">
                    <img
                      style={{ width: "35px", borderRadius: "50%" }}
                      src="https://i.ibb.co/6Jc9g6j/user-11.jpg" // Corrected URL
                      alt="profile"
                    />
                    <span
                      className="text-white ms-2 me-1"
                      style={{ fontSize: "medium", fontWeight: "normal" }}
                    >
                      Dr. John Wilson
                    </span>
                    <i className="fa-solid fa-angle-down text-white"></i>
                  </div>
                </div>
              </div>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="#">
                    Account Details
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Refer A Friend
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    My Timesheet
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>

            {/* Notification Icon */}
            <div
              className="nav-notification-icon p-2 d-flex align-items-center justify-content-center me-3"
              style={{
                border: "1px solid white",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
            >
              <i
                className="fa-solid fa-bell text-white"
                style={{ fontSize: "15px" }}
              ></i>
            </div>

            {/* Settings Dropdown */}
            <div className="dropdown profile-element" ref={dropdownRef}>
              <div
                className="me-2 fw-bold p-1 rounded-4 profile d-flex align-items-center"
                style={{ cursor: "pointer" }}
                onClick={toggleDropdown}
              >
                <div className="profile-element position-relative">
                  <div className="avatar-online d-flex align-items-center">
                    <div
                      className="p-2 d-flex align-items-center justify-content-center"
                      style={{
                        border: "1px solid white",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                      }}
                    >
                      <i
                        className="fa-solid fa-gear text-white"
                        style={{ fontSize: "15px" }}
                      ></i>
                    </div>
                    <span
                      className="text-white ms-2 me-1 d-none d-md-inline"
                      style={{ fontSize: "medium", fontWeight: "normal" }}
                    >
                      Setting
                    </span>
                    <i className="fa-solid fa-angle-down text-white"></i>
                  </div>

                  {isOpen && (
                    <div
                      className="dropdown-menu dropdown-menu-settings show mt-2 p-3"
                      style={{
                        minWidth: "300px",
                        right: "0",
                        fontWeight: "200",
                        backgroundColor: "#1c2636",
                        position: "absolute",
                        zIndex: 1000,
                      }}
                    >
                      <div className="input-group mb-3">
                        <button
                          className="btn btn-primary me-3"
                          type="button"
                          onClick={toggleDropdown}
                        >
                          <i className="fa fa-chevron-left"></i>
                        </button>
                        <input
                          className="form-control rounded-start border-end-0 border"
                          type="search"
                          id="menu-search"
                          placeholder="Search Settings"
                        />
                        <span className="input-group-append">
                          <button
                            className="btn btn-outline-secondary text-dark bg-white border rounded-0 rounded-end border-start-dark ms-n5"
                            type="button"
                          >
                            <i className="fa fa-search"></i>
                          </button>
                        </span>
                      </div>

                      {/* Dropdown Items */}
                      <ul className="list-unstyled">
                        <li>
                          <Link
                            to="/settingtabs"
                            onClick={() => handleLinkClick("/settingtabs")}
                            className="dropdown-item-setting"
                          >
                            Advanced Configuration
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/bookingclasses"
                            onClick={() => handleLinkClick("/bookingclasses")}
                          >
                            Booking and Classes
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/clubsetting"
                            onClick={() => handleLinkClick("/clubsetting")}
                          >
                            Club Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/customfield"
                            onClick={() => handleLinkClick("/customfield")}
                          >
                            Custom Fields
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/doorreader"
                            onClick={() => handleLinkClick("/doorreader")}
                          >
                            Doors & Readers
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/financialconfig"
                            onClick={() => handleLinkClick("/financialconfig")}
                          >
                            Financial Configuration
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/formsandwaivers"
                            onClick={() => handleLinkClick("/formsandwaivers")}
                          >
                            Forms and Waivers
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/integrations"
                            onClick={() => handleLinkClick("/integrations")}
                          >
                            Integrations
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/measurementconfig"
                            onClick={() => handleLinkClick("/measurementconfig")}
                          >
                            Measurement Configuration
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/memberportaltab"
                            onClick={() => handleLinkClick("/memberportaltab")}
                          >
                            Member Portal
                          </Link>
                        </li>
                        <li>
                          <Link 
                            className="dropdown-item-setting" 
                            to="/typeofmemberportal"
                            onClick={() => handleLinkClick("/typeofmemberportal")}
                          >
                            Membership Types
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/newproductpurchase"
                            onClick={() => handleLinkClick("/newproductpurchase")}
                          >
                            Products
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/rosteropenhours"
                            onClick={() => handleLinkClick("/rosteropenhours")}
                          >
                            Roster and Open Hours
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/taskautomation"
                            onClick={() => handleLinkClick("/taskautomation")}
                          >
                            Task Automation
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/useadministration"
                            onClick={() => handleLinkClick("/useadministration")}
                          >
                            User Administration
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item-setting"
                            to="/workoutconfiguration"
                            onClick={() => handleLinkClick("/workoutconfiguration")}
                          >
                            Workout Configuration
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;