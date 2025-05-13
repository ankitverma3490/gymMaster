import React from "react";
import "./Task.css";

const Task = () => {
  return (
    <>
      <div className="container">
        <h4 className="my-3">Task</h4>
        <div className="task-mgmt-container card shadow-sm rounded my-4">
          {/* Action Buttons */}
          <div className="task-mgmt-actions">
            <div className="d-flex flex-wrap justify-content-start gap-2 mb-3">
              <button
                className="btn text-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ backgroundColor: "#337ab7" }}
              >
                <i className="bi bi-plus" /> Add New Task
              </button>
              <button
                className="btn text-white"
                style={{ backgroundColor: "#337ab7" }}
              >
                <i className="bi bi-envelope" /> Send Pending Emails
              </button>
              <button
                className="btn btn-outline-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                <i className="bi bi-check" /> Clear Outstanding Tasks
              </button>
              <button className="btn border btn-light">
                <i className="bi bi-arrow-clockwise" /> Refresh
              </button>
              <button className="btn border btn-light">
                <i className="bi bi-printer" /> Print
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="task-mgmt-filters">
            <div className="row task-mgmt-search-row">
              <div className="col-md-5">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Task Types"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="bi bi-search" /> Search
                  </button>
                </div>
              </div>
              <div className="col-md-3 mt-1">
                <select className="form-select">
                  <option value={0} selected="">
                    All Task Type
                  </option>
                  <option value={506}>70 days since joined</option>
                  <option value={13}>Birthday Greeting</option>
                  <option value={11}>Booking Reminder</option>
                  <option value={17}>Contact 30 days no visit member</option>
                  <option value={2}>Failed Integrated Billing Payment</option>
                  <option value={15}>General Stop at Gate Task</option>
                  <option value={1}>General task</option>
                  <option value={510}>Golf Simulator Welcome</option>
                  <option value={12}>Happiness Drop 10 days</option>
                  <option value={6}>Joining Member Checkup</option>
                  <option value={7}>Joining Member Welcome</option>
                  <option value={503}>Member Coming up Booking Reminder</option>
                  <option value={4}>Member Expiry</option>
                  <option value={501}>Membership Concessions Low</option>
                  <option value={3}>Missed AP Payment</option>
                  <option value={21}>Prospect Booked for Tour</option>
                  <option value={19}>Prospect Contacted Us</option>
                  <option value={24}>Prospect Gone Cold</option>
                  <option value={22}>Prospect No Show</option>
                  <option value={25}>Prospect Reminder</option>
                  <option value={23}>Prospect Toured</option>
                  <option value={20}>Prospect Toured/Walked In</option>
                  <option value={502}>Start Membership Welcome</option>
                  <option value={8}>Suspension Ending</option>
                </select>
              </div>
              <div className="col-md-4 mt-1">
                <select className="form-select">
                  <option value={0}>All Staff</option>
                  <option value={502917}>Aira Fitness</option>
                  <option value={502860}>Aira Fitness Foxlake Staff</option>
                  <option value={503018}>Alexis Donaldson</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-8 d-flex flex-column flex-md-row align-items-center">
                <div className="task-mgmt-date-range d-flex flex-column flex-md-row align-items-center">
                  <input
                    type="date"
                    className="form-control mb-2 mb-md-0"
                    defaultValue="2025-02-28"
                  />
                  <span className="task-mgmt-date-range-text mx-2 mb-2 mb-md-0">
                    to
                  </span>
                  <input
                    type="date"
                    className="form-control mb-2 mb-md-0"
                    defaultValue="2025-04-29"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <select className="form-select">
                  <option>Golf Simulator</option>
                </select>
              </div>
            </div>
            {/* Tabs */}
            <ul className="nav task-mgmt-tabs">
              <li className="nav-item">
                <a
                  className="nav-link task-mgmt-tab active"
                  href="#staff-action"
                  data-bs-toggle="tab"
                >
                  Staff Action
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link task-mgmt-tab"
                  href="#email"
                  data-bs-toggle="tab"
                >
                  Email
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link task-mgmt-tab"
                  href="#sms"
                  data-bs-toggle="tab"
                >
                  SMS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link task-mgmt-tab"
                  href="#manual"
                  data-bs-toggle="tab"
                >
                  Manual
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link task-mgmt-tab"
                  href="#completed"
                  data-bs-toggle="tab"
                >
                  Completed
                </a>
              </li>
            </ul>
          </div>
          {/* Tab Content */}
          <div className="tab-content">
            {/* Staff Action Tab */}
            <div
              className="task-mgmt-tab-content tab-pane fade show active"
              id="staff-action"
            >
              <div className="task-mgmt-table table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="task-mgmt-table-header">
                    <tr>
                      <th>
                        Name{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Task{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Phone{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Staff{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Due{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Description{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Actions{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={7} className="task-mgmt-no-results">
                        No Results Found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Email Tab */}
            <div className="task-mgmt-tab-content tab-pane fade" id="email">
              <div className="task-mgmt-table table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="task-mgmt-table-header">
                    <tr>
                      <th>
                        Name{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Task{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Email{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Staff{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Due{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Description{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Actions{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={7} className="task-mgmt-no-results">
                        No Email Tasks Found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* SMS Tab */}
            <div className="task-mgmt-tab-content tab-pane fade" id="sms">
              <div className="task-mgmt-table table table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="task-mgmt-table-header">
                    <tr>
                      <th>
                        Name{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Task{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Phone{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Staff{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Due{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Description{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Actions{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={7} className="task-mgmt-no-results">
                        No SMS Tasks Found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Manual Tab */}
            <div className="task-mgmt-tab-content tab-pane fade" id="manual">
              <div className="task-mgmt-table table table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="task-mgmt-table-header">
                    <tr>
                      <th>
                        Name{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Task{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Contact Info{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Staff{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Due{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Description{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Actions{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={7} className="task-mgmt-no-results">
                        No Manual Tasks Found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Completed Tab */}
            <div className="task-mgmt-tab-content tab-pane fade" id="completed">
              <div className="task-mgmt-table table table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="task-mgmt-table-header">
                    <tr>
                      <th>
                        Name{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Task{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Phone{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Completed By{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Completed Date{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Description{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                      <th>
                        Actions{" "}
                        <i className="bi bi-arrow-down task-mgmt-sort-icon" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Daniel McGovern</td>
                      <td>Failed Integrated Billing Payment</td>
                      <td>8473703213</td>
                      <td>All Staff</td>
                      <td> Mar 1 2025 9:00 am</td>
                      <td>
                        General. Auto Send Email set to t. - Failed to debit
                        $118.00 when exported dd on Mar 1 2025 (Noted on: Mar 1
                        2025)
                      </td>
                      <td className="text-nowrap">
                        <button className="btn btn-outline-danger me-2">
                          <i className="bi bi-arrow-counterclockwise" />
                        </button>
                        <button className="btn btn-outline-primary">
                          <i className="bi bi-pencil-fill" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Kamus Mattoon</td>
                      <td>Failed Integrated Billing Payment</td>
                      <td>8153559233</td>
                      <td>All Staff</td>
                      <td>Mar 1 2025 9:00 am</td>
                      <td>
                        General. Auto Send Email set to t. - Failed to debit
                        $118.00 when exported dd on Mar 1 2025 (Noted on: Mar 1
                        2025)
                      </td>
                      <td className="text-nowrap">
                        <button className="btn btn-outline-danger me-2">
                          <i className="bi bi-arrow-counterclockwise" />
                        </button>
                        <button className="btn btn-outline-primary">
                          <i className="bi bi-pencil-fill" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Milenna Vargas</td>
                      <td>Failed Integrated Billing Payment</td>
                      <td>2627059016</td>
                      <td>All Staff</td>
                      <td>Mar 1 2025 9:00 am</td>
                      <td>
                        General. Auto Send Email set to t. - Failed to debit
                        $118.00 when exported dd on Mar 1 2025 (Noted on: Mar 1
                        2025)
                      </td>
                      <td className="text-nowrap">
                        <button className="btn btn-outline-danger me-2">
                          <i className="bi bi-arrow-counterclockwise" />
                        </button>
                        <button className="btn btn-outline-primary">
                          <i className="bi bi-pencil-fill" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Daniel McGovern</td>
                      <td>Failed Integrated Billing Payment</td>
                      <td>8473703213</td>
                      <td>All Staff</td>
                      <td> Mar 1 2025 9:00 am</td>
                      <td>
                        General. Auto Send Email set to t. - Failed to debit
                        $118.00 when exported dd on Mar 1 2025 (Noted on: Mar 1
                        2025)
                      </td>
                      <td className="text-nowrap">
                        <button className="btn btn-outline-danger me-2">
                          <i className="bi bi-arrow-counterclockwise" />
                        </button>
                        <button className="btn btn-outline-primary">
                          <i className="bi bi-pencil-fill" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Task-Add
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="row g-3 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Find Member
                      </label>
                    </div>
                    <div className="col mt-4">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Recipient's username"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <span className="input-group-text" id="basic-addon2">
                          Search
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Date Due
                      </label>
                    </div>
                    <div className="col mt-4">
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="row g-3 mt-2 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Task Types
                      </label>
                    </div>
                    <div className="col">
                      <select className="form-control" id="lbx_tasktype_add">
                        <option value={506}>70 days since joined</option>
                        <option value={13}>Birthday Greeting</option>
                        <option value={11}>Booking Reminder</option>
                        <option value={17}>
                          Contact 30 days no visit member
                        </option>
                        <option value={2}>
                          Failed Integrated Billing Payment
                        </option>
                        <option value={15}>General Stop at Gate Task</option>
                        <option value={1}>General task</option>
                        <option value={510}>Golf Simulator Welcome</option>
                        <option value={12}>Happiness Drop 10 days</option>
                        <option value={6}>Joining Member Checkup</option>
                        <option value={7}>Joining Member Welcome</option>
                        <option value={503}>
                          Member Coming up Booking Reminder
                        </option>
                        <option value={4}>Member Expiry</option>
                        <option value={501}>Membership Concessions Low</option>
                        <option value={3}>Missed AP Payment</option>
                        <option value={21}>Prospect Booked for Tour</option>
                        <option value={19}>Prospect Contacted Us</option>
                        <option value={24}>Prospect Gone Cold</option>
                        <option value={22}>Prospect No Show</option>
                        <option value={25}>Prospect Reminder</option>
                        <option value={23}>Prospect Toured</option>
                        <option value={20}>Prospect Toured/Walked In</option>
                        <option value={502}>Start Membership Welcome</option>
                        <option value={8}>Suspension Ending</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3 mt-2 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Task Description
                      </label>
                    </div>
                    <div className="col mt-4">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: 100 }}
                          defaultValue={""}
                        />
                        <label htmlFor="floatingTextarea2">Comments</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-2 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Task Instruction
                      </label>
                    </div>
                    <div className="col">No Task Instructions</div>
                  </div>
                  <div className="row g-3 mt-2 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Prospect Funnel Stage
                      </label>
                    </div>
                    <div className="col">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value={20193622}>Uncontacted</option>
                        <option value={20193623}>Contacted (No Answer)</option>
                        <option value={20193628}>Follow Up</option>
                        <option value={20193624}>Booked APPT</option>
                        <option value={20193625}>No Show</option>
                        <option value={20193626}>SOLD</option>
                        <option value={20193627}>Didn't Buy</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3 mt-2 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        {" "}
                        Staff
                      </label>
                    </div>
                    <div className="col">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value={0} data-l10n-id="task-all-staff">
                          All Staff
                        </option>
                        <option value={502917}>Aira Fitness</option>
                        <option value={502860}>
                          Aira Fitness Foxlake Staff
                        </option>
                        <option value={503018}>Alexis Donaldson</option>
                        <option value={119}>Alex jimenez</option>
                        <option value={502861}>Alex Rivera</option>
                        <option value={160}>Alyssa Kathan</option>
                        <option value={135}>Amber Mitchell</option>
                        <option value={503002}>Amy Phannenstill</option>
                        <option value={502934}>Anabel Alvarez</option>
                        <option value={503011}>Andrew Graff</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light border"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-success">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel1">
                    Clear Outstanding Tasks
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="row g-3 mt-2 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Task Types
                      </label>
                    </div>
                    <div className="col">
                      <select className="form-control" id="lbx_tasktype_add">
                        <option value={506}>70 days since joined</option>
                        <option value={13}>Birthday Greeting</option>
                        <option value={11}>Booking Reminder</option>
                        <option value={17}>
                          Contact 30 days no visit member
                        </option>
                        <option value={2}>
                          Failed Integrated Billing Payment
                        </option>
                        <option value={15}>General Stop at Gate Task</option>
                        <option value={1}>General task</option>
                        <option value={510}>Golf Simulator Welcome</option>
                        <option value={12}>Happiness Drop 10 days</option>
                        <option value={6}>Joining Member Checkup</option>
                        <option value={7}>Joining Member Welcome</option>
                        <option value={503}>
                          Member Coming up Booking Reminder
                        </option>
                        <option value={4}>Member Expiry</option>
                        <option value={501}>Membership Concessions Low</option>
                        <option value={3}>Missed AP Payment</option>
                        <option value={21}>Prospect Booked for Tour</option>
                        <option value={19}>Prospect Contacted Us</option>
                        <option value={24}>Prospect Gone Cold</option>
                        <option value={22}>Prospect No Show</option>
                        <option value={25}>Prospect Reminder</option>
                        <option value={23}>Prospect Toured</option>
                        <option value={20}>Prospect Toured/Walked In</option>
                        <option value={502}>Start Membership Welcome</option>
                        <option value={8}>Suspension Ending</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        {" "}
                        Staff
                      </label>
                    </div>
                    <div className="col">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value={0} data-l10n-id="task-all-staff">
                          All Staff
                        </option>
                        <option value={502917}>Aira Fitness</option>
                        <option value={502860}>
                          Aira Fitness Foxlake Staff
                        </option>
                        <option value={503018}>Alexis Donaldson</option>
                        <option value={119}>Alex jimenez</option>
                        <option value={502861}>Alex Rivera</option>
                        <option value={160}>Alyssa Kathan</option>
                        <option value={135}>Amber Mitchell</option>
                        <option value={503002}>Amy Phannenstill</option>
                        <option value={502934}>Anabel Alvarez</option>
                        <option value={503011}>Andrew Graff</option>
                      </select>
                    </div>
                  </div>
                  <p className="mt-4">
                    There are no outstanding tasks of any type assigned to
                    everyone for the currently logged-in club.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-danger">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
