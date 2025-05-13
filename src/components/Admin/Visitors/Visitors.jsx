import React, { useState } from "react";
import "./Visitors.css";

const Visitors = () => {
  // State to control the display of edit form
  const [showEditForm, setShowEditForm] = useState(false);
  
  // State for door status
  const [doorStatus, setDoorStatus] = useState({
    text: "Active",
    color: "#4CAF50" // Green for active
  });
  
  // State for the selected status in dropdown
  const [selectedStatus, setSelectedStatus] = useState("Active (Fob required)");

  // Handle edit button click
  const handleEditClick = () => {
    setShowEditForm(true);
  };

  // Handle save button click
  const handleSaveClick = () => {
    // Extract the first word from the selected status
    const statusDisplay = selectedStatus.split(" ")[0];
    
    // Set color based on status
    let statusColor;
    if (statusDisplay === "Inactive") {
      statusColor = "#ff4d4d"; // Red
    } else if (statusDisplay === "Maintenance") {
      statusColor = "#ffa500"; // Orange
    } else if (statusDisplay === "Locked") {
      statusColor = "#ff4d4d"; // Red
    } else if (statusDisplay === "Unlocked") {
      statusColor = "#ffa500"; // Orange
    } else {
      statusColor = "#4CAF50"; // Green for Active
    }
    
    // Update the door status
    setDoorStatus({
      text: statusDisplay,
      color: statusColor
    });
    
    // Hide the edit form
    setShowEditForm(false);
    
    // Show success message
    alert(`Door status updated to: ${selectedStatus}`);
  };

  // Handle status selection change
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <>
      <div className="container dal-container">
        <h4 className="mb-3">Visitors</h4>
        <div className="row">
          <div className="col-lg-9">
            <div className="dal-card">
              <div className="dal-card-body">
                {/* Filter controls */}
                <div className="row dal-filter-row d-flex justify-content-between">
                  <div className="col-md-3">
                    <select className="dal-dropdown">
                      <option>Golf Simulator</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select className="dal-dropdown">
                      <option>All doors</option>
                      <option>golf simulator</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    {/* Action buttons */}
                    <div className="float-end">
                      <button
                        className="dal-btn-print me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#printModal"
                      >
                        <i className="fas fa-print" />
                      </button>
                      <button className="dal-btn-fire">
                        <i className="fas fa-fire" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Date range */}
                <div className="row dal-filter-row">
                  <div className="col-md-3">
                    <input
                      type="date"
                      className="dal-date-input"
                      defaultValue="2025-04-29"
                    />
                  </div>
                  <div className="col-md-1 dal-date-separator">to</div>
                  <div className="col-md-3">
                    <input
                      type="date"
                      className="dal-date-input"
                      defaultValue="2025-04-29"
                    />
                  </div>
                </div>
                {/* Access log table */}
                <table className="dal-access-table">
                  <tbody>
                    {/* First record */}
                    <tr className="dal-access-row dal-access-row-recent">
                      <td className="dal-time-cell">
                        <div className="dal-time-ago">0 min ago</div>
                        <div className="dal-timestamp">2:35 am</div>
                      </td>
                      <td className="dal-details-cell">
                        <div className="dal-access-type">Granted (M)</div>
                        <div className="dal-door-info">
                          Open door #48 manually
                        </div>
                        <div className="dal-location">golf simulator</div>
                      </td>
                      <td className="dal-user-cell">
                        <div className="dal-user-avatar">
                          {/* Using placeholder for avatar as the original URL was broken */}
                          <img
                            src="https://i.ibb.co/JRTXs4pb/Ellipse-5-6.png"
                            alt="User avatar"
                          />
                        </div>
                        <div className="dal-user-info">
                          <div className="dal-user-name">Rohan Maher</div>
                          <div className="dal-user-role">Staff</div>
                          <div className="dal-visit-tag">Visit</div>
                        </div>
                      </td>
                    </tr>
                    {/* Second record */}
                    <tr className="dal-access-row">
                      <td className="dal-time-cell">
                        <div className="dal-time-ago">3 min ago</div>
                        <div className="dal-timestamp">2:31 am</div>
                      </td>
                      <td className="dal-details-cell">
                        <div className="dal-access-type">Granted (M)</div>
                        <div className="dal-door-info">
                          Open door #48 manually
                        </div>
                        <div className="dal-location">golf simulator</div>
                      </td>
                      <td className="dal-user-cell">
                        <div className="dal-user-avatar">
                          {/* Using placeholder for avatar as the original URL was broken */}
                          <img
                            src="https://i.ibb.co/JRTXs4pb/Ellipse-5-6.png"
                            alt="User avatar"
                          />
                        </div>
                        <div className="dal-user-info">
                          <div className="dal-user-name">Rohan Maher</div>
                          <div className="dal-user-role">Staff</div>
                          <div className="dal-visit-tag">Visit</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-lg-3">
            {/* Doors & Readers Card */}
            <div className="dal-sidebar-card">
              <div className="dal-sidebar-header">
                <h5 className="dal-sidebar-title">
                  <i className="fas fa-door-open me-2" /> Doors &amp; Readers
                </h5>
                <button className="btn dal-dropdown-icon">
                  <i className="fas fa-chevron-down" />
                </button>
              </div>
              <div className="dal-sidebar-body">
                <div className="dal-door-item">
                  <div className="door-card position-relative">
                    <div className="door-header">
                      <h2 className="door-title">golf simulator</h2>
                      <div className="d-flex align-items-center">
                        {!showEditForm && (
                          <div className="current-view">
                            <button 
                              className="action-btn edit-btn" 
                              title="Edit"
                              onClick={handleEditClick}
                            >
                              <i className="fas fa-pen" />
                            </button>
                          </div>
                        )}
                        <button className="open-btn">Open</button>
                      </div>
                    </div>
                    <div className="door-body">
                      {!showEditForm && (
                        <div className="door-status">
                          <span 
                            className="status-indicator" 
                            style={{ backgroundColor: doorStatus.color }}
                          />
                          {doorStatus.text}
                        </div>
                      )}
                      {showEditForm && (
                        <div className="edit-form" style={{ display: 'block' }}>
                          <label className="status-label">Change Status to</label>
                          <select 
                            className="status-select form-select"
                            value={selectedStatus}
                            onChange={handleStatusChange}
                          >
                            <option>Active (Fob required)</option>
                            <option>Unlocked (Door is open)</option>
                            <option>Locked (No access for members)</option>
                          </select>
                          <button 
                            className="save-btn"
                            onClick={handleSaveClick}
                          >
                            Save Door Status
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Visits Card */}
            <div className="dal-sidebar-card dal-visits-card">
              <div className="dal-sidebar-body">
                <div className="dal-visits-title">Visits Over Period</div>
                <div className="dal-visits-count">0</div>
                <div className="dal-visits-note">
                  * Total number of visitors (including staff) for the selected
                  club over the selected date range
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Print Modal */}
        <div
          className="modal fade dal-print-modal"
          id="printModal"
          tabIndex={-1}
          aria-labelledby="printModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="printModalLabel">
                  Print Visitor Report
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="gym-report-wrapper">
                  <div className="gym-report-container bg-white">
                    <div className="gym-report-header">
                      <div className="gym-report-timestamp">
                        4/29/25, 1:16 PM
                      </div>
                      <div className="gym-report-title">
                        Visitors - GymMaster Online
                      </div>
                      <div className="gym-report-logo">
                        <svg
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={30} cy={30} r={28} fill="#4a6da7" />
                          <text
                            x={30}
                            y={35}
                            fontFamily="Arial"
                            fontSize={10}
                            fill="white"
                            textAnchor="middle"
                          >
                            GYMMASTER
                          </text>
                        </svg>
                      </div>
                    </div>
                    <div className="gym-report-details">
                      <div className="gym-report-detail-row">
                        <div className="gym-report-detail-label">Visitors</div>
                        <div className="gym-report-detail-colon">:</div>
                        <div className="gym-report-detail-value">2</div>
                      </div>
                      <div className="gym-report-detail-row">
                        <div className="gym-report-detail-label">Club</div>
                        <div className="gym-report-detail-colon">:</div>
                        <div className="gym-report-detail-value">
                          Golf Simulator
                        </div>
                      </div>
                      <div className="gym-report-detail-row">
                        <div className="gym-report-detail-label">Door</div>
                        <div className="gym-report-detail-colon">:</div>
                        <div className="gym-report-detail-value">All doors</div>
                      </div>
                      <div className="gym-report-detail-row">
                        <div className="gym-report-detail-label">
                          Start Date and Time
                        </div>
                        <div className="gym-report-detail-colon">:</div>
                        <div className="gym-report-detail-value">
                          04-29-2025
                        </div>
                      </div>
                      <div className="gym-report-detail-row">
                        <div className="gym-report-detail-label">
                          End Date and Time
                        </div>
                        <div className="gym-report-detail-colon">:</div>
                        <div className="gym-report-detail-value">
                          04-29-2025
                        </div>
                      </div>
                    </div>
                    <table className="gym-report-table">
                      <thead>
                        <tr>
                          <th>Time</th>
                          <th>Door</th>
                          <th>Result</th>
                          <th>Reason</th>
                          <th>Name</th>
                          <th>Owing</th>
                          <th>Membership Name</th>
                          <th>ID</th>
                          <th>Total Visits</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            29 Apr 2025
                            <br />
                            02:35:15 AM
                          </td>
                          <td>
                            golf simulator -<br />
                            Not Counted
                          </td>
                          <td>Granted</td>
                          <td>
                            Open door #48
                            <br />
                            manually
                          </td>
                          <td>
                            Rohan
                            <br />
                            Maher
                          </td>
                          <td />
                          <td>Staff</td>
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <td>
                            29 Apr 2025
                            <br />
                            02:31:58 AM
                          </td>
                          <td>
                            golf simulator -<br />
                            Not Counted
                          </td>
                          <td>Granted</td>
                          <td>
                            Open door #48
                            <br />
                            manually
                          </td>
                          <td>
                            Rohan
                            <br />
                            Maher
                          </td>
                          <td />
                          <td>Staff</td>
                          <td />
                          <td />
                        </tr>
                      </tbody>
                    </table>
                    <div className="d-flex justify-content-between">
                      <div className="gym-report-footer">
                        https://userfitness.gymmasteronline.com/print_visitor?start=04-29-2025&amp;end=04-29-2025&amp;club=15&amp;door=1
                      </div>
                      <div className="gym-report-pagination">1/1</div>
                    </div>
                  </div>
                  <div className="gym-print-panel">
                    <h3 className="mb-4">Print</h3>
                    <p className="text-end mb-4">1 sheet of paper</p>
                    <div className="gym-print-form-group">
                      <label className="gym-print-label">Destination</label>
                      <div className="position-relative">
                        <select className="gym-print-dropdown">
                          <option>Microsoft Print to PDF</option>
                        </select>
                      </div>
                    </div>
                    <div className="gym-print-form-group">
                      <label className="gym-print-label">Pages</label>
                      <div className="position-relative">
                        <select className="gym-print-dropdown">
                          <option>All</option>
                        </select>
                      </div>
                    </div>
                    <div className="gym-print-form-group">
                      <label className="gym-print-label">Layout</label>
                      <div className="position-relative">
                        <select className="gym-print-dropdown">
                          <option>Portrait</option>
                        </select>
                      </div>
                    </div>
                    <div className="gym-print-form-group">
                      <label className="gym-print-label">Color</label>
                      <div className="position-relative">
                        <select className="gym-print-dropdown">
                          <option>Color</option>
                        </select>
                      </div>
                    </div>
                    <div className="gym-print-form-group">
                      <label className="gym-print-label">More settings</label>
                      <div className="position-relative d-flex align-items-center justify-content-between">
                        <span>More settings</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="gym-print-buttons">
                      <button
                        className="gym-print-btn gym-print-btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button className="gym-print-btn gym-print-btn-primary">
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visitors;