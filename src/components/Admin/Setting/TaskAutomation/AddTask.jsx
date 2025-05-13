import React from 'react'

function AddTask() {
  return (
    <>
       <div>
      {/* Save Button */}
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-success" style={{ width: "60px", height: "35px" }}>
          Save
        </button>
      </div>

      <h5 style={{ marginBottom: "20px" }}>General</h5>
      {/* General Section */}
      <div
        style={{
          backgroundColor: "#eef0ee",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px"
        }}
      >
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Task Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" style={{ height: "30px" }} />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Staff Action Required</label>
          <div className="col-sm-10">
            <input
              type="checkbox"
              className="form-check-input"
              style={{ marginTop: "7px" }}
            />
            <small className="d-block text-muted mt-1" style={{ fontSize: "13px" }}>
              Require a staff member to complete the task. Do not enable if you want
              messages to autosend.
            </small>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Abbreviation</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" style={{ height: "30px" }} />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Sort Order</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" style={{ height: "30px" }} />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" rows={3} defaultValue={""} />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Follow Up</label>
          <div className="col-sm-10">
            <select className="form-select" style={{ height: "40px" }}>
              <option>Choose a followup task...</option>
            </select>
          </div>
        </div>
      </div>

      {/* Trigger Section */}
      <div className="mt-4">
        <h5 style={{ marginBottom: "20px" }}>Trigger</h5>
        <div
          style={{
            backgroundColor: "#eef0ee",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Event</label>
            <div className="col-sm-10">
              <select className="form-select" style={{ height: "40px" }}>
                <option>Not Set</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Event Description</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" style={{ height: "40px" }} />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">When Event Occurs</label>
            <div className="col-sm-10">
              <div className="d-flex">
                <input
                  type="number"
                  className="form-control me-2"
                  style={{ maxWidth: "100px", height: "40px" }}
                  defaultValue={0}
                />
                <select
                  className="form-select me-2"
                  style={{ maxWidth: "120px", height: "40px" }}
                >
                  <option>days</option>
                </select>
                <select
                  className="form-select"
                  style={{ maxWidth: "160px", height: "40px" }}
                >
                  <option>Immediately</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performer */}
      <div className="mt-4">
        <h5 style={{ marginBottom: "20px" }}>Performer</h5>
        <div
          style={{
            backgroundColor: "#eef0ee",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Select Performer</label>
            <div className="col-sm-10">
              <select className="form-select mt-2" style={{ fontSize: "14px" }}>
                <option>Not Set</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="mt-4">
        <h5 style={{ marginBottom: "20px" }}>Action</h5>
        <div
          style={{
            backgroundColor: "#eef0ee",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="actionGroup"
              id="action1"
              defaultChecked
            />
            <label
              className="form-check-label"
              htmlFor="action1"
              style={{ fontSize: "14px" }}
            >
              No Action at Door
            </label>
          </div>
          <div className="form-check form-check-inline ms-5">
            <input
              className="form-check-input"
              type="radio"
              name="actionGroup"
              id="action2"
            />
            <label
              className="form-check-label"
              htmlFor="action2"
              style={{ fontSize: "14px" }}
            >
              Alert at Door
            </label>
          </div>
          <div className="form-check form-check-inline ms-5">
            <input
              className="form-check-input"
              type="radio"
              name="actionGroup"
              id="action3"
            />
            <label
              className="form-check-label"
              htmlFor="action3"
              style={{ fontSize: "14px" }}
            >
              Stop at Door
            </label>
          </div>
        </div>
      </div>

      {/* Expiry */}
      <div className="mt-4">
        <h5 style={{ marginBottom: "20px" }}>Expiry</h5>
        <div
          style={{
            backgroundColor: "#eef0ee",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Task Life Expectancy</label>
            <div className="col-sm-10">
              <select className="form-select mt-2" style={{ fontSize: "14px" }}>
                <option>2 Months</option>
              </select>
            </div>
          </div>
          <div style={{ fontStyle: "italic", color: "#444" }}>
            The length of time the applied task is active. After this time, the task
            will auto complete itself. If a task is triggered after it would expire,
            it will still be created, but will not be actioned.
          </div>
        </div>
      </div>

      {/* EMAIL */}
      <div className="mt-4">
        <h5 style={{ marginBottom: "20px" }}>Email</h5>
        <div
          style={{
            backgroundColor: "#eef0ee",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Email Template</label>
            <div className="col-sm-10">
              <select className="form-select mt-2" style={{ fontSize: "14px" }}>
                <option>Not set</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Email to Member</label>
            <div className="col-sm-10">
              <input
                type="checkbox"
                className="form-check-input"
                style={{ marginTop: "7px" }}
              />
              <small className="d-block text-muted mt-1" style={{ fontSize: "13px" }}>
                Email to Member and Auto Send must both be checked for the message
                to be automatically sent to members.
              </small>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Email To Performer</label>
            <div className="col-sm-10">
              <input
                type="checkbox"
                className="form-check-input"
                style={{ marginTop: "7px" }}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Auto Send</label>
            <div className="col-sm-10">
              <input
                type="checkbox"
                className="form-check-input"
                style={{ marginTop: "7px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SMS */}
      <div className="mt-4">
        <h5 style={{ marginBottom: "20px" }}>SMS</h5>
        <div
          style={{
            backgroundColor: "#eef0ee",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">SMS Template</label>
            <div className="col-sm-10">
              <select className="form-select mt-2" style={{ fontSize: "14px" }}>
                <option>Not set</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">SMS</label>
            <div className="col-sm-10">
              <input
                type="checkbox"
                className="form-check-input"
                style={{ marginTop: "7px" }}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">App Notification</label>
            <div className="col-sm-10">
              <input
                type="checkbox"
                className="form-check-input"
                style={{ marginTop: "7px" }}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Auto Send</label>
            <div className="col-sm-10">
              <input
                type="checkbox"
                className="form-check-input"
                style={{ marginTop: "7px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Member Tag */}
      <div className="mt-4">
        <h5 style={{ marginBottom: "20px" }}>Member Tag</h5>
        <div
          style={{
            backgroundColor: "#eef0ee",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="memberTagGroup"
              id="tagNo"
              defaultChecked
            />
            <label
              className="form-check-label"
              htmlFor="tagNo"
              style={{ fontSize: "14px" }}
            >
              No Tag
            </label>
          </div>
          <div className="form-check form-check-inline ms-5">
            <input
              className="form-check-input"
              type="radio"
              name="memberTagGroup"
              id="tagAdd"
            />
            <label
              className="form-check-label"
              htmlFor="tagAdd"
              style={{ fontSize: "14px" }}
            >
              Add Tag
            </label>
          </div>
          <div className="form-check form-check-inline ms-5">
            <input
              className="form-check-input"
              type="radio"
              name="memberTagGroup"
              id="tagRemove"
            />
            <label
              className="form-check-label"
              htmlFor="tagRemove"
              style={{ fontSize: "14px" }}
            >
              Remove Tag
            </label>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Associated Member Tag</label>
            <div className="col-sm-10">
              <select className="form-select mt-2" style={{ fontSize: "14px" }}>
                <option>Not set</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Prospect */}
      <div className="mt-4">
        <h5 style={{ marginBottom: "20px" }}>Prospect</h5>
        <div
          style={{
            backgroundColor: "#eef0ee",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="prospectOption"
              id="noAction"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="noAction">
              No Action
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="prospectOption"
              id="notInterested"
            />
            <label className="form-check-label" htmlFor="notInterested">
              Set Not Interested
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="prospectOption"
              id="changeStage"
            />
            <label className="form-check-label" htmlFor="changeStage">
              Change Funnel Stage
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="prospectOption"
              id="snooze"
            />
            <label className="form-check-label" htmlFor="snooze">
              Snooze in Funnel
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="prospectOption"
              id="unsnooze"
            />
            <label className="form-check-label" htmlFor="unsnooze">
              Unsnooze from Funnel
            </label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddTask
