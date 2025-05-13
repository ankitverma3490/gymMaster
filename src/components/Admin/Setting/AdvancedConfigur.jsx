import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import General from "./General";
import Awards from "./Awards";
import Billing from "./Billing";
import Booking from "./Booking";
import Communication from "./Communication";
import Doors from "./Doors";
import FindMember from "./FindMember";
import Invoice from "./Invoice";
import LoginSetting from "./LoginSetting";
import MemberSetting from "./MemberSetting";
import MemberBenefit from "./MemberBenefit";
import MemberHold from "./MemberHold";
import MemberReport from "./MemberReport";
import MemberShipSettting from "./MemberShipSettting";
import MemberShipType from "./MemberShipType";
import PointOfSales from "./PointOfSales";
import Schedule from "./Schedule";
import ServiceSetting from "./ServiceSetting";
import Task from "./Task";
import TaxSetting from "./TaxSetting";
import Waivers from "./Waivers";
import Workout from "./Workout";
import ClassesSetting from "./ClassesSetting";

function AdvancedConfigur() {
  const navigate = useNavigate("");

  const [activeSection, setActiveSection] = useState("general");

  // Track the active section as the user scrolls
  const sections = [
    "general",
    "awards",
    "billing",
    "bookings",
    "classes",
    "communication",
    "doors",
    "findMember",
    "invoice",
    "login",
    "member",
    "memberBenefits",
    "memberHolds",
    "memberReports",
    "membership",
    "membershipType",
    "pointOfSale",
    "schedule",
    "service",
    "task",
    "tax",
    "waivers",
    "workout",
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= window.innerHeight && bottom >= 0) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    // Add scroll event listener to handle active section change
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 p-3 bg-light border">
            <div className="nav flex-column">
              {sections.map((section) => (
                <button
                  key={section}
                  className={`btn  text-start border p-3 ${
                    activeSection === section ? "bg-primary text-white" : ""
                  }`}
                  onClick={() =>
                    document
                      .getElementById(section)
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {section.charAt(0).toUpperCase() +
                    section.slice(1).replace(/([A-Z])/g, " $1")}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9 p-4">
            {/* Tabs */}
            {/* <div className="d-flex justify-content-between">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/setting/advancedconfigur"
                    onClick={() => Navigate("/setting/advancedconfigur")}
                  >
                    Advanced Configuration
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"
                  onClick={ () => navigate ("")}
                  >
                    Member Portal Configuration
                  </a>
                </li>
              </ul>
              <div>
                <button className="btn btn-outline-secondary">Save</button>
              </div>
            </div> */}

            {/* Settings Form */}
            <div className="mt-4" id="general">
              <General />
            </div>

            <div className="mt-4 " id="awards">
              <Awards />
            </div>

            <div className="mt-4" id="billing">
              <Billing />
            </div>

            <div className="mt-4" id="bookings">
              <Booking />
            </div>

            <div className="mt-4" id="classes">
             <ClassesSetting/>
            </div>

            <div className="mt-4" id="communication">
              <Communication />
            </div>

            <div className="mt-4" id="doors ">
              <Doors />
            </div>

            <div className="mt-4" id="findmember">
              <FindMember />
            </div>

            <div className="mt-4" id="invoice">
              <Invoice />
            </div>

            <div className="mt-4" id="login">
              <LoginSetting />
            </div>

            <div className="mt-4" id="member">
              <MemberSetting />
            </div>

            <div className="mt-4" id="memberBenefits">
              <MemberBenefit />
            </div>

            <div className="mt-4" id="memberHolds">
              <MemberHold />
            </div>

            <div className="mt-4" id="memberReports">
              <MemberReport />
            </div>
            <div className="mt-4" id="membership">
              <MemberShipSettting />
            </div>

            <div className="mt-4" id="membershipType">
              <MemberShipType />
            </div>

            <div className="mt-4" id="pointOfSale">
              <PointOfSales />
            </div>

            <div className="mt-4" id="schedule">
              <Schedule />
            </div>

            <div className="mt-4" id="service">
              <ServiceSetting />
            </div>

            <div className="mt-4" id="task">
              <Task />
            </div>

            <div className="mt-4" id="tax">
              <TaxSetting />
            </div>

            <div className="mt-4" id="waivers">
              <Waivers />
            </div>

            <div className="mt-4" id="workout">
              <Workout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedConfigur;
