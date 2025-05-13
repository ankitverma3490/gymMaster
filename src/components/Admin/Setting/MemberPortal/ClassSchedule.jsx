import React from "react";

function ClassSchedule() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Sidebar for navigation */}
        <h3>Class Schedule </h3>
        <div className="card p-4 bg-light">
          {/* Main content */}
          <div className="col-md-12 p-4">
            <form>
              <div className="mb-3">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  id="enableGuestFees"
                />
                <label htmlFor="scheduleHeader" className="form-label">
                  Enable class bookings via online schedule
                </label>
                <br />
                <span>
                  Allow members to book classes via online schedule on Member
                  Portal
                </span>
                <br />
                <small>Last Changed: Aug 23 2022 10:23 pm by Mike Bell</small>
                <div className="card p-4 mt-3 bg-light">
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="enableGuestFees"
                    />
                    <label htmlFor="scheduleHeader" className="form-label">
                      Enable extra guest fees
                    </label>
                    <br />
                    <span>
                      Give users the option of bringing along extra guests for
                      an additional fee. This is only available on the Member
                      Portal online schedule. The additional fee is charged at
                      an hourly rate.
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="scheduleHeader" className="form-label">
                  Header on schedule page
                </label>
                <br />
                <span>Choose header for Class Schedule page</span>
                <input
                  type="text"
                  className="form-control"
                  id="scheduleHeader"
                  placeholder="Gym Schedule"
                />
              </div>

              <div className="form-check  mt-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="enableGuestFees"
                />
                <label className="form-check-label" htmlFor="enableGuestFees">
                  Display classes grouped by start time
                </label>
                <br />
                <span>
                  Display classes on schedule grouped by start time. Default
                  displays classes grouped in hour blocks
                </span>
              </div>

              <div className="mb-3 mt-4">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  id="enableGuestFees"
                />
                <label htmlFor="classBookingOpen" className="form-label">
                  Hide empty rows on online class schedule
                </label>
                <br />
                <span>
                  Remove empty rows from online class schedule display
                </span>
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="enableBookingConfirmationEmail"
                />
                <label
                  className="form-check-label"
                  htmlFor="enableBookingConfirmationEmail"
                >
                  Enable class to 'Display on Schedule' setting instead of 'Book
                  Online'
                </label>
                <br />
                <span>
                  Enable class to display on class calendar/schedule online
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassSchedule;
