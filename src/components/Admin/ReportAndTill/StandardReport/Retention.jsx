import React from "react";

const Retention = () => {
  return (
    <>
      <h4 className="my-4">Reports</h4>
      <div className="row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Reports"
              aria-label="Search Reports"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              Search
            </span>
          </div>
        </div>
        <div className="col-md-4 text-end">
          <button type="button" className="btn btn-light border">
            <i className="bi bi-star" />
          </button>
          <button type="button" className="btn btn-light border">
            <i className="bi bi-suit-heart" />
          </button>
        </div>
      </div>
      <div className="mb-4">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Actions Taken
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>
                All actions that occurred during the given period.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-light me-2 border">
                  This Year
                </button>
                <div className="row my-4">
                  <div className="col-md-6">
                    <h6 className="my-2">Paid Through</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={0}>All</option>
                      <option value={1}>Bank</option>
                      <option value={2}>Gym</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Payment Methods</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="">All</option>
                      <option value={1}>Cash</option>
                      <option value={2}>Eftpos</option>
                      <option value={3}>Charge to Member</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                All Completed Task
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>
                Tasks that have been finished during the given period.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-light me-2 border">
                  This Year
                </button>
                <div className="row my-4">
                  <div className="col-md-6">
                    <h6 className="my-2">Sale Type</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={0}>All</option>
                      <option value={1}>Billing</option>
                      <option value={2}>Booking</option>
                      <option value={3}>Credit Note</option>
                      <option value={4}>Dishonour Fee</option>
                      <option value={5}>Membership</option>
                      <option value={6}>Product Sale</option>
                      <option value={7}>Shared Membership</option>
                      <option value={8}>Signup</option>
                      <option value={9}>Upfront</option>
                      <option value={10}>Visit</option>
                      <option value={11}>Void</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Adjusted</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="false" selected="selected">
                        Show Original Amounts
                      </option>
                      <option value="true">Show Adjusted Amounts</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                All Outstanding Task
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>
                Incomplete tasks that started during the given period.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-light me-2 border">
                  This Year
                </button>
                <div className="row my-4">
                  <div className="col-md-12">
                    <h6 className="my-2">Display Mode</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        value="ALL"
                        data-l10n-id="report-list-all-memberships"
                      >
                        All Memberships
                      </option>
                      <option
                        value="CURRENT"
                        data-l10n-id="report-list-current-memberships"
                        selected="selected"
                      >
                        Members (exclude Hidden Memberships)
                      </option>
                      <option
                        value="CASUAL"
                        data-l10n-id="report-list-casual-memberships-only"
                      >
                        Hidden Memberships Only
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFourth">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFourth"
                aria-expanded="false"
                aria-controls="flush-collapseFourth"
              >
                All Worked On Task
              </button>
            </h2>
            <div
              id="flush-collapseFourth"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFourth"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>
                Tasks that have been worked on during the given period.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-light me-2 border">
                  This Year
                </button>
                <div className="row my-4">
                  <div className="col-md-12">
                    <h6 className="my-2">Display Mode</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        value="ALL"
                        data-l10n-id="report-list-all-memberships"
                      >
                        All Memberships
                      </option>
                      <option
                        value="CURRENT"
                        data-l10n-id="report-list-current-memberships"
                        selected="selected"
                      >
                        Members (exclude Hidden Memberships)
                      </option>
                      <option
                        value="CASUAL"
                        data-l10n-id="report-list-casual-memberships-only"
                      >
                        Hidden Memberships Only
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFiveth">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFiveth"
                aria-expanded="false"
                aria-controls="flush-collapseFiveth"
              >
                All Worked On Task
              </button>
            </h2>
            <div
              id="flush-collapseFiveth"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFiveth"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>
                Tasks that have been worked on during the given period.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-light me-2 border">
                  This Year
                </button>
                <div className="row my-4">
                  <div className="col-md-6">
                    <h6 className="my-2">Category</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={0} selected="selected">
                        All Categories
                      </option>
                      <option value={1}>Gym Membership</option>
                      <option value={10}>Import Memberships</option>
                      <option value={16}>Golf Simulator</option>
                      <option value={13}>HOPE FITNESS</option>
                      <option value={14}>
                        Online Sign Up- Private Studio{" "}
                      </option>
                      <option value={8}>ONLINE TRAINING</option>
                      <option value={12}>
                        Private Studio Prices For Regular Gyms
                      </option>
                      <option value={6}>Training</option>
                      <option value={7}>YOGA</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Membership Type</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={0} selected="selected">
                        All Membership Types
                      </option>
                      <option value={1}>10x Month</option>
                      <option value={10}>
                        12 Month Personal Training Program (12 sessions)
                      </option>
                      <option value={16}>
                        12 Month Personal Training Program (12 sessions){" "}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSixth">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSixth"
                aria-expanded="false"
                aria-controls="flush-collapseSixth"
              >
                Communication Sent
              </button>
            </h2>
            <div
              id="flush-collapseSixth"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSixth"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>
                All SMS and emails that have been sent during the given period. Types available: 1 - Email, 2 - SMS, 3 - Note, 4 - Call, 5 - System, 6 - File, 7 - Notification.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-light me-2 border">
                  This Year
                </button>
                <div className="row my-4">
                  <div className="col-md-6">
                    <h6 className="my-2">Display Mode</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        value="ALL"
                        data-l10n-id="report-list-all-memberships"
                      >
                        All Memberships
                      </option>
                      <option
                        value="CURRENT"
                        data-l10n-id="report-list-current-memberships"
                        selected="selected"
                      >
                        Members (exclude Hidden Memberships)
                      </option>
                      <option
                        value="CASUAL"
                        data-l10n-id="report-list-casual-memberships-only"
                      >
                        Hidden Memberships Only
                      </option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Category</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={0} selected="selected">
                        All Categories
                      </option>
                      <option value={1}>Gym Membership</option>
                      <option value={10}>Import Memberships</option>
                      <option value={16}>Golf Simulator</option>
                      <option value={13}>HOPE FITNESS</option>
                      <option value={14}>
                        Online Sign Up- Private Studio{" "}
                      </option>
                      <option value={8}>ONLINE TRAINING</option>
                      <option value={12}>
                        Private Studio Prices For Regular Gyms
                      </option>
                      <option value={6}>Training</option>
                      <option value={7}>YOGA</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Membership Type</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={0} selected="selected">
                        All Membership Types
                      </option>
                      <option value={1}>10x Month</option>
                      <option value={10}>
                        12 Month Personal Training Program (12 sessions)
                      </option>
                      <option value={16}>
                        12 Month Personal Training Program (12 sessions){" "}
                      </option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Renewed Member</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={0} selected="selected">
                        All members
                      </option>
                      <option value={1}>Renewed</option>
                      <option value={2}>Not Renewed</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSeventh">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSeventh"
                aria-expanded="false"
                aria-controls="flush-collapseSeventh"
              >
                Communication Summary by Sender
              </button>
            </h2>
            <div
              id="flush-collapseSeventh"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSeventh"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p className="mb-4">
                Open rate and bounce summaries for bulk messages grouped by sender and subject for all communications within the date range
                </p>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingEighth">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseEighth"
                aria-expanded="false"
                aria-controls="flush-collapseEighth"
              >
                Communication Summary by Time Sent
              </button>
            </h2>
            <div
              id="flush-collapseEighth"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingEighth"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>
                Open rate and bounce summaries for bulk messages grouped by subject and time sent.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-light me-2 border mb-4"
                >
                  This Year
                </button>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingNinth">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseNinth"
                aria-expanded="false"
                aria-controls="flush-collapseNinth"
              >
                Duplicate Members
              </button>
            </h2>
            <div
              id="flush-collapseNinth"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingNinth"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>Members with matching names, cell phone numbers or email addresses</p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-light me-2 border">
                  This Year
                </button>
                <div className="row my-4">
                  <div className="col-md-6">
                    <h6 className="my-2">Category</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={0} selected="selected">
                        All Categories
                      </option>
                      <option value={1}>Gym Membership</option>
                      <option value={10}>Import Memberships</option>
                      <option value={16}>Golf Simulator</option>
                      <option value={13}>HOPE FITNESS</option>
                      <option value={14}>
                        Online Sign Up- Private Studio{" "}
                      </option>
                      <option value={8}>ONLINE TRAINING</option>
                      <option value={12}>
                        Private Studio Prices For Regular Gyms
                      </option>
                      <option value={6}>Training</option>
                      <option value={7}>YOGA</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Membership Type</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={0} selected="selected">
                        All Membership Types
                      </option>
                      <option value={1}>10x Month</option>
                      <option value={10}>
                        12 Month Personal Training Program (12 sessions)
                      </option>
                      <option value={16}>
                        12 Month Personal Training Program (12 sessions){" "}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTenth">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTenth"
                aria-expanded="false"
                aria-controls="flush-collapseTenth"
              >
                Evacuation List
              </button>
            </h2>
            <div
              id="flush-collapseTenth"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTenth"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>
                A List of all members and staff that have checked in during the last 4 hours. The Evacuation Status column attempts to predict each persons presence in the facility. Start date, end date are ignored. Evacuation Status: Staff: No status is given for staff Present: The member has checked in within the last 2 hours and has not checked out Gone (Predicted): The member checked in over 2 hours ago Gone (Confirmed): The member has checked out * * Only available for facilities that utilise exit-readers
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-light me-2 border">
                  This Year
                </button>
                <div className="row my-4">
                  <div className="col-md-12">
                    <h6 className="my-2">Display Mode</h6>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        value="ALL"
                        data-l10n-id="report-list-all-memberships"
                      >
                        All Memberships
                      </option>
                      <option
                        value="CURRENT"
                        data-l10n-id="report-list-current-memberships"
                        selected="selected"
                      >
                        Members (exclude Hidden Memberships)
                      </option>
                      <option
                        value="CASUAL"
                        data-l10n-id="report-list-casual-memberships-only"
                      >
                        Hidden Memberships Only
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingEleventh">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseEleventh"
                aria-expanded="false"
                aria-controls="flush-collapseEleventh"
              >
                Historic Members
              </button>
            </h2>
            <div
              id="flush-collapseEleventh"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingEleventh"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>
                All members that held a membership at one point in their lifetime, but no longer have any active today
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-light me-2 mb-4 border"
                >
                  This Year
                </button>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwelveth">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwelveth"
                aria-expanded="false"
                aria-controls="flush-collapseTwelveth"
              >
                Member Awards
              </button>
            </h2>
            <div
              id="flush-collapseTwelveth"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwelveth"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <p>
                Awards earned by your members within the given date range
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="my-2">Select A Date Range</h6>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      Today
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last 7 Days
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Month To Date
                    </button>
                    <button type="button" className="btn btn-light me-2 border">
                      Last Month
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6 className="my-2">Date</h6>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                      <span className="input-group-text">to</span>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date"
                        aria-label="date"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-light me-2 mb-4 border"
                >
                  This Year
                </button>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Notify Me Once Completed
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-light me-2 border">
                      <i className="bi bi-pencil-fill" /> Edit Report
                    </button>
                    <button
                      type="button"
                      className="btn text-white me-2 border"
                      style={{ backgroundColor: "#337ab7" }}
                    >
                      <i className="bi bi-eye-fill" /> Show Report
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-star-fill" />
                    </button>
                    <button type="button" className="btn btn-light border">
                      <i className="bi bi-suit-heart" />
                    </button>
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

export default Retention;
