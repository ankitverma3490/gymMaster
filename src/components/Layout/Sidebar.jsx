import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [activeSubmenuPath, setActiveSubmenuPath] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handlesubmenuclick = (menuindex, path) => {
    setActiveMenuIndex(menuindex);
    setActiveSubmenuPath(path);
    setOpenMenuIndex(null); // Close the submenu
    navigate(path);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
        {/* Sidebar toggle icon */}
        <div className="sidebar-toggle" onClick={toggleSidebar}></div>

        <ul className="menu">
          {/* Home */}
          <li
            className={`menu-item ${activeMenuIndex === 0 ? "active" : ""}`}
            onClick={() => handlesubmenuclick(0, "/dashboard")}
          >
            <div className="menu-link">
              <i className="nav-icon fas fa-home menu-icon" />
              {isOpen && <span className="menu-text ">Home</span>}
            </div>
          </li>
          {/* Home end */}

          {/* Add Member */}
          <li
            className={`menu-item ${openMenuIndex === 1 ? "open" : ""} ${
              activeMenuIndex === 1 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(1, "/addmember")}
          >
            <div className="menu-link menu-i">
              <i className="nav-icon fa-solid fa-user menu-icon" />
              {isOpen && <span className="menu-text">Add Member </span>}
              {/* <FaArrowRight  
            icon={openMenuIndex === 1 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{  background: "transparent", float: "inline-end" }}
          /> */}
            </div>
          </li>
          {/* Add Member */}

          {/*  Find Member*/}
          <li
            className={`menu-item ${openMenuIndex === 2 ? "open" : ""} ${
              activeMenuIndex === 4 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(4, "/findmember")}
          >
            <div className="menu-link menu-i">
              <i class="fa-solid fa-magnifying-glass menu-icon" />
              {isOpen && <span className="menu-text">Find Member </span>}
              {/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
            </div>
          </li>
          {/*  Find /member */}

          {/*Visitors */}
          <li
            className={`menu-item ${openMenuIndex === 3 ? "open" : ""} ${
              activeMenuIndex === 2 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(2, "/visitors")}
          >
            <div className="menu-link menu-i">
              <i class="fa-solid fa-microscope menu-icon" />
              {isOpen && <span className="menu-text"> Visitors </span>}
              {/* <FaArrowRight
            icon={openMenuIndex === 2 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
            /> */}
            </div>
          </li>
          {/* Visitors*/}

          {/*  Schadule */}
          <li
            className={`menu-item ${openMenuIndex === 4 ? "open" : ""} ${
              activeMenuIndex === 3 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(3, "/schedulecalender")}
          >
            <div className="menu-link menu-i">
              <i class="fa-solid fa-calendar-days menu-icon" />
              {isOpen && <span className="menu-text"> Schedule </span>}
              {/* <FaArrowRight
            icon={openMenuIndex === 3 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
            </div>
          </li>
          {/*  Schedule */}

          {/*  Point Of Sale */}
          <li
            className={`menu-item ${openMenuIndex === 5 ? "open" : ""} ${
              activeMenuIndex === 5 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(5, "/pointOfSales")}
          >
            <div className="menu-link menu-i">
              <i class="fa-solid fa-cart-shopping menu-icon" />
              {isOpen && <span className="menu-text">Point Of Sale </span>}
              {/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
            </div>
          </li>
          {/*  point Of Slae */}

          {/*  Report & Till */}
          <li
            className={`menu-item ${openMenuIndex === 4 ? "open" : ""} ${
              activeMenuIndex === 6 ? "active" : ""
            }`}
            onClick={() => toggleMenu(6)}
          >
            <div className="menu-link menu-i">
              <i className="nav-icon fa-solid fa-school menu-icon" />
              {isOpen && <span className="menu-text">Report & Till </span>}
              {/* Toggle arrow icon */}
              {openMenuIndex === 2 ? (
                <IoMdArrowDropup
                  className="menu-toggle-icon text-white"
                  style={{ background: "transparent", float: "right" }}
                />
              ) : (
                <IoMdArrowDropright
                  className="menu-toggle-icon text-white"
                  style={{ background: "transparent", float: "right" }}
                />
              )}
            </div>
          </li>
          <ul className={`submenu ${openMenuIndex === 6 ? "open" : ""}`}>
            <li
              className={`submenu-item ${
                activeSubmenuPath === "/reportstandardreport"
                  ? "active-submenu-item"
                  : ""
              }`}
              onClick={() => handlesubmenuclick(6, "/reportstandardreport")}
            >
              Standard Report
            </li>
            <li
              className={`submenu-item ${
                activeSubmenuPath === "/staffattandance"
                  ? "active-submenu-item"
                  : ""
              }`}
              onClick={() => handlesubmenuclick(6, "/staffattandance")}
            >
              Staff Attendance
            </li>
            <li
              className={`submenu-item ${
                activeSubmenuPath === "/reporttainercommission"
                  ? "active-submenu-item"
                  : ""
              }`}
              onClick={() => handlesubmenuclick(6, "/reporttainercommission")}
            >
              Tainer Commission
            </li>
            <li
              className={`submenu-item ${
                activeSubmenuPath === "/reportdebtcollection"
                  ? "active-submenu-item"
                  : ""
              }`}
              onClick={() => handlesubmenuclick(6, "/reportdebtcollection")}
            >
              Debt Collection
            </li>
            <li
              className={`submenu-item ${
                activeSubmenuPath === "/reporttilltake"
                  ? "active-submenu-item"
                  : ""
              }`}
              onClick={() => handlesubmenuclick(6, "/reporttilltake")}
            >
              Till Take
            </li>
            <li
              className={`submenu-item ${
                activeSubmenuPath === "/keyperformance"
                  ? "active-submenu-item"
                  : ""
              }`}
              onClick={() => handlesubmenuclick(6, "/keyperformance")}
            >
              Key Performance Indicators
            </li>
            <li
              className={`submenu-item ${
                activeSubmenuPath === "/reportbillingoverview"
                  ? "active-submenu-item"
                  : ""
              }`}
              onClick={() => handlesubmenuclick(6, "/reportbillingoverview")}
            >
              Billing
            </li>
          </ul>

          {/*  Report & Till */}

          {/*  Task */}
          <li
            className={`menu-item ${openMenuIndex === 7 ? "open" : ""} ${
              activeMenuIndex === 7 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(7, "/task")}
          >
            <div className="menu-link menu-i">
              <i class="fa-solid fa-check-to-slot menu-icon" />
              {isOpen && <span className="menu-text">Task </span>}
              {/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
            </div>
          </li>
          {/* Task */}

          {/*  Prospects*/}
          <li
            className={`menu-item ${openMenuIndex === 8 ? "open" : ""} ${
              activeMenuIndex === 8 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(8, "/prospects")}
          >
            <div className="menu-link menu-i">
              <i class="fa-solid fa-flag menu-icon" />
              {isOpen && <span className="menu-text">Prospects </span>}
              {/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
            </div>
          </li>
          {/*  Prospects */}

          {/*  Stock */}
          <li
            className={`menu-item ${openMenuIndex === 9 ? "open" : ""} ${
              activeMenuIndex === 9 ? "active" : ""
            }`}
            onClick={() => toggleMenu(9)}
          >
            <div className="menu-link menu-i">
              <i className="nav-icon fa-solid fa-school menu-icon" />
              {isOpen && <span className="menu-text"> Stock </span>}
              {/* Toggle arrow icon */}
              {openMenuIndex === 9 ? (
                <IoMdArrowDropup
                  className="menu-toggle-icon text-white"
                  style={{ background: "transparent", float: "right" }}
                />
              ) : (
                <IoMdArrowDropright
                  className="menu-toggle-icon text-white"
                  style={{ background: "transparent", float: "right" }}
                />
              )}
            </div>
          </li>
          <ul className={`submenu ${openMenuIndex === 9 ? "open" : ""}`}>
            <li
              className={`submenu-item ${
                activeSubmenuPath === "/viewstock" ? "active-submenu-item" : ""
              }`}
              onClick={() => handlesubmenuclick(9, "/viewstock")}
            >
              View Stock
            </li>
            <li
              className={`submenu-item ${
                activeSubmenuPath === "/takestock" ? "active-submenu-item" : ""
              }`}
              onClick={() => handlesubmenuclick(9, "/takestock")}
            >
              StockTake
            </li>
            <li
              className={`submenu-item ${
                activeSubmenuPath === "/inputstockdelivery"
                  ? "active-submenu-item"
                  : ""
              }`}
              onClick={() => handlesubmenuclick(9, "/inputstockdelivery")}
            >
              Input Stock delivery
            </li>
          </ul>

          {/*  Stock */}

          {/*  Membar Protal */}
          <li
            className={`menu-item ${openMenuIndex === 10 ? "open" : ""} ${
              activeMenuIndex === 10 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(10, "/mainmemberportal")}
          >
            <div className="menu-link menu-i">
              <i class="fa-solid fa-globe menu-icon" />
              {isOpen && <span className="menu-text">Member Protal </span>}
              {/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
            </div>
          </li>
          {/*  Membar Protal */}


{/*training */}
<li
            className={`menu-item ${openMenuIndex === 11 ? "open" : ""} ${
              activeMenuIndex === 11 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(11, "/workoutconfiguration")}
          >
            <div className="menu-link menu-i">
            <i class="fa-solid fa-traffic-cone menu-icon" ></i>
              {isOpen && <span className="menu-text">Training</span>}
              {/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
            </div>
          </li>
          {/*Training */}


          {/*Resource */}
          <li
            className={`menu-item ${openMenuIndex === 12 ? "open" : ""} ${
              activeMenuIndex === 12 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(12, "/resource")}
          >
            <div className="menu-link menu-i">
            <i class="fa-brands fa-osi menu-icon"></i>
              {isOpen && <span className="menu-text">Resource </span>}
              {/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
            </div>
          </li>
          {/*Resource */}

          {/*Start up */}
          <li
            className={`menu-item ${openMenuIndex === 13 ? "open" : ""} ${
              activeMenuIndex === 13 ? "active" : ""
            }`}
            onClick={() => handlesubmenuclick(13, "/startup")}
          >
            <div className="menu-link menu-i">
              <i class="fa-solid fa-circle-question menu-icon" />
              {isOpen && <span className="menu-text">Startup </span>}
              {/* <FaArrowRight
            icon={openMenuIndex === 4 ? FaArrowLeft : FaArrowRight}
            className="menu-toggle-icon"
            style={{ background: "transparent", float: "inline-end" }}
          /> */}
            </div>
          </li>
          {/*StartUp */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
