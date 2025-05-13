import React, { useState, useEffect } from "react";
import MemberSidebar from "./MemberSidebar";
import Favorites from "./Favorites";
import Staff from "./Staff";
import Booking from "./Booking";
import Financial from "./Financial";
import Prospect from "./Prospect";
import Retention from "./Retention";
import Footer from "../../../Layout/Footer";

const StandardReport = () => {
  // Use React state to track the active tab
  const [activeTab, setActiveTab] = useState("favorites");

  // Handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>

    <div className="billing-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="billing-sidebar">
              <div
                className={`billing-nav-item ${
                  activeTab === "favorites" ? "active" : ""
                }`}
                onClick={() => handleTabClick("favorites")}
              >
                Favorites
              </div>
              <div
                className={`billing-nav-item ${
                  activeTab === "member" ? "active" : ""
                }`}
                onClick={() => handleTabClick("member")}
              >
                Member
              </div>
              <div
                className={`billing-nav-item ${
                  activeTab === "staff" ? "active" : ""
                }`}
                onClick={() => handleTabClick("staff")}
              >
                Staff
              </div>
              <div
                className={`billing-nav-item ${
                  activeTab === "booking" ? "active" : ""
                }`}
                onClick={() => handleTabClick("booking")}
              >
                Booking
              </div>
              <div
                className={`billing-nav-item ${
                  activeTab === "financial" ? "active" : ""
                }`}
                onClick={() => handleTabClick("financial")}
              >
                Financial
              </div>
              <div
                className={`billing-nav-item ${
                  activeTab === "retention" ? "active" : ""
                }`}
                onClick={() => handleTabClick("retention")}
              >
                Retention
              </div>
              <div
                className={`billing-nav-item ${
                  activeTab === "prospect" ? "active" : ""
                }`}
                onClick={() => handleTabClick("prospect")}
              >
                Prospect
              </div>
            </div>
          </div>

          <div className="col-md-10 card shadow-sm bg-light">
            {/* Favorites Tab Content */}
            <div
              id="favorites"
              className={`billing-tab-content ${
                activeTab === "favorites" ? "active" : ""
              }`}
            >
                <Favorites />
            </div>

            {/* Member Tab Content */}
            <div
              id="member"
              className={`billing-tab-content ${
                activeTab === "member" ? "active" : ""
              }`}
            >
              <MemberSidebar/>
            </div>

            {/* Staff Tab Content */}
            <div
              id="staff"
              className={`billing-tab-content ${
                activeTab === "staff" ? "active" : ""
              }`}
            >
              <Staff />
            </div>

            {/* Booking Tab Content */}
            <div
              id="booking"
              className={`billing-tab-content ${
                activeTab === "booking" ? "active" : ""
              }`}
            >
              <Booking />
            </div>

            {/* Financial Tab Content */}
            <div
              id="financial"
              className={`billing-tab-content ${
                activeTab === "financial" ? "active" : ""
              }`}
            >
              <Financial />
            </div>

            {/* Retention Tab Content */}
            <div
              id="retention"
              className={`billing-tab-content ${
                activeTab === "retention" ? "active" : ""
              }`}
            >
              <Retention />
            </div>

            {/* Prospect Tab Content */}
            <div
              id="prospect"
              className={`billing-tab-content ${
                activeTab === "prospect" ? "active" : ""
              }`}
            >
              <Prospect />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <Footer />
    </div>
    </>
  );
};

export default StandardReport;
