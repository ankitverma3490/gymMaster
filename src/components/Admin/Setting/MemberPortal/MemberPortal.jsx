import React, { useState, useEffect } from "react";
import GeneralPortal from "./GeneralPortal";
import AwardPortal from "./AwardPortal";
import BillingPortal from "./BillingPortal";
import BookingPortal from "./BookingPortal";
import ClassesPortal from "./ClassesPortal";
import ClassSchedule from "./ClassSchedule";
import ComunicationPortal from "./ComunicationPortal";
import ContactUsPortal from "./ContactUsPortal";
import PortalMember from "./PortalMember";
import MembershipPortal from "./MembershipPortal";
import PointOfSalePortal from "./PointOfSalePortal";
import SignUpPortal from "./SignUpPortal";
import VouchersPortal from "./VouchersPortal";
import MemberHoldPortal from "./MemberHoldPortal";

function MemberPortal() {
  const [activeSection, setActiveSection] = useState("general");

  // List of sections to map through for the navigation and content rendering
  const sections = [
    "General",
    "Awards",
    "Billing",
    "Bookings",
    "Classes",
    "classSchedule",
    "Communication",
    "contactUs",
    "memberportal",
    "memberholds",
    "memberShip",
    "pointOfsale",
    "signUp",
    "vouchers",
  ];

  // Handle the scroll event to update the active section
  const handleScroll = () => {
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= window.innerHeight && bottom >= 0) {
          setActiveSection(section); // Set the active section based on scroll position
        }
      }
    });
  };

  useEffect(() => {
    // Add scroll event listener to handle active section change
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle click and scroll to the section
  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      // Scroll smoothly to the section
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section); // Set active section on click
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Sidebar for navigation */}
        <div className="col-md-3 p-3 bg-light border">
          <div className="nav flex-column">
            {sections.map((section) => (
              <button
                key={section}
                className={`btn text-start border p-3 ${
                  activeSection === section ? "bg-primary text-white" : ""
                }`}
                onClick={() => handleClick(section)} // Click to scroll to section
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1).replace(/([A-Z])/g, " $1")}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="col-md-9 p-4">
          {/* Sections that get rendered */}
          <div className="mt-4" id="General">
            <GeneralPortal />
          </div>
          <div className="mt-4" id="Awards">
            <AwardPortal />
          </div>
          <div className="mt-4" id="Billing">
            <BillingPortal />
          </div>
          <div className="mt-4" id="Bookings">
            <BookingPortal />
          </div>
          <div className="mt-4" id="Classes">
            <ClassesPortal />
          </div>
          <div className="mt-4" id="classSchedule">
            <ClassSchedule />
          </div>
          <div className="mt-4" id="Communication">
            <ComunicationPortal />
          </div>
          <div className="mt-4" id="contactUs">
            <ContactUsPortal />
          </div>
          <div className="mt-4" id="memberportal">
            <PortalMember />
          </div>
          <div className="mt-4" id="memberholds">
            <MemberHoldPortal />
          </div>
          <div className="mt-4" id="memberShip">
            <MembershipPortal />
          </div>
          <div className="mt-4" id="pointOfsale">
            <PointOfSalePortal />
          </div>
          <div className="mt-4" id="signUp">
            <SignUpPortal />
          </div>
          <div className="mt-4" id="vouchers">
            <VouchersPortal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberPortal;
