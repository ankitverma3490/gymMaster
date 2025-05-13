import React from "react";
import "./Roster.css"

const RosterAndOpenHoures = () => {
  return (
    <>
      <div className="container py-4">
        <div className="roster-box">
          <h4 className="mb-3">Roster and Open Hours</h4>
          <div className="select-club-container">
            <div>
              <label htmlFor="clubSelect" className="form-label">
                Select clubs
              </label>
              <select id="clubSelect" className="form-select form-select-sm">
                <option selected="">Golf Simulator</option>
                <option>Fitness Center</option>
                <option>Pool Area</option>
              </select>
            </div>
            <div className="ms-auto">
              {/* Add Roster Button */}
              <button
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#addRosterModal"
              >
                <i className="fa fa-plus" /> Add
              </button>
              <button className="btn btn-success btn-sm">Save</button>
            </div>
          </div>
          <small className="text-muted d-block mb-3">
            (0:00 am denotes midnight at the beginning of the day and 12:00 am
            denotes midnight at the end of the day)
          </small>
          <div className="table-responsive">
          <table className="table table-bordered align-middle text-center">
            <thead>
              <tr>
                <th>Roster</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Open Hours <br />
                  <button className="btn btn-sm">
                    <i className="fa fa-trash" />
                  </button>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>0:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>0:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>0:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>0:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>0:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>0:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>0:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Date Range:</td>
                <td colSpan={7}>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      className="form-control form-control-sm w-auto me-2"
                      placeholder="Start Date"
                    />
                    to
                    <input
                      type="text"
                      className="form-control form-control-sm w-auto ms-2"
                      placeholder="End Date"
                    />
                    <button className="btn btn-sm btn-outline-primary ms-3">
                      <i className="fa fa-copy" />
                    </button>
                    <button className="btn btn-sm btn-outline-primary ms-1">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* Repeat for Off Peak */}
              <tr>
                <td>
                  Off Peak <br />
                  <button className="btn btn-sm">
                    <i className="fa fa-trash" />
                  </button>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>1:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>1:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>1:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>1:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>1:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>1:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
                <td>
                  <select className="form-select form-select-sm mb-1">
                    <option>1:00 am</option>
                  </select>
                  <select className="form-select form-select-sm">
                    <option>12:00</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Date Range:</td>
                <td colSpan={7}>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      className="form-control form-control-sm w-auto me-2"
                      placeholder="Start Date"
                    />
                    to
                    <input
                      type="text"
                      className="form-control form-control-sm w-auto ms-2"
                      placeholder="End Date"
                    />
                    <button className="btn btn-sm btn-outline-primary ms-3">
                      <i className="fa fa-copy" />
                    </button>
                    <button className="btn btn-sm btn-outline-primary ms-1">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        {/* Add Roster Modal */}
        <div
          className="modal fade"
          id="addRosterModal"
          tabIndex={-1}
          aria-labelledby="addRosterModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addRosterModalLabel">
                  Add Roster
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="rosterForm">
                  <div className="mb-3">
                    <label htmlFor="rosterName" className="form-label">
                      Roster Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="rosterName"
                      placeholder="Enter roster name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rosterType" className="form-label">
                      Roster Type
                    </label>
                    <select className="form-select" id="rosterType">
                      <option value="door" selected="">
                        Door
                      </option>
                      <option value="facility">Facility</option>
                    </select>
                  </div>
                  <p className="text-muted mb-0">
                    <strong>Door:</strong> For defining hours of access through
                    your doors for your Members.
                    <br />
                    <strong>Settings &gt; Membership Types</strong>
                  </p>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-success">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RosterAndOpenHoures;
