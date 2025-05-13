import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AdminDashboardFirst = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const [tooltipInfo, setTooltipInfo] = useState({
    visible: false,
    text: "",
    left: 0,
    top: 0,
  });
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Month data with money values
  const monthlyData = [
    { month: "May", amount: 1050, year: 2024, percentage: 35 },
    { month: "Jun", amount: 2100, year: 2024, percentage: 70 },
    { month: "Jul", amount: 1140, year: 2024, percentage: 38 },
    { month: "Aug", amount: 1200, year: 2024, percentage: 40 },
    { month: "Sep", amount: 1590, year: 2024, percentage: 53 },
    { month: "Oct", amount: 960, year: 2024, percentage: 32 },
    { month: "Nov", amount: 1500, year: 2024, percentage: 50 },
    { month: "Dec", amount: 2310, year: 2024, percentage: 73 },
    { month: "Jan", amount: 1710, year: 2025, percentage: 57 },
    { month: "Feb", amount: 2490, year: 2025, percentage: 83 },
    { month: "Mar", amount: 2610, year: 2025, percentage: 87 },
    { month: "Apr", amount: 1650, year: 2025, percentage: 55 },
  ];

  const handlePrevYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
  };

  const showTooltip = (e, month, amount, year) => {
    const rect = e.target.getBoundingClientRect();
    const chartContainer = e.target.closest(".money-chart-visualization");
    const containerRect = chartContainer.getBoundingClientRect();

    setTooltipInfo({
      visible: true,
      text: `${month} ${year}: $${amount}`,
      left: rect.left - containerRect.left + rect.width / 2,
      top: rect.top - containerRect.top - 40,
    });
  };

  const hideTooltip = () => {
    setTooltipInfo((prev) => ({ ...prev, visible: false }));
  };

  // Initialize Chart.js
  useEffect(() => {
    if (chartRef.current) {
      // Chart.js data
      const labels = [
        "Apr 27 4:00 am",
        "Apr 27 5:00 am",
        "Apr 27 6:00 am",
        "Apr 27 7:00 am",
        "Apr 27 8:00 am",
        "Apr 27 9:00 am",
        "Apr 27 10:00 am",
        "Apr 27 11:00 am",
        "Apr 27 12:00 pm",
        "Apr 27 1:00 pm",
        "Apr 27 2:00 pm",
        "Apr 27 3:00 pm",
        "Apr 27 4:00 pm",
        "Apr 27 5:00 pm",
        "Apr 27 6:00 pm",
        "Apr 27 7:00 pm",
        "Apr 27 8:00 pm",
        "Apr 27 9:00 pm",
        "Apr 27 10:00 pm",
        "Apr 27 11:00 pm",
        "Apr 28 12:00 am",
        "Apr 28 1:00 am",
        "Apr 28 2:00 am",
        "Apr 28 3:00 am",
        "Apr 28 4:00 am",
      ];

      const data = [
        0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02,
        0.02, 0.02, 0.1, 0.4, 2.0, 0.4, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02,
        0.02,
      ];

      // Destroy previous chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart
      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "golf simulator",
              data: data,
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              borderColor: "rgba(153, 102, 255, 1)",
              borderWidth: 2,
              tension: 0.4,
              pointRadius: 3,
              pointBackgroundColor: "rgba(153, 102, 255, 1)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 2.2,
              ticks: {
                stepSize: 0.2,
              },
              grid: {
                drawBorder: false,
              },
            },
            x: {
              grid: {
                drawBorder: false,
              },
              ticks: {
                maxRotation: 50,
                minRotation: 50,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    // Cleanup function to destroy chart on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Money Chart Container */}
      <div className="money-chart-container">
        <h2 className="money-chart-title">Money Received</h2>
        <div className="money-chart-date-nav">
          <button
            className="money-chart-arrow prev-year"
            onClick={handlePrevYear}
          >
            <span>&lt;</span>
          </button>
          <div className="money-chart-date">Apr 1 {currentYear}</div>
          <button
            className="money-chart-arrow next-year"
            onClick={handleNextYear}
          >
            <span>&gt;</span>
          </button>
        </div>
        <div className="money-chart-visualization">
          {/* Tooltip element */}
          <div
            className="money-chart-tooltip"
            id="moneyChartTooltip"
            style={{
              opacity: tooltipInfo.visible ? 1 : 0,
              left: `${tooltipInfo.left}px`,
              top: `${tooltipInfo.top}px`,
            }}
          >
            {tooltipInfo.text}
          </div>
          <div className="money-chart-gridlines">
            <div className="money-chart-gridline">
              <span className="money-chart-gridline-label">$3000</span>
            </div>
            <div className="money-chart-gridline">
              <span className="money-chart-gridline-label">$2500</span>
            </div>
            <div className="money-chart-gridline">
              <span className="money-chart-gridline-label">$2000</span>
            </div>
            <div className="money-chart-gridline">
              <span className="money-chart-gridline-label">$1500</span>
            </div>
            <div className="money-chart-gridline">
              <span className="money-chart-gridline-label">$1000</span>
            </div>
            <div className="money-chart-gridline">
              <span className="money-chart-gridline-label">$500</span>
            </div>
            <div className="money-chart-gridline">
              <span className="money-chart-gridline-label">$0</span>
            </div>
          </div>
          <div className="money-chart-grid">
            {/* Generate bars using React */}
            {monthlyData.map((data, index) => (
              <div key={index} className="money-chart-bar-container">
                <div
                  className={`money-chart-bar money-chart-bar-${data.month.toLowerCase()}`}
                  style={{ height: `${data.percentage}%` }}
                  onMouseEnter={(e) =>
                    showTooltip(e, data.month, data.amount, data.year)
                  }
                  onMouseLeave={hideTooltip}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="money-chart-month-labels">
          {monthlyData.map((data, index) => (
            <div key={index} className="money-chart-month">
              {data.month}
            </div>
          ))}
        </div>
      </div>

      <div className="visit-card-container mt-2">
        <h5 className="mb-2 text-center">Visit History</h5>
        <div className="visit-inner-card">
          {/* Header with date and navigation buttons */}
          <div className="visit-header">
            <button className="visit-nav-btn">&lt;</button>
            <h2 className="visit-header-title">Apr 28 2025</h2>
            <button className="visit-nav-btn">&gt;</button>
          </div>
          {/* Legend */}
          <div className="visit-legend-item">
            <div className="visit-legend-color" />
            <span>golf simulator</span>
          </div>
          {/* Chart */}
          <div className="visit-chart-container">
            {/* Visit Chart */}
            <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
              <canvas ref={chartRef} id="visitChart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardFirst;
