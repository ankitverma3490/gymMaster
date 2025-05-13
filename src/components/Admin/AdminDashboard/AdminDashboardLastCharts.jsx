import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const AdminDashboardLastCharts = () => {
  // References for chart instances
  const debtorsChartRef = useRef(null);
  const revenueChartRef = useRef(null);
  const memberGenderChartRef = useRef(null);
  
  // References for canvas elements
  const debtorsCanvasRef = useRef(null);
  const revenueCanvasRef = useRef(null);
  const memberGenderCanvasRef = useRef(null);
  
  // Tooltip ref
  const customTooltipRef = useRef(null);

  useEffect(() => {
    // Clear any existing charts when component mounts or updates
    if (debtorsChartRef.current) {
      debtorsChartRef.current.destroy();
    }
    if (revenueChartRef.current) {
      revenueChartRef.current.destroy();
    }
    if (memberGenderChartRef.current) {
      memberGenderChartRef.current.destroy();
    }

    // Initialize Debtors Chart
    if (debtorsCanvasRef.current) {
      const ctx = debtorsCanvasRef.current.getContext('2d');
      debtorsChartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Paid Up', 'Owes 20-100', 'Owes 100-300', 'Owes >300'],
          datasets: [{
            data: [85, 7, 5, 3],
            backgroundColor: [
              '#C1E1C1', // Light green for Paid Up
              '#FF7F7F', // Light red for Owes 20-100
              '#FFBFBF', // Lighter red for Owes 100-300
              '#8B4513'  // Brown for Owes >300
            ],
            borderWidth: 0,
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  return `${label}: ${value}%`;
                }
              }
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true
          }
        }
      });
    }

    // Initialize Revenue Chart
    if (revenueCanvasRef.current) {
      const ctx = revenueCanvasRef.current.getContext('2d');
      revenueChartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [
            '24x Month + Gym M...',
            'Membership (MULTI...',
            '4x Month Sales',
            'Reserve Golf Simu...',
            'Avid Golfer ($149...',
            '10x Month Sales',
            'Rest'
          ],
          datasets: [{
            data: [25, 20, 15, 8, 5, 7, 20],
            backgroundColor: [
              '#C1E1C1', // Light green
              '#79E0C0', // Teal
              '#A7B8FF', // Light blue
              '#E0A7FF', // Light purple
              '#FFB6B6', // Light pink/salmon
              '#FFEAA7', // Light yellow
              '#7C7F9E'  // Gray/slate
            ],
            borderWidth: 1,
            borderColor: '#ffffff',
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%',
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  return `${label}: ${value}%`;
                }
              }
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true
          },
          layout: {
            padding: 20
          }
        }
      });
    }

    // Initialize Member Gender Chart
    if (memberGenderCanvasRef.current) {
      const ctx = memberGenderCanvasRef.current.getContext('2d');
      
      // Custom plugin for center label
      const centerLabelPlugin = {
        id: 'centerLabel',
        afterDraw: function(chart) {
          if (chart.config.type === 'doughnut') {
            const activeElements = chart.getActiveElements();
            if (activeElements.length > 0) {
              const ctx = chart.ctx;
              const centerX = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
              const centerY = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;

              // Clear the center area
              ctx.save();
              ctx.globalCompositeOperation = 'destination-out';
              ctx.beginPath();
              ctx.arc(centerX, centerY, chart.innerRadius, 0, 2 * Math.PI);
              ctx.fill();
              ctx.restore();

              // Add text
              const activeIndex = activeElements[0].index;
              const label = chart.data.labels[activeIndex];

              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.font = '14px Arial';
              ctx.fillStyle = '#666';
              ctx.fillText(label, centerX, centerY);
            }
          }
        }
      };

      Chart.register(centerLabelPlugin);
      
      memberGenderChartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Female', 'Male', 'Unspecified'],
          datasets: [{
            data: [15, 55, 30],
            backgroundColor: [
              '#FFB6B6', // Light pink for Female
              '#A7B8FF', // Light blue for Male
              '#7C7F9E'  // Gray/slate for Unspecified
            ],
            borderWidth: 1,
            borderColor: '#ffffff',
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '50%',
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  return `${label}: ${value}%`;
                }
              }
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true
          },
          hover: {
            mode: 'nearest',
            intersect: true,
            onHover: function(event, elements) {
              if (memberGenderCanvasRef.current) {
                memberGenderCanvasRef.current.style.cursor = elements.length ? 'pointer' : 'default';
              }
            }
          }
        }
      });
    }

    // Cleanup function to destroy charts when component unmounts
    return () => {
      if (debtorsChartRef.current) {
        debtorsChartRef.current.destroy();
      }
      if (revenueChartRef.current) {
        revenueChartRef.current.destroy();
      }
      if (memberGenderChartRef.current) {
        memberGenderChartRef.current.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Functions to handle legend item hover
  const handleRevenueLegendHover = (index, isEnter) => {
    if (revenueChartRef.current) {
      if (isEnter) {
        revenueChartRef.current.setActiveElements([{
          datasetIndex: 0,
          index: index
        }]);
      } else {
        revenueChartRef.current.setActiveElements([]);
      }
      revenueChartRef.current.update();
    }
  };

  const handleMemberGenderLegendHover = (index, isEnter) => {
    if (memberGenderChartRef.current) {
      if (isEnter) {
        memberGenderChartRef.current.setActiveElements([{
          datasetIndex: 0,
          index: index
        }]);
      } else {
        memberGenderChartRef.current.setActiveElements([]);
      }
      memberGenderChartRef.current.update();
    }
  };

  return (
    <>
      <div className="col-md-12">
        <div className="debtors-card">
          <h2 className="debtors-title">Debtors</h2>
          <div className="row">
            <div className="col-md-8">
              <div className="debtors-chart-container">
                <canvas ref={debtorsCanvasRef} />
                <div className="debtors-center-text">$965</div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <div className="debtors-legend">
                <div className="debtors-legend-item">
                  <div
                    className="debtors-legend-color"
                    style={{ backgroundColor: "#C1E1C1" }}
                  ></div>
                  <div className="debtors-legend-label">Paid Up</div>
                </div>
                <div className="debtors-legend-item">
                  <div
                    className="debtors-legend-color"
                    style={{ backgroundColor: "#FF7F7F" }}
                  ></div>
                  <div className="debtors-legend-label">Owes 20-100</div>
                </div>
                <div className="debtors-legend-item">
                  <div
                    className="debtors-legend-color"
                    style={{ backgroundColor: "#FFBFBF" }}
                  ></div>
                  <div className="debtors-legend-label">Owes 100-300</div>
                </div>
                <div className="debtors-legend-item">
                  <div
                    className="debtors-legend-color"
                    style={{ backgroundColor: "#8B4513" }}
                  ></div>
                  <div className="debtors-legend-label">Owes &gt;300</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="revenue-card">
          <h2 className="revenue-title">Revenue (Tax Excl.)</h2>
          <div className="row">
            <div className="col-md-8">
              <div className="revenue-chart-container">
                <canvas ref={revenueCanvasRef} />
                <div className="revenue-center-text">$2170</div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <div className="revenue-legend">
                {[
                  { color: "#C1E1C1", label: "24x Month + Gym M..." },
                  { color: "#79E0C0", label: "Membership (MULTI..." },
                  { color: "#A7B8FF", label: "4x Month Sales" },
                  { color: "#E0A7FF", label: "Reserve Golf Simu..." },
                  { color: "#FFB6B6", label: "Avid Golfer ($149..." },
                  { color: "#FFEAA7", label: "10x Month Sales" },
                  { color: "#7C7F9E", label: "Rest" }
                ].map((item, index) => (
                  <div 
                    className="revenue-legend-item" 
                    key={index}
                    onMouseEnter={() => handleRevenueLegendHover(index, true)}
                    onMouseLeave={() => handleRevenueLegendHover(index, false)}
                  >
                    <div
                      className="revenue-legend-color"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="revenue-legend-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="member-gender-card">
          <h2 className="member-gender-title">Member Gender</h2>
          <div className="row">
            <div className="col-md-8">
              <div className="member-gender-chart-container">
                <canvas ref={memberGenderCanvasRef} />
                <div ref={customTooltipRef} className="member-gender-tooltip" />
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <div className="member-gender-legend">
                {[
                  { color: "#FFB6B6", label: "Female" },
                  { color: "#A7B8FF", label: "Male" },
                  { color: "#7C7F9E", label: "Unspecified" }
                ].map((item, index) => (
                  <div 
                    className="member-gender-legend-item" 
                    key={index}
                    onMouseEnter={() => handleMemberGenderLegendHover(index, true)}
                    onMouseLeave={() => handleMemberGenderLegendHover(index, false)}
                  >
                    <div
                      className="member-gender-legend-color"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="member-gender-legend-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardLastCharts;