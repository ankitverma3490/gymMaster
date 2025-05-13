import React, { useState, useEffect } from "react";
import "./Billing.css"
import Footer from "../../../Layout/Footer";

const BillingOverview = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("billing-overview");

  // Function to handle tab change
  const handleTabChange = (tabId) => {
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
                  className={`billing-nav-item ${activeTab === "billing-overview" ? "active" : ""}`}
                  onClick={() => handleTabChange("billing-overview")}
                >
                  Billing Overview
                </div>
                <div
                  className={`billing-nav-item ${activeTab === "billing-history" ? "active" : ""}`}
                  onClick={() => handleTabChange("billing-history")}
                >
                  Billing History
                </div>
                <div
                  className={`billing-nav-item ${activeTab === "future-billing" ? "active" : ""}`}
                  onClick={() => handleTabChange("future-billing")}
                >
                  Future Billing
                </div>
              </div>
            </div>
            <div className="col-md-10 card shadow-sm bg-light">
              {/* Billing Overview Tab Content */}
              <div id="billing-overview" className={`billing-tab-content ${activeTab === "billing-overview" ? "active" : ""}`}>
                <div className="row my-4">
                  <div className="col-md-3">
                    <div className="billing-card">
                      <div className="billing-card-title">
                        Awaiting Settlement
                      </div>
                      <div className="billing-amount">$0.00</div>
                      <div className="billing-subtitle">
                        Transactions Waiting Settlement
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="billing-card">
                      <div className="billing-card-title">Last Billing</div>
                      <div className="billing-date">Wed Apr 30</div>
                      <div className="billing-year">2025</div>
                      <div className="billing-subtitle">
                        Date of last billing batch
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="billing-card">
                      <div className="billing-card-title">
                        Outstanding Invoices
                      </div>
                      <div className="billing-count">9</div>
                      <div className="billing-subtitle">
                        Number of invoices not paid
                      </div>
                      <button className="billing-btn">
                        Invoice Outstanding
                      </button>
                      <button className="billing-btn">Assign Credits</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="billing-card">
                      <div className="billing-card-title">Billing Set Up</div>
                      <button className="billing-btn">
                        Billing Credentials
                      </button>
                      <button className="billing-btn">Billing Settings</button>
                      <button className="billing-btn">Billing Providers</button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-4">
                    <div className="billing-card">
                      <div className="billing-card-title">Billing Jobs</div>
                      <button className="billing-btn">Send Billing</button>
                      <button className="billing-btn">Check Billing</button>
                      <button className="billing-btn">Process Nightrun</button>
                    </div>
                  </div>
                  <div className="col-md-9 d-flex justify-content-end align-items-end mb-4">
                    <a href="#" className="billing-page-link">
                      Old billing page <i className="billing-refresh-icon">↻</i>
                    </a>
                  </div>
                </div>
              </div>
              {/* Billing History Tab Content */}
              <div id="billing-history" className={`billing-tab-content ${activeTab === "billing-history" ? "active" : ""}`}>
                <div className="billing-container">
                  {/* Filters Row */}
                  <div className="row billing-filters-row">
                    <div className="col-md-2">
                      <select className="billing-dropdown">
                        <option>Golf Simulator</option>
                        <option>All Clubs</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group flex-nowrap me-5">
                        <input
                          type="date"
                          className="billing-date-input"
                          defaultValue="2024-04-30"
                        />
                        <span className="billing-date-label">to</span>
                        <input
                          type="date"
                          className="billing-date-input"
                          defaultValue="2025-04-30"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 d-flex">
                      <div className="d-flex justify-content-end ">
                        <button
                          className="billing-button me-2 ms-5"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Send Billing
                        </button>
                        <button
                          className="billing-button me-2"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Check Billing
                        </button>
                        <button
                          className="billing-button"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Process Nightrun
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* View Options */}
                  <div className="billing-view-options d-flex justify-content-between align-items-center">
                    <div className="d-flex my-2">
                      <div className="billing-radio-container">
                        <input
                          type="radio"
                          id="batchView"
                          name="viewType"
                          className="billing-radio"
                          defaultChecked
                        />
                        <label htmlFor="batchView">Batch View</label>
                      </div>
                      <div className="billing-radio-container">
                        <input
                          type="radio"
                          id="settlementView"
                          name="viewType"
                          className="billing-radio"
                        />
                        <label htmlFor="settlementView">Settlement View</label>
                      </div>
                    </div>
                    <button className="btn btn-light border">
                      <i className="bi bi-printer-fill" />
                    </button>
                  </div>
                  {/* Data Table */}
                  <div className="table-responsive">
                    <table className="billing-table">
                      <thead>
                        <tr>
                          <th>
                            Date <span className="billing-sort-icon" />
                          </th>
                          <th>
                            Format <span className="billing-sort-icon" />
                          </th>
                          <th>
                            Club <span className="billing-sort-icon" />
                          </th>
                          <th>Members</th>
                          <th>Fails</th>
                          <th>Settled</th>
                          <th>Processing</th>
                          <th>Failed</th>
                          <th>Dishonor</th>
                          <th>Manual Batch</th>
                          <th>Created By</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#" className="billing-date-link">
                              Apr 26 2025 7:59 pm
                            </a>
                          </td>
                          <td>Clover Connect</td>
                          <td>Golf Simulator</td>
                          <td>1</td>
                          <td>0</td>
                          <td>$32.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>
                            <input
                              type="checkbox"
                              className="billing-checkbox"
                              defaultChecked
                              disabled
                            />
                          </td>
                          <td>airafitness</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="billing-date-link">
                              Apr 8 2025 2:20 am
                            </a>
                          </td>
                          <td>Clover Connect</td>
                          <td>Golf Simulator</td>
                          <td>2</td>
                          <td>2</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>$266.00</td>
                          <td>$0.00</td>
                          <td>
                            <input
                              type="checkbox"
                              className="billing-checkbox"
                            />
                          </td>
                          <td>airafitness</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="billing-date-link">
                              Apr 3 2025 4:35 pm
                            </a>
                          </td>
                          <td>Clover Connect</td>
                          <td>Golf Simulator</td>
                          <td>1</td>
                          <td>0</td>
                          <td>$48.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>
                            <input
                              type="checkbox"
                              className="billing-checkbox"
                              defaultChecked
                              disabled
                            />
                          </td>
                          <td>airafitness</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="billing-date-link">
                              Apr 2 2025 11:15 am
                            </a>
                          </td>
                          <td>Clover Connect</td>
                          <td>Golf Simulator</td>
                          <td>1</td>
                          <td>0</td>
                          <td>$16.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>
                            <input
                              type="checkbox"
                              className="billing-checkbox"
                              defaultChecked
                              disabled
                            />
                          </td>
                          <td>airafitness</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="billing-date-link">
                              Apr 2 2025 11:14 am
                            </a>
                          </td>
                          <td>Clover Connect</td>
                          <td>Golf Simulator</td>
                          <td>1</td>
                          <td>0</td>
                          <td>$16.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>
                            <input
                              type="checkbox"
                              className="billing-checkbox"
                              defaultChecked
                              disabled
                            />
                          </td>
                          <td>airafitness</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="billing-date-link">
                              Apr 2 2025 11:14 am
                            </a>
                          </td>
                          <td>Clover Connect</td>
                          <td>Golf Simulator</td>
                          <td>1</td>
                          <td>0</td>
                          <td>$16.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>
                            <input
                              type="checkbox"
                              className="billing-checkbox"
                              defaultChecked
                              disabled
                            />
                          </td>
                          <td>airafitness</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="billing-date-link">
                              Apr 1 2025 2:36 am
                            </a>
                          </td>
                          <td>Clover Connect</td>
                          <td>Golf Simulator</td>
                          <td>20</td>
                          <td>3</td>
                          <td>$1,561.00</td>
                          <td>$0.00</td>
                          <td>$325.00</td>
                          <td>$0.00</td>
                          <td>
                            <input
                              type="checkbox"
                              className="billing-checkbox"
                            />
                          </td>
                          <td>airafitness</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="billing-date-link">
                              Mar 31 2025 9:38 pm
                            </a>
                          </td>
                          <td>Clover Connect</td>
                          <td>Golf Simulator</td>
                          <td>1</td>
                          <td>0</td>
                          <td>$32.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>
                            <input
                              type="checkbox"
                              className="billing-checkbox"
                              defaultChecked
                              disabled
                            />
                          </td>
                          <td>airafitness</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="billing-date-link">
                              Mar 22 2025 11:18 am
                            </a>
                          </td>
                          <td>Clover Connect</td>
                          <td>Golf Simulator</td>
                          <td>1</td>
                          <td>0</td>
                          <td>$64.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>
                            <input
                              type="checkbox"
                              className="billing-checkbox"
                              defaultChecked
                              disabled
                            />
                          </td>
                          <td>airafitness</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="billing-date-link">
                              Mar 18 2025 10:03 pm
                            </a>
                          </td>
                          <td>Clover Connect</td>
                          <td>Golf Simulator</td>
                          <td>1</td>
                          <td>0</td>
                          <td>$64.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>$0.00</td>
                          <td>
                            <input
                              type="checkbox"
                              className="billing-checkbox"
                              defaultChecked
                              disabled
                            />
                          </td>
                          <td>airafitness</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Pagination */}
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <a href="#" className="billing-page-link">
                        Previous
                      </a>
                      <a href="#" className="billing-page-link active">
                        1
                      </a>
                      <a href="#" className="billing-page-link">
                        2
                      </a>
                      <a href="#" className="billing-page-link">
                        3
                      </a>
                      <a href="#" className="billing-page-link">
                        4
                      </a>
                      <a href="#" className="billing-page-link">
                        5
                      </a>
                      <span className="billing-page-link">...</span>
                      <a href="#" className="billing-page-link">
                        16
                      </a>
                      <a href="#" className="billing-page-link">
                        Next
                      </a>
                    </div>
                    <div className="billing-display-options mt-3">
                      <span className="billing-display-label">
                        Display Result :
                      </span>
                      <a
                        href="#"
                        className="billing-page-link billing-display-item"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        className="billing-page-link billing-display-item"
                      >
                        20
                      </a>
                      <a
                        href="#"
                        className="billing-page-link billing-display-item"
                      >
                        50
                      </a>
                      <a
                        href="#"
                        className="billing-page-link billing-display-item"
                      >
                        100
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Future Billing Tab Content */}
              <div id="future-billing" className={`billing-tab-content ${activeTab === "future-billing" ? "active" : ""}`}>
                {/* Filters Row */}
                <div className="row billing-filters-row my-4">
                  <div className="col-md-3">
                    <select className="billing-dropdown">
                      <option>Golf Simulator</option>
                      <option>All Clubs</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="billing-dropdown">
                      <option>2 Weeks</option>
                      <option>1 Month</option>
                      <option>2 Months</option>
                      <option>3 Months</option>
                      <option>6 Months</option>
                    </select>
                  </div>
                  <div className="col-md-5 d-flex">
                    <div className="d-flex justify-content-end ">
                      <button
                        className="billing-button me-2 ms-5"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        Show Results
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
};

export default BillingOverview;