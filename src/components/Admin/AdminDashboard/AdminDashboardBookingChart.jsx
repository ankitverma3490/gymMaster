import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js";

const AdminDashboardBookingChart = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  // Get months for x-axis (previous year May to current year April)
  const getMonthsArray = (year) => {
    const prevYear = year - 1;
    return [
      `May ${prevYear}`, `Jun ${prevYear}`, `Jul ${prevYear}`, `Aug ${prevYear}`,
      `Sep ${prevYear}`, `Oct ${prevYear}`, `Nov ${prevYear}`, `Dec ${prevYear}`,
      `Jan ${year}`, `Feb ${year}`, `Mar ${year}`, `Apr ${year}`
    ];
  };

  // Sample data generators
  const generateData = (year) => {
    // For demo purposes, create data similar to the image
    // In a real app, this would come from an API or database

    // No activity for months before November (May-Oct)
    const zeroValues = [0, 0, 0, 0, 0, 0];

    // Logic to adjust data based on different years
    const yearMultiplier = year === 2025 ? 1 : (year < 2025 ? 0.7 : 1.2);

    return {
      prospectTours: [
        ...zeroValues,
        // Nov, Dec, Jan, Feb, Mar, Apr
        Math.round(45 * yearMultiplier),
        Math.round(160 * yearMultiplier),
        Math.round(150 * yearMultiplier),
        Math.round(145 * yearMultiplier),
        Math.round(135 * yearMultiplier),
        Math.round(80 * yearMultiplier)
      ],
      cancellations: [
        ...zeroValues,
        // Nov, Dec, Jan, Feb, Mar, Apr
        Math.round(-30 * yearMultiplier),
        Math.round(-80 * yearMultiplier),
        Math.round(-30 * yearMultiplier),
        Math.round(-25 * yearMultiplier),
        Math.round(-25 * yearMultiplier),
        Math.round(-25 * yearMultiplier)
      ],
      noShows: [
        ...zeroValues,
        // Nov, Dec, Jan, Feb, Mar, Apr
        Math.round(-5 * yearMultiplier),
        Math.round(-10 * yearMultiplier),
        Math.round(-10 * yearMultiplier),
        Math.round(-10 * yearMultiplier),
        Math.round(-10 * yearMultiplier),
        Math.round(-5 * yearMultiplier)
      ]
    };
  };

  // Create and update chart
  const createChart = () => {
    if (!chartRef.current) return;
    
    const ctx = chartRef.current.getContext('2d');
    const months = getMonthsArray(currentYear);
    const data = generateData(currentYear);

    // Destroy previous chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          // Negative values (below axis)
          {
            label: 'No Shows',
            data: data.noShows,
            backgroundColor: 'rgba(255, 182, 193, 0.7)',
            borderColor: 'rgba(255, 182, 193, 1)',
            borderWidth: 1,
            stack: 'negative'
          },
          {
            label: 'Cancellations',
            data: data.cancellations,
            backgroundColor: 'rgba(233, 116, 116, 0.7)',
            borderColor: 'rgba(233, 116, 116, 1)',
            borderWidth: 1,
            stack: 'negative'
          },
          // Positive values
          {
            label: 'Prospect Tour - Non Member',
            data: data.prospectTours,
            backgroundColor: 'rgba(224, 232, 243, 0.7)',
            borderColor: 'rgba(224, 232, 243, 1)',
            borderWidth: 1,
            stack: 'positive'
          },
          // Zero-value placeholders for the legend (will be hidden in the chart)
          {
            label: 'Bootcamp-West Valley',
            data: Array(12).fill(0),
            backgroundColor: 'rgba(92, 123, 164, 0.7)',
            borderColor: 'rgba(92, 123, 164, 1)',
            borderWidth: 1,
            stack: 'positive',
            hidden: true
          },
          {
            label: 'Bootcamp- Conway, AR',
            data: Array(12).fill(0),
            backgroundColor: 'rgba(86, 115, 152, 0.7)',
            borderColor: 'rgba(86, 115, 152, 1)',
            borderWidth: 1,
            stack: 'positive',
            hidden: true
          },
          {
            label: 'Bootcamp-Wellington',
            data: Array(12).fill(0),
            backgroundColor: 'rgba(125, 156, 193, 0.7)',
            borderColor: 'rgba(125, 156, 193, 1)',
            borderWidth: 1,
            stack: 'positive',
            hidden: true
          },
          {
            label: 'Reserve Golf Simulator',
            data: Array(12).fill(0),
            backgroundColor: 'rgba(197, 210, 230, 0.7)',
            borderColor: 'rgba(197, 210, 230, 1)',
            borderWidth: 1,
            stack: 'positive',
            hidden: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              maxRotation: 45,
              minRotation: 45
            }
          },
          y: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              callback: function (value) {
                return value;
              }
            },
            suggestedMin: -100,
            suggestedMax: 200
          }
        },
        plugins: {
          legend: {
            display: false // We're using our custom legend
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                let value = context.raw;
                // Show absolute values in tooltips
                label += Math.abs(value);
                return label;
              }
            }
          }
        }
      }
    });
  };

  // Handle year navigation
  const handlePrevYear = () => {
    setCurrentYear(prev => prev - 1);
  };

  const handleNextYear = () => {
    setCurrentYear(prev => prev + 1);
  };

  // Initialize and update chart when component mounts or year changes
  useEffect(() => {
    createChart();
    
    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [currentYear]); // Re-run when currentYear changes

  return (
    <div className="mb-container">
      <h2 className="mb-title">Member Bookings</h2>
      <div className="mb-year-selector">
        <button className="mb-nav-btn mb-prev-btn" onClick={handlePrevYear}>&lt;</button>
        <div className="mb-year">{currentYear}</div>
        <button className="mb-nav-btn mb-next-btn" onClick={handleNextYear}>&gt;</button>
      </div>
      <div className="mb-legend">
        <div className="mb-legend-item">
          <div className="mb-legend-color mb-color-noshows" />
          <span>No Shows</span>
        </div>
        <div className="mb-legend-item">
          <div className="mb-legend-color mb-color-cancellations" />
          <span>Cancellations</span>
        </div>
        <div className="mb-legend-item">
          <div className="mb-legend-color mb-color-westvalley" />
          <span>Bootcamp-West Valley</span>
        </div>
        <div className="mb-legend-item">
          <div className="mb-legend-color mb-color-conway" />
          <span>Bootcamp- Conway, AR</span>
        </div>
        <div className="mb-legend-item">
          <div className="mb-legend-color mb-color-wellington" />
          <span>Bootcamp-Wellington</span>
        </div>
        <div className="mb-legend-item">
          <div className="mb-legend-color mb-color-golfsim" />
          <span>Reserve Golf Simulator</span>
        </div>
        <div className="mb-legend-item">
          <div className="mb-legend-color mb-color-prospect" />
          <span>Prospect Tour - Non Member</span>
        </div>
      </div>
      <div className="mb-chart-container">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default AdminDashboardBookingChart;