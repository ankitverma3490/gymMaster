import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PortalGeneral from "./PortalGeneral";
import AwardsPortal from "./AwardsPortal";
import BillingPortal from "../../MemberPortal/BillingPortal";
import BookingPortal from "../../MemberPortal/BookingPortal";
import ClassesSettingPortal from "../AdvanceConfigurMemberShip/ClassesSettingPortal"
import CommunicationPortal from '../AdvanceConfigurMemberShip/CommunicationPortal'
import PortalDoor from "../AdvanceConfigurMemberShip/PortalDoor"
import PortalFindMember from "../AdvanceConfigurMemberShip/PortalFindMember"
import PortalInvoice from "../AdvanceConfigurMemberShip/PortalInvoice"
import PortalLogin from "../AdvanceConfigurMemberShip/PortalLogin"
import MemberBenefitPortal from "../AdvanceConfigurMemberShip/MemberBenefitPortal"
import MemberSettingPortal from "../AdvanceConfigurMemberShip/MemberSettingPortal";
import PortalMemberHold from "../AdvanceConfigurMemberShip/PortalMemberHold"

import PortalMemberShipSet from "../AdvanceConfigurMemberShip/PoratlMemberShipSet"
import PortalTax from "../AdvanceConfigurMemberShip/PortalTask"
import PortalTaxSet from "../AdvanceConfigurMemberShip/PortalTaxSet"
import PointOfPortal from "../AdvanceConfigurMemberShip/PointOfPortal"
import SchedulePortal from "../AdvanceConfigurMemberShip/SchedulePortal"
import ServicePortalSet from "../AdvanceConfigurMemberShip/ServicePortalSet"
import WaiverPortal from "../AdvanceConfigurMemberShip/WaiverPortal"
import MemberTypePortal from "../AdvanceConfigurMemberShip/MemberTypePortal"
import PortalWorout from "../AdvanceConfigurMemberShip/PortalWorout"



function AdvancedConfigurPortal() {
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
              <PortalGeneral/>
            </div>

            <div className="mt-4 " id="awards">
              <AwardsPortal/>
            </div>

            <div className="mt-4" id="billing">
              <BillingPortal/>
            </div>

            <div className="mt-4" id="bookings">
              <BookingPortal/>
            </div>

            <div className="mt-4" id="classes">
             <ClassesSettingPortal/>
            </div>

            <div className="mt-4" id="communication">
              <CommunicationPortal/>
            </div>

            <div className="mt-4" id="doors ">
              <PortalDoor/>
            </div>

            <div className="mt-4" id="findmember">
              <PortalFindMember />
            </div>

            <div className="mt-4" id="invoice">
              <PortalInvoice />
            </div>

            <div className="mt-4" id="login">
              <PortalLogin/>
            </div>

            <div className="mt-4" id="member">
              <MemberSettingPortal />
            </div>

            <div className="mt-4" id="memberBenefits">
              <MemberBenefitPortal />
            </div>

            <div className="mt-4" id="memberHolds">
              <PortalMemberHold />
            </div>

            {/* <div className="mt-4" id="memberReports">
              <PortalReport/>
            </div> */}
            <div className="mt-4" id="membership">
              <PortalMemberShipSet />
            </div>

            <div className="mt-4" id="membershipType">
              <MemberTypePortal />
            </div>

            <div className="mt-4" id="pointOfSale">
              <PointOfPortal />
            </div>

            <div className="mt-4" id="schedule">
              <SchedulePortal />
            </div>

            <div className="mt-4" id="service">
              <ServicePortalSet />
            </div>

            <div className="mt-4" id="task">
              <PortalTax/>
            </div>

            <div className="mt-4" id="tax">
              <PortalTaxSet />
            </div>

            <div className="mt-4" id="waivers">
              <WaiverPortal />
            </div>

            <div className="mt-4" id="workout">
              <PortalWorout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedConfigurPortal;
