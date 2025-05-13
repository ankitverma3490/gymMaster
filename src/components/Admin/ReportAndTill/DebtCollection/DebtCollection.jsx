import React from "react";

const DebtCollection = () => {
  return (
    <>
      <div className="golf-container">
        {/* Header Section */}
        <div className="golf-header">
          <h2 className="golf-filters-title">Filters</h2>
          <div>
            <button className="btn btn-light border">
              <i className="bi bi-printer" /> Print
            </button>
            <button className="btn btn-light border ms-2">CSV (.csv)</button>
          </div>
        </div>
        {/* Filters Section */}
        <div className="golf-filters-section">
          <div className="golf-filter-row">
            <div className="golf-filter-control">
              <select className="form-select">
                <option>Golf Simulator</option>
              </select>
            </div>
            <div className="golf-filter-control golf-time-period d-flex flex-column flex-md-row">
              <input
                type="date"
                className="form-control golf-date-input mb-2 mb-md-0"
                defaultValue="03-30-2025"
              />
              <span className="golf-to-label align-self-center mb-2 mb-md-0">
                to
              </span>
              <input
                type="date"
                className="form-control golf-date-input mb-2 mb-md-0"
                defaultValue="04-30-2025"
              />
            </div>
          </div>
          <div className="golf-filter-row">
            <div className="golf-filter-control">
              <select className="form-select">
                <option>&lt;Filter by Reason&gt;</option>
              </select>
            </div>
            <div className="golf-filter-control">
              <div className="golf-search-group input-group">
                <input
                  type="text"
                  className="form-control golf-search-input"
                  placeholder="Search..."
                />
                <button className="btn btn-outline-secondary golf-search-button">
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
          </div>
          <div className="golf-filter-row d-flex justify-content-between">
            <div className="golf-radio-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="billingFilter"
                  id="failedBilling"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="failedBilling">
                  Failed Billing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="billingFilter"
                  id="allDebtors"
                />
                <label className="form-check-label" htmlFor="allDebtors">
                  All Debtors
                </label>
              </div>
            </div>
            <div className="golf-filter-buttons">
              <button className="btn btn-light border">
                View Filters <i className="bi bi-funnel-fill" />
              </button>
            </div>
          </div>
        </div>
        {/* Billing Table */}
        <div className="golf-table-container">
          <table className="golf-billing-table">
            <thead>
              <tr>
                <th width={30}>
                  <input type="checkbox" className="form-check-input" />
                </th>
                <th className="golf-sort-icon">ID</th>
                <th className="golf-sort-icon">Member</th>
                <th className="golf-sort-icon">Membership</th>
                <th className="golf-sort-icon">Owing</th>
                <th className="golf-sort-icon">Fail Count</th>
                <th className="golf-sort-icon">Last Failure</th>
                <th className="golf-sort-icon">Last Success</th>
                <th className="golf-sort-icon">Last Failure Reason</th>
                <th className="golf-sort-icon">Payment Plan</th>
                <th className="golf-sort-icon">Last Visited</th>
                <th className="golf-sort-icon">Actions</th>
                <th className="golf-sort-icon">Status</th>
                <th className="golf-sort-icon">Phone Number</th>
                <th className="golf-sort-icon">Last Called</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>100021533</td>
                <td>
                  <a href="#" className="golf-member-name">
                    Kamus Mattoon
                  </a>
                </td>
                <td>Membership MULTI-CLUB + Guest Privileges</td>
                <td className="golf-amount">$89.00</td>
                <td className="golf-fail-count">2</td>
                <td>2025-04-08</td>
                <td>Mar 8 2025</td>
                <td>DECLINED</td>
                <td />
                <td>Feb 20 2025</td>
                <td>
                  <div className="golf-action-group">
                    <button className="btn btn-primary btn-sm">
                      <i className="bi bi-alarm" /> Snooze
                    </button>
                    <button className="btn btn-secondary btn-sm mx-2">
                      <i className="bi bi-arrow-repeat" /> Re-bill
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      SMS
                    </button>
                    <button className="btn btn-outline-secondary btn-sm mx-2">
                      Email
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-telephone" />
                    </button>
                  </div>
                </td>
                <td>Current</td>
                <td>8153559123</td>
                <td />
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>100027018</td>
                <td>
                  <a href="#" className="golf-member-name">
                    Daniel McGovern
                  </a>
                </td>
                <td>Membership (MULTI-CLUB)</td>
                <td className="golf-amount">$177.00</td>
                <td className="golf-fail-count">6</td>
                <td>2025-04-08</td>
                <td>Jan 1 2025</td>
                <td>TRAN NOT ALLOWED</td>
                <td />
                <td>Sep 14 2024</td>
                <td>
                  <div className="golf-action-group">
                    <button className="btn btn-primary btn-sm">
                      <i className="bi bi-alarm" /> Snooze
                    </button>
                    <button className="btn btn-secondary btn-sm mx-2">
                      <i className="bi bi-arrow-repeat" /> Re-bill
                    </button>
                    <button className="btn btn-outline-secondary btn-sm mx-2">
                      SMS
                    </button>
                    <button className="btn btn-outline-secondary btn-sm me-2">
                      Email
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-telephone" />
                    </button>
                  </div>
                </td>
                <td>Current+</td>
                <td>8473702456</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DebtCollection;
