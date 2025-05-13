import React from "react";

function PortalReport() {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Member Report </h5>
        <div className="col-md-12">
          <div className="card p-4 bg-light">
            {/* Base Reports on Sign-Up Date */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="baseReportsOnSignUpDate"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="baseReportsOnSignUpDate"
              >
                Base reports on sign-up date
              </label>
              <br />
              <small className="form-text text-muted">
                Select new member report dates to be based on date membership
                sign-up completed, rather than day membership begins.
              </small>
            </div>

            {/* Rejoined Member to Count as Returning Member */}
            <div className="mb-4">
              <label htmlFor="rejoinedMemberPeriod" className="form-label">
                Rejoined member to count as returning member
              </label>
              <div className="d-flex">
                <input
                  type="number"
                  id="rejoinedMemberPeriod"
                  className="form-control me-2"
                  placeholder="Enter number of months"
                  min="1"
                  defaultValue="6"
                />
                <span className="align-self-center">months</span>
              </div>
              <small className="form-text text-muted">
                A member will be considered returning if the length of time
                between their old and new membership is greater than this
                period.
              </small>
            </div>

            {/* Include Shared Members */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="includeSharedMembers"
                defaultChecked={true}
              />
              <label
                className="form-check-label"
                htmlFor="includeSharedMembers"
              >
                Include shared members
              </label>
              <br />
              <small className="form-text text-muted">
                Include shared membership members in member count.
              </small>
            </div>

            {/* $0.00 Memberships are Casual Memberships */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="casualMemberships"
                defaultChecked={false}
              />
              <label className="form-check-label" htmlFor="casualMemberships">
                $0.00 memberships are casual memberships
              </label>
              <br />
              <small className="form-text text-muted">
                These members are excluded from your total member count, and
                reports by default. Useful if you have promotional memberships
                or staff memberships.
              </small>
            </div>

            {/* Aggregate Report Grouping */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="aggregateReportGrouping"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="aggregateReportGrouping"
              >
                Aggregate report grouping
              </label>
              <small className="form-text text-muted">
                Replaces the 'Show Multiple Row' checkbox with a dropdown that
                provides more options for grouping rows on the report.
              </small>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="">
                  <h5 className="mb-4">
                    Types of Memberships that are Counted as Current by Reports
                  </h5>

                  {/* Dropdown for Membership Types */}
                  <div className="mb-4">
                    <label htmlFor="membershipTypes" className="form-label">
                      Define which types of memberships count as members in your
                      reporting system.
                    </label>
                    <select className="form-select" id="membershipTypes">
                      <option value="Open Ended Contract">
                        Open Ended Contract
                      </option>
                      <option value="Renewal Based Contract">
                        Renewal Based Contract
                      </option>
                      <option value="Preset Date Program">
                        Preset Date Program
                      </option>
                    </select>
                    <small className="form-text text-muted">
                      This setting does not affect hidden membership types; they
                      will still not count as members.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortalReport;
