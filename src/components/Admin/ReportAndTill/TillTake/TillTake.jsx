import React from "react";
import "./TillTake.css";
import Footer from "../../../Layout/Footer";

const TillTake = () => {
  return (
    <>
      <div className="golf-container">
        {/* Report Action Buttons */}
        <div className="golf-report-buttons d-flex flex-column flex-md-row mb-4">
          <button
            className="btn text-white mb-2 mb-md-0"
            style={{ backgroundColor: "#337ab7" }}
          >
            Preview Shift Report (X)
          </button>
          <button
            className="btn text-white mb-2 mb-md-0 ms-md-2"
            style={{ backgroundColor: "#337ab7" }}
          >
            Preview End of Day Report (Z)
          </button>
          <button
            className="btn text-white mb-2 mb-md-0 ms-md-2"
            style={{ backgroundColor: "#337ab7" }}
          >
            Previous Shift Reports
          </button>
          <button className="btn btn-light border mb-2 mb-md-0 ms-md-2">
            CSV (.csv)
          </button>
          <button className="btn btn-light border mb-2 mb-md-0 ms-md-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-printer"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
              <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
            </svg>
            Print
          </button>
        </div>

        {/* Filters Section */}
        <div className="golf-filters-section card shadow-sm mb-4">
          <div className="golf-filter-row row mb-3">
            <div className="col-12 col-md-6 d-flex align-items-center mb-3 mb-md-0 flex-column flex-md-row">
              <div className="golf-filter-label me-3 mb-2 mb-md-0">
                Time Period
              </div>
              <div className="d-flex gap-2 flex-column flex-md-row">
                <input
                  type="date"
                  className="form-control golf-date-input"
                  defaultValue="04-30-2025 12:00 am"
                />
                <span className="golf-to-label align-self-center">to</span>
                <input
                  type="date"
                  className="form-control golf-date-input"
                  defaultValue="04-30-2025 11:59 pm"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center flex-column flex-md-row">
              <div className="golf-filter-label me-3 mb-2 mb-md-0">
                Received in Period
              </div>
              <input type="text" className="form-control w-auto" />
            </div>
          </div>

          {/* Staff and Club Filters */}
          <div className="golf-filter-row row mb-3">
            <div className="col-12 col-md-6">
              <div className="golf-filter-label">Staff</div>
              <div className="golf-filter-control">
                <select className="form-select">
                  <option>All Staff</option>
                  <option>Aira Fitness</option>
                  <option>Aira Fitness Foxlake Staff</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="golf-filter-label">Club Filter</div>
              <div className="golf-filter-control">
                <select className="form-select">
                  <option>Golf Simulator</option>
                </select>
              </div>
            </div>
          </div>

          {/* Checkbox Section */}
          <div className="golf-checkbox-section row mb-3">
            <div className="col-12 col-md-6">
              <div className="form-check d-flex justify-content-between">
                <label className="form-check-label" htmlFor="chargeToMember">
                  Include Charge to Member
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="chargeToMember"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-check d-flex justify-content-between">
                <label className="form-check-label" htmlFor="chargeToMember">
                  Include Billing Transactions
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="chargeToMember"
                />
              </div>
            </div>
          </div>

          {/* Reset Filters Button */}
          <div className="golf-filter-row d-flex justify-content-end">
            <button className="btn btn-light border">Reset Filters</button>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="golf-table-container">
          <table className="golf-transaction-table table-bordered w-100">
            <thead>
              <tr>
                <th>Club</th>
                <th>Date</th>
                <th>Time</th>
                <th>Sale</th>
                <th>Received</th>
                <th>Method</th>
                <th>Member</th>
                <th>Sale Description</th>
                <th>Sale Staff</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="golf-no-transactions">
                  No Transactions Reported
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TillTake;
