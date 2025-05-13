import React from "react";
import "./TainerCommission.css";

const TainerCommission = () => {
  return (
    <>
      <div className="golf-container">
        {/* Header Section */}
        <div className="golf-header">
          <h2 className="golf-filters-title">Trainer Commission</h2>
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <button className="btn btn-light border me-2">
                <i className="bi bi-printer" /> Print
              </button>
              <button className="btn btn-light border me-2">CSV (.csv)</button>
            </div>
            <button type="button" className="btn btn-outline-danger">
              Mark All Commissions as Unpaid
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="golf-filters-section mt-4">
          <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-center mb-3 mb-md-0 flex-column flex-md-row">
              <h6
                className="me-3 mb-2 mb-md-0"
                style={{ whiteSpace: "nowrap" }}
              >
                Date Filter
              </h6>
              <div className="d-flex flex-column flex-md-row gap-2 w-100">
                <input
                  type="date"
                  className="form-control golf-date-input mb-2 mb-md-0"
                  defaultValue="2025-03-30"
                />
                <span className="golf-to-label align-self-center mb-2 mb-md-0">
                  to
                </span>
                <input
                  type="date"
                  className="form-control golf-date-input"
                  defaultValue="2025-04-30"
                />
              </div>
            </div>

            <div className="col-12 col-md-6 mt-3 mt-md-0">
              <div className="golf-filter-row">
                <h6 className="me-3" style={{ whiteSpace: "nowrap" }}>
                  Filter by Club
                </h6>
                <div className="golf-filter-control">
                  <select className="form-select">
                    <option>All Clubs</option>
                    {/* Add other club options here */}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="golf-filter-row d-flex justify-content-end mt-3">
            <div className="golf-filter-buttons">
              <button className="btn btn-light border">Reset Filters</button>
            </div>
          </div>
        </div>

        {/* Billing Table */}
        <div className="golf-table-container mt-4">
          <table className="golf-billing-table table table-bordered">
            <thead>
              <tr>
                <th className="golf-sort-icon">PT</th>
                <th className="golf-sort-icon">Member ID</th>
                <th className="golf-sort-icon">Member Name</th>
                <th className="golf-sort-icon">Date of Booking</th>
                <th className="golf-sort-icon">Start Time</th>
                <th className="golf-sort-icon">Service Type</th>
                <th className="golf-sort-icon">Membership</th>
                <th className="golf-sort-icon">Price (per session)</th>
                <th className="golf-sort-icon">Paid?</th>
                <th className="golf-sort-icon">Commission</th>
                <th className="golf-sort-icon">Booking Status</th>
                <th className="golf-sort-icon">Commission Paid?</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TainerCommission;
