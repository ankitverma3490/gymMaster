import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import Footer from "../../Layout/Footer";
import AdminDashboardFirst from "./AdminDashboardFirst";
import AdminDashboardCard from "./AdminDashboardCard";
import AdminDashboardWeekly from "./AdminDashboardWeekly";
import AdminDashboardMoneyChart from "./AdminDashboardMoneyChart";
import AdminDashboardProspect from "./AdminDashboardProspect";
import AdminDashboardBookingChart from "./AdminDashboardBookingChart";
import AdminDashboardLastCharts from "./AdminDashboardLastCharts";

function AdminDashboard() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(3); // April is index 3
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    // Tooltip functionality
    const tooltip = document.getElementById("dataTooltip");
    
    // Function to show tooltip
    function showTooltip(event, date, value, type) {
      const rect = event.target.getBoundingClientRect();
      const chartContainer = document.querySelector(".mb-chart-container");
      const containerRect = chartContainer.getBoundingClientRect();

      // Position tooltip above the dot
      tooltip.style.left =
        rect.left - containerRect.left + rect.width / 2 - 60 + "px";
      tooltip.style.top = rect.top - containerRect.top - 40 + "px";

      // Set tooltip content
      if (type === "cancellation") {
        tooltip.textContent = `Cancellation Notice: ${value} on ${date}`;
      } else {
        tooltip.textContent = `New Member: ${value} on ${date}`;
      }

      // Show tooltip
      tooltip.style.opacity = 1;
    }

    // Function to hide tooltip
    function hideTooltip() {
      tooltip.style.opacity = 0;
    }

    // Add event listeners to blue dots
    const blueDots = document.querySelectorAll(".mb-blue-dot");
    blueDots.forEach((dot) => {
      dot.addEventListener("mouseenter", function (e) {
        const date = this.getAttribute("data-date");
        const value = this.getAttribute("data-value");
        showTooltip(e, date, value, "member");
      });

      dot.addEventListener("mouseleave", hideTooltip);
    });

    // Add event listeners to red dots
    const redDots = document.querySelectorAll(".mb-red-dot");
    redDots.forEach((dot) => {
      dot.addEventListener("mouseenter", function (e) {
        const date = this.getAttribute("data-date");
        const value = this.getAttribute("data-value");
        showTooltip(e, date, value, "cancellation");
      });

      dot.addEventListener("mouseleave", hideTooltip);
    });
    
    // Cleanup event listeners when component unmounts
    return () => {
      blueDots.forEach((dot) => {
        dot.removeEventListener("mouseenter", showTooltip);
        dot.removeEventListener("mouseleave", hideTooltip);
      });
      
      redDots.forEach((dot) => {
        dot.removeEventListener("mouseenter", showTooltip);
        dot.removeEventListener("mouseleave", hideTooltip);
      });
    };
  }, []);

  // Navigation handlers
  const handlePrevMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex - 1 + 12) % 12);
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % 12);
  };

  return (
    <>
      <div className="container">
        <div className="mb-dashboard-container">
          <h4 className="my-3">Home</h4>
          <div className="row">
            {/* Member Changes Chart */}
            <div className="col-md-6 mb-4">
              <div className="row">

                <div className="col-md-12">
                  {/* First Chart Start*/}
                  <div className="mb-card">
                    <div className="mb-card-title">Member Changes</div>
                    <div className="mb-nav-container">
                      <div 
                        className="mb-nav-btn mb-nav-left" 
                        onClick={handlePrevMonth}
                      >
                        &lt;
                      </div>
                      <div className="mb-nav-month">{months[currentMonthIndex]}</div>
                      <div 
                        className="mb-nav-btn mb-nav-right" 
                        onClick={handleNextMonth}
                      >
                        &gt;
                      </div>
                    </div>
                    <div className="mb-legend">
                      <div className="mb-legend-item">
                        <div className="mb-legend-color mb-blue-block" />
                        <span>New Member</span>
                      </div>
                      <div className="mb-legend-item">
                        <div className="mb-legend-color mb-green-block" />
                        <span>New Prospects</span>
                      </div>
                      <div className="mb-legend-item">
                        <div className="mb-legend-color mb-red-block" />
                        <span>Cancellation Notice</span>
                      </div>
                    </div>
                    <div className="mb-chart-container">
                      {/* Tooltip element */}
                      <div className="mb-tooltip" id="dataTooltip" />
                      {/* Grid */}
                      <div className="mb-chart-grid">
                        {/* Horizontal grid lines */}
                        {[...Array(10)].map((_, index) => (
                          <div
                            key={`h-line-${index}`}
                            className="mb-grid-line-horizontal"
                            style={{ gridRow: index + 1 }}
                          />
                        ))}
                        {/* Vertical grid lines */}
                        {[...Array(10)].map((_, index) => (
                          <div
                            key={`v-line-${index}`}
                            className="mb-grid-line-vertical"
                            style={{ gridColumn: index + 1 }}
                          />
                        ))}
                      </div>
                      {/* Y-axis labels */}
                      <div className="mb-y-axis">
                        <div className="mb-y-label">1.0</div>
                        <div className="mb-y-label">0.9</div>
                        <div className="mb-y-label">0.8</div>
                        <div className="mb-y-label">0.7</div>
                        <div className="mb-y-label">0.6</div>
                        <div className="mb-y-label">0.5</div>
                        <div className="mb-y-label">0.4</div>
                        <div className="mb-y-label">0.3</div>
                        <div className="mb-y-label">0.2</div>
                        <div className="mb-y-label">0.1</div>
                        <div className="mb-y-label">0</div>
                      </div>
                      {/* X-axis labels */}
                      <div className="mb-x-axis">
                        <div
                          className="mb-x-label"
                          style={{ left: 50, bottom: 0 }}
                        >
                          {months[currentMonthIndex]} 1
                        </div>
                        <div
                          className="mb-x-label"
                          style={{ left: "50%", bottom: 0 }}
                        >
                          {months[currentMonthIndex]} 15
                        </div>
                      </div>
                      {/* Blue line (New Member) at the bottom */}
                      <div
                        className="mb-blue-line"
                        style={{ left: 50, right: 10, bottom: 50, height: 2 }}
                      />
                      {/* Blue dots along the line */}
                      {[...Array(10)].map((_, index) => (
                        <div
                          key={`blue-dot-${index}`}
                          className="mb-blue-dot"
                          style={{ 
                            left: `calc(50px + ${index * 10}%)`, 
                            bottom: 50 
                          }}
                          data-date={`${months[currentMonthIndex]} ${index * 3 + 1}`}
                          data-value={0}
                        />
                      ))}
                      {/* Red shaded area (Cancellation Notice) */}
                      <div
                        className="mb-red-area"
                        style={{
                          right: 10,
                          bottom: 50,
                          width: "25%",
                          height: "calc(100% - 50px)",
                        }}
                      />
                      {/* Red dots for cancellation spike */}
                      {[...Array(5)].map((_, index) => (
                        <div
                          key={`red-dot-${index}`}
                          className="mb-red-dot"
                          style={{ 
                            right: `calc(10px + ${index * 5}%)`, 
                            top: index * 10 
                          }}
                          data-date={`${months[currentMonthIndex]} ${30 - index}`}
                          data-value={(1 - index * 0.05).toFixed(2)}
                        />
                      ))}
                    </div>
                  </div>
                  {/* First Chart End */}
                </div>

                <div className="col-md-12">
                  <AdminDashboardFirst/>
                </div>

                <div className="col-md-12">
                  <AdminDashboardWeekly/>
                </div>

                <div className="col-md-12">
                  <AdminDashboardMoneyChart/>
                </div>

                <div className="col-md-12">
                  <AdminDashboardProspect/>
                </div>

                <div className="col-md-12">
                  <AdminDashboardBookingChart/>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                {/* Payments Received Card */}
                <div className="col-md-6 mb-4">
                  <div className="mb-card">
                    <div className="mb-card-title">
                      Payments Received This Month
                    </div>
                    <div className="mb-value">$1.69K</div>
                    <div className="mb-footnote">
                      * Total payments received this month Inc Tax
                    </div>
                  </div>
                </div>
                {/* Current Members Card */}
                <div className="col-md-6 mb-4">
                  <div className="mb-card mb-red-card">
                    <div className="mb-card-title">Current Members</div>
                    <div className="mb-value">
                      21{" "}
                      <span className="mb-change-indicator">
                        -12%<span className="mb-down-arrow">↓</span>
                      </span>
                    </div>
                    <div className="text-dark small">
                      * Members today compared with Mar 28
                    </div>
                    <div className="progress mt-2">
                      <div
                        className="progress-bar bg-secondary d-flex align-items-end"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        14 Visiting Members
                      </div>
                    </div>
                  </div>
                </div>
                {/* Failed Billing Card */}
                <div className="col-md-6 mb-4">
                  <div className="mb-card">
                    <div className="mb-card-title">
                      Failed Billing This Month
                    </div>
                    <div className="mb-value">2</div>
                    <div className="mb-footnote">
                      * Members who have failed billing this month and are still
                      owing
                    </div>
                  </div>
                </div>
                {/* New Members Card */}
                <div className="col-md-6 mb-4">
                  <div className="mb-card">
                    <div className="mb-card-title">New Members</div>
                    <div className="mb-value">0</div>
                    <div className="mb-footnote">
                      * Joined since {months[currentMonthIndex]} 1 compared with {months[(currentMonthIndex - 1 + 12) % 12]} 1 to {months[(currentMonthIndex - 1 + 12) % 12]} 28
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <AdminDashboardCard/>

                <AdminDashboardLastCharts/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminDashboard;