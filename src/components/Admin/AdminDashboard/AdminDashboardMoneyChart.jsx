import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AdminDashboardMoneyChart = () => {
  // Chart reference
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  // Current view state
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState("Apr 28 2025");
  
  // Data for the chart - simulates the data from the image
  const monthlyData = [
    {
      month: 'November',
      data: [
        { week: 'Nov 1', value: 100 },
        { week: 'Nov 8', value: 0 },
        { week: 'Nov 15', value: 0 },
        { week: 'Nov 22', value: 1250 },
        { week: 'Nov 29', value: 700 }
      ]
    },
    {
      month: 'December',
      data: [
        { week: 'Dec 6', value: 300 },
        { week: 'Dec 13', value: 200 },
        { week: 'Dec 20', value: 1750 },
        { week: 'Dec 27', value: 0 }
      ]
    },
    {
      month: 'January',
      data: [
        { week: 'Jan 3', value: 50 },
        { week: 'Jan 10', value: 1580 },
        { week: 'Jan 17', value: 200 },
        { week: 'Jan 24', value: 0 },
        { week: 'Jan 31', value: 0 }
      ]
    },
    {
      month: 'February',
      data: [
        { week: 'Feb 7', value: 350 },
        { week: 'Feb 14', value: 2000 },
        { week: 'Feb 21', value: 250 },
        { week: 'Feb 28', value: 150 }
      ]
    },
    {
      month: 'March',
      data: [
        { week: 'Mar 7', value: 0 },
        { week: 'Mar 14', value: 0 },
        { week: 'Mar 21', value: 1650 },
        { week: 'Mar 28', value: 50 }
      ]
    },
    {
      month: 'April',
      data: [
        { week: 'Apr 4', value: 0 },
        { week: 'Apr 11', value: 0 },
        { week: 'Apr 18', value: 0 },
        { week: 'Apr 25', value: 0 }
      ]
    }
  ];

  // Function to format date as "MMM DD YYYY"
  const formatDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day} ${year}`;
  };

  // Flatten all data entries to create a timeline
  const allData = monthlyData.flatMap(month => month.data);
  
  // Navigation functions
  const handlePrevWeek = () => {
    if (currentViewIndex > 0) {
      setCurrentViewIndex(currentViewIndex - 1);
      // Update date (demo purpose, in a real app would be calculated based on the data)
      const prevDate = new Date(2025, 3, 21); // April 21, 2025 (one week earlier)
      setCurrentDate(formatDate(prevDate));
      updateChart(currentViewIndex - 1);
    }
  };

  const handleNextWeek = () => {
    if (currentViewIndex < allData.length - 20) { // Assuming we're showing 20 entries at a time
      setCurrentViewIndex(currentViewIndex + 1);
      // Update date (demo purpose, in a real app would be calculated based on the data)
      const nextDate = new Date(2025, 4, 5); // May 5, 2025 (one week later)
      setCurrentDate(formatDate(nextDate));
      updateChart(currentViewIndex + 1);
    }
  };

  // Update the chart data based on currentViewIndex
  const updateChart = (viewIndex) => {
    if (!chartInstance.current) return;
    
    // For initial display, show a window of data
    const startIndex = Math.max(0, viewIndex);
    const displayData = allData.slice(startIndex, startIndex + 20);

    // Prepare data for the chart
    const labels = [];
    const values = [];
    const backgroundColors = [];

    // Fill the arrays with data
    displayData.forEach(item => {
      labels.push(item.week);
      values.push(item.value);

      // Set different colors based on month
      if (item.week.startsWith('Nov')) {
        backgroundColors.push('rgba(135, 206, 235, 0.4)'); // Light blue
      } else if (item.week.startsWith('Dec')) {
        backgroundColors.push('rgba(144, 238, 144, 0.4)'); // Light green
      } else if (item.week.startsWith('Jan')) {
        backgroundColors.push('rgba(230, 230, 250, 0.4)'); // Lavender
      } else if (item.week.startsWith('Feb')) {
        backgroundColors.push('rgba(255, 182, 193, 0.4)'); // Light pink
      } else if (item.week.startsWith('Mar')) {
        backgroundColors.push('rgba(152, 251, 152, 0.4)'); // Pale green
      } else {
        backgroundColors.push('rgba(211, 211, 211, 0.4)'); // Light gray
      }
    });

    // Update chart data
    chartInstance.current.data.labels = labels;
    chartInstance.current.data.datasets[0].data = values;
    chartInstance.current.data.datasets[0].backgroundColor = backgroundColors;
    chartInstance.current.data.datasets[0].borderColor = backgroundColors.map(color => 
      color.replace('0.4', '1')
    );
    
    // Update the chart
    chartInstance.current.update();
  };

  // Initialize Chart.js when component mounts
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      // For initial display, show last 20 weeks (or all if less than 20)
      const startIndex = Math.max(0, allData.length - 20);
      const displayData = allData.slice(startIndex);

      // Prepare data for the chart
      const labels = [];
      const values = [];
      const backgroundColors = [];

      // Fill the arrays with data
      displayData.forEach(item => {
        labels.push(item.week);
        values.push(item.value);

        // Set different colors based on month
        if (item.week.startsWith('Nov')) {
          backgroundColors.push('rgba(135, 206, 235, 0.4)'); // Light blue
        } else if (item.week.startsWith('Dec')) {
          backgroundColors.push('rgba(144, 238, 144, 0.4)'); // Light green
        } else if (item.week.startsWith('Jan')) {
          backgroundColors.push('rgba(230, 230, 250, 0.4)'); // Lavender
        } else if (item.week.startsWith('Feb')) {
          backgroundColors.push('rgba(255, 182, 193, 0.4)'); // Light pink
        } else if (item.week.startsWith('Mar')) {
          backgroundColors.push('rgba(152, 251, 152, 0.4)'); // Pale green
        } else {
          backgroundColors.push('rgba(211, 211, 211, 0.4)'); // Light gray
        }
      });

      // Create the chart
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            data: values,
            backgroundColor: backgroundColors,
            borderColor: backgroundColors.map(color => color.replace('0.4', '1')),
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `$${context.raw}`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return '$' + value;
                },
                stepSize: 500,
                max: 2500
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
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
      <div className="finance-dashboard-wrapper">
        <h2 className="finance-report-title">Money Received Weekly</h2>
        <div className="finance-navigation-bar">
          <button 
            className="finance-nav-button" 
            onClick={handlePrevWeek}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <div className="finance-current-period">
            {currentDate}
          </div>
          <button 
            className="finance-nav-button" 
            onClick={handleNextWeek}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
        <div className="finance-visualization-area">
          <canvas ref={chartRef} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboardMoneyChart;