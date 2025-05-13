import React from "react";

const Prospect = () => {
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
                All Current Prospects
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
                  All current prospects in the system that have not yet been
                  flagged as not interested or converted to members. Ignores
                  Start and End date filters.
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
                Converted Prospects
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
                  All prospects who have been converted to a member within the
                  specified dates
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
                Finished Prospects
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
                  All prospects who have marked as Not Interested within the
                  specified dates
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
                Prospect Conversion Performance in Period
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
                Report breakdown of prospect source and contact methods, detailing number of prospects and number of new members added for each source/contact method combination in the period.
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
                Prospect Funnel Leavers
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
                Members/Prospects that have left the prospect funnel. Leaving is defined as the moment the member/prospect was set as not interested or moved into the final stage.
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
                Prospects Entered in Period
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
                All prospects who made their first contact during the given period, and have'nt been converted to a member.
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
        </div>
      </div>
    </>
  );
};

export default Prospect;
