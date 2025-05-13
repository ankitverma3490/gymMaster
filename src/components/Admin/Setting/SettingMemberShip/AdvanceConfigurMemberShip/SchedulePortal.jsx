import React, { useState } from 'react'

function SchedulePortal() {
     const [settings, setSettings] = useState({
        displayScheduleWeek: true,
        scheduleVersion5: true,
        enableSorting: false,
        customFields: false,
      });
    
      const handleChange = (setting) => {
        setSettings((prev) => ({
          ...prev,
          [setting]: !prev[setting],
        }));
      };
  return (
    <>
        <h4 className="mb-4">Schedule</h4>

<div className="card p-4 bg-light">
  <div className="card-body">
    {/* Display schedule week setting */}
    <div className="mb-4">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="displayScheduleWeek"
          checked={settings.displayScheduleWeek}
          onChange={() => handleChange("displayScheduleWeek")}
        />
        <label
          className="form-check-label fw-bold"
          htmlFor="displayScheduleWeek"
        >
          Display schedule week Sunday-Saturday
        </label>
      </div>
      <div className="ms-4 mt-2">
        <p className="mb-1">
          Display weekly schedule Sunday-Saturday. Default is
          Monday-Sunday
        </p>
        <span className="badge bg-light text-secondary border">
          Default: Unchecked
        </span>
      </div>
    </div>

    {/* Schedule Version 5 setting */}
    <div className="mb-4">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="scheduleVersion5"
          checked={settings.scheduleVersion5}
          onChange={() => handleChange("scheduleVersion5")}
        />
        <label
          className="form-check-label fw-bold"
          htmlFor="scheduleVersion5"
        >
          Schedule Version 5{" "}
          <span className="badge bg-warning text-dark ms-1">
            Beta
          </span>
        </label>
      </div>
      <div className="ms-4 mt-2">
        <p className="mb-1">
          Improved responsive design over original schedule,
          with less clicks to add and manage bookings.
        </p>
        <div>
          <span className="badge bg-light text-secondary border me-2">
            Default: Unchecked
          </span>
          <span className="text-muted small">
            Last Changed: Feb 4 2025 9:59 pm by airafitness
          </span>
        </div>
      </div>
    </div>

    {/* Enable sorting setting */}
    <div className="mb-4">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="enableSorting"
          checked={settings.enableSorting}
          onChange={() => handleChange("enableSorting")}
        />
        <label
          className="form-check-label fw-bold"
          htmlFor="enableSorting"
        >
          Enable sorting of staff and facilities resources{" "}
          <span className="badge bg-warning text-dark ms-1">
            Beta
          </span>
        </label>
      </div>
      <div className="ms-4 mt-2">
        <p className="mb-1">
          Allows you to update display of resources on the
          Schedule and Resource settings pages.
        </p>
        <p className="mb-1">
          To sort Staff and Facilities resources direct yourself
          to Settings  Classes and Bookings  Facilities OR
          Staff  click the Sort button.
        </p>
      </div>
    </div>

    {/* Custom fields setting */}
    <div className="mb-4">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="customFields"
          checked={settings.customFields}
          onChange={() => handleChange("customFields")}
        />
        <label
          className="form-check-label fw-bold"
          htmlFor="customFields"
        >
          Custom fields for schedule colors{" "}
          <span className="badge bg-danger text-white ms-1">
            Deprecated
          </span>
        </label>
      </div>
      <div className="ms-4 mt-2">
        <p className="mb-1">
          Customize the background color for bookings and time
          on the schedule.
        </p>
        <p className="mb-1">
          Direct yourself to Settings Custom Fields Schedule
          Colors.
        </p>
        <div>
          <span className="badge bg-light text-secondary border me-2">
            Default: Checked
          </span>
          <span className="text-muted small">
            Last Changed: Aug 22 2021 10:50 pm by airafitness
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default SchedulePortal
