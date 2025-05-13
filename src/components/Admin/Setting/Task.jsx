import React from "react";

function Task() {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Tasks </h5>
        <div className="col-lg-12">
          <div className="card p-4 bg-light">
            {/* Customize Task Hours */}
            <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="customizeTaskHours"
                />
                <label
                  className="form-check-label"
                  htmlFor="customizeTaskHours"
                >
                  Customize task hours
                </label>
              </div>
              <small className="form-text text-muted">
                Option to enable customized hours for when automated tasks
                communications (email, SMS) are sent and actions are performed
                (label changes, awards granting). If disabled, tasks will send
                communications and perform actions 24/7.
              </small>
            </div>

            {/* Task Hours Start */}
            <div className="mb-4">
              <label htmlFor="taskHoursStart" className="form-label">
                Task hours start
              </label>
              <input
                type="time"
                className="form-control"
                id="taskHoursStart"
                defaultValue="09:00"
              />
              <small className="form-text text-muted">
                Start time of task hours window. The earliest allowed time is
                00:00 / 12:00 am.
              </small>
            </div>

            {/* Task Hours End */}
            <div className="mb-4">
              <label htmlFor="taskHoursEnd" className="form-label">
                Task hours end
              </label>
              <input
                type="time"
                className="form-control"
                id="taskHoursEnd"
                defaultValue="19:00"
              />
              <small className="form-text text-muted">
                End time of task hours window. The latest allowed time is 23:59
                / 11:59 pm.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
