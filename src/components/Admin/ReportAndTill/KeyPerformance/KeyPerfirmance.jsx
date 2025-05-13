import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const KeyPerfirmance = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Member Statistics" },
    { id: "tab2", label: "Member Activity" },
    { id: "tab3", label: "Membership Activity" },
    { id: "tab4", label: "Sales Made" },
    { id: "tab5", label: "Payments Received" },
    { id: "tab6", label: "Booking Summary" },
    { id: "tab7", label: "Class Attendance" },
  ];

  const switchTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="container mt-4">
        {/* Tabs */}
        <ul className="nav nav-tabs mb-3 sticky-top bg-white shadow-sm p-2 rounded" style={{zIndex: "auto"}}>
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.id}>
              <a
                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                href={`#${tab.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  switchTab(tab.id);
                }}
                style={{
                  backgroundColor: activeTab === tab.id ? "#0056b3" : "",
                  color: activeTab === tab.id ? "#fff" : "#333",
                  fontWeight: activeTab === tab.id ? "bold" : "normal",
                }}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
        <div class="top-controls">
          <div class="d-flex flex-wrap justify-content-between mb-3">
            <div class="date-range-buttons">
              <label class="form-label d-block">Select A Date Range</label>
              <div class="d-flex flex-wrap gap-2">
                <button class="btn btn-primary btn-sm">Today</button>
                <button class="btn btn-outline-secondary btn-sm">
                  Last 7 Days
                </button>
                <button class="btn btn-outline-secondary btn-sm">
                  Month To Date
                </button>
                <button class="btn btn-outline-secondary btn-sm">
                  Last Month
                </button>
                <button class="btn btn-outline-secondary btn-sm">
                  Last 3 Months
                </button>
                <button class="btn btn-outline-secondary btn-sm">
                  Last 6 Months
                </button>
                <button class="btn btn-outline-secondary btn-sm">
                  This Year
                </button>
              </div>
            </div>

            <div class="btn-export-group mt-3 mt-md-0">
              <button class="btn btn-outline-secondary me-2">
                <i class="bi bi-printer"></i> Print
              </button>
              <div class="btn-group">
                <button
                  class="btn btn-outline-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Export
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      CSV
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      PDF
                    </a>
                  </li>
                </ul>
              </div>
              <button class="btn btn-primary ms-2">Tax Breakdown</button>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6 d-flex">
              <input type="text" class="form-control me-2" value="05-01-2025" />
              <span class="align-self-center me-2">to</span>
              <input type="text" class="form-control" value="05-01-2025" />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <select class="form-select mb-2">
                <option>All</option>
                <option>Option 1</option>
              </select>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" checked />
                <label class="form-check-label">Group Transactions</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" checked />
                <label class="form-check-label">
                  Show Financial Adjustments
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">Compare</label>
              </div>
            </div>
          </div>

          <button class="btn btn-primary mt-3">Run</button>
        </div>
        {/* Tab Content */}
        <div
          id="tab1"
          className={`data-box ${activeTab === "tab1" ? "" : "d-none"}`}
        >
          <h5>Member Statistics</h5>
          <p className="text-muted">As At: May 01 2025</p>
          <table className="table table-bordered member-stats-table">
            <thead className="table-light">
              <tr>
                <th>Categories</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Current members</td>
                <td>20 members</td>
              </tr>
              <tr>
                <td>Happy members</td>
                <td>7 members</td>
              </tr>
              <tr>
                <td>Satisfied members</td>
                <td>2 members</td>
              </tr>
              <tr>
                <td>Sad members (excludes members on hold)</td>
                <td>12 members</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          id="tab2"
          className={`data-box ${activeTab === "tab2" ? "" : "d-none"}`}
        >
          <h5>Member Activity</h5>
          <table className="table table-bordered member-stats-table">
            <thead className="table-light">
              <tr>
                <th>Categories</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Current members</td>
                <td>20 members</td>
              </tr>
              <tr>
                <td>Happy members</td>
                <td>7 members</td>
              </tr>
              <tr>
                <td>Satisfied members</td>
                <td>2 members</td>
              </tr>
              <tr>
                <td>Sad members (excludes members on hold)</td>
                <td>12 members</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Repeat for other tabs */}
        <div
          id="tab3"
          className={`data-box ${activeTab === "tab3" ? "" : "d-none"}`}
        >
          <h5>Membership Activity</h5>
          <table className="table table-bordered member-stats-table">
            <thead className="table-light">
              <tr>
                <th>Categories</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Current members</td>
                <td>20 members</td>
              </tr>
              <tr>
                <td>Happy members</td>
                <td>7 members</td>
              </tr>
              <tr>
                <td>Satisfied members</td>
                <td>2 members</td>
              </tr>
              <tr>
                <td>Sad members (excludes members on hold)</td>
                <td>12 members</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          id="tab4"
          className={`data-box mt-3 ${activeTab === "tab4" ? "" : "d-none"}`}
        >
          <h5>Sales Made</h5>
          <table className="table table-bordered member-stats-table">
            <thead className="table-light">
              <tr>
                <th>Categories</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Current members</td>
                <td>20 members</td>
              </tr>
              <tr>
                <td>Happy members</td>
                <td>7 members</td>
              </tr>
              <tr>
                <td>Satisfied members</td>
                <td>2 members</td>
              </tr>
              <tr>
                <td>Sad members (excludes members on hold)</td>
                <td>12 members</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          id="tab5"
          className={`data-box mt-3 ${activeTab === "tab5" ? "" : "d-none"}`}
        >
          <h5>Payment Received</h5>
          <table className="table table-bordered member-stats-table">
            <thead className="table-light">
              <tr>
                <th>Categories</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Current members</td>
                <td>20 members</td>
              </tr>
              <tr>
                <td>Happy members</td>
                <td>7 members</td>
              </tr>
              <tr>
                <td>Satisfied members</td>
                <td>2 members</td>
              </tr>
              <tr>
                <td>Sad members (excludes members on hold)</td>
                <td>12 members</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          id="tab6"
          className={`data-box mt-3 ${activeTab === "tab6" ? "" : "d-none"}`}
        >
          <h5>Booking Summary</h5>
          <table className="table table-bordered member-stats-table">
            <thead className="table-light">
              <tr>
                <th>Categories</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Current members</td>
                <td>20 members</td>
              </tr>
              <tr>
                <td>Happy members</td>
                <td>7 members</td>
              </tr>
              <tr>
                <td>Satisfied members</td>
                <td>2 members</td>
              </tr>
              <tr>
                <td>Sad members (excludes members on hold)</td>
                <td>12 members</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          id="tab7"
          className={`data-box mt-3 ${activeTab === "tab7" ? "" : "d-none"}`}
        >
          <h5>Class Attendance</h5>
          <table className="table table-bordered member-stats-table">
            <thead className="table-light">
              <tr>
                <th>Categories</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Current members</td>
                <td>20 members</td>
              </tr>
              <tr>
                <td>Happy members</td>
                <td>7 members</td>
              </tr>
              <tr>
                <td>Satisfied members</td>
                <td>2 members</td>
              </tr>
              <tr>
                <td>Sad members (excludes members on hold)</td>
                <td>12 members</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Repeat this for all the tabs */}
      </div>
    </>
  );
};

export default KeyPerfirmance;
