import React from "react";

function BookingConfigur() {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Booking </h5>
        <div className="col-md-12">
          <div className="card p-4 bg-light">
            {/* Require Manual Sign-in */}
            <div className="form-check mb-4">
              {/* <input
                className="form-check-input"
                type="checkbox"
                id="requireManualSignIn"
              /> */}
              <label className="form-check-label" htmlFor="requireManualSignIn">
                Open service bookings online
              </label>
              <p className="small text-muted">
                Select time-frame prior to service when online bookings are to
                open
              </p>
              <div className="d-flex gap-2">
                <input
                  type="number"
                  className="form-control"
                  id="autoCheckInAheadTimeFrame"
                  defaultValue="1"
                />
                <select className="form-select" id="timeFrameUnit">
                  <option>hours</option>
                  <option>days</option>
                  <option>weeks</option>
                </select>
              </div>
              <small>
                Default Value: 2 WeeksLast Changed: Sep 12 2023 8:26 pm by
                airafitness
              </small>
            </div>

            {/* Disable 'Late' Auto Check-in */}
            <div className="form-check mb-4">
              {/* <input
                className="form-check-input"
                type="checkbox"
                id="disableLateAutoCheckIn"
              /> */}
              <label
                className="form-check-label"
                htmlFor="disableLateAutoCheckIn"
              >
                Close service bookings online
              </label>
              <p className="small text-muted">
                Select time-frame prior to service when online bookings are to
                close
              </p>
              <div className="d-flex gap-2">
                <input
                  type="number"
                  className="form-control"
                  id="autoCheckInAheadTimeFrame"
                  defaultValue="1"
                />
                <select className="form-select" id="timeFrameUnit">
                  <option>hours</option>
                  <option>days</option>
                  <option>weeks</option>
                </select>
              </div>
            </div>

            {/* Require Payment Prior to Check-in */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="requirePaymentPriorToCheckIn"
                defaultChecked
              />
              <label
                className="form-check-label"
                htmlFor="requirePaymentPriorToCheckIn"
              >
                Concurrent booking limit
              </label>
              <p className="small text-muted">
                Select maximum online bookings members can hold at one time
              </p>
              <div className="d-flex gap-2">
                <input
                  type="number"
                  className="form-control"
                  id="autoCheckInAheadTimeFrame"
                  defaultValue="1"
                />
              </div>
            </div>

            {/* Auto Check-in Ahead Time Frame */}
            <div className="mb-4">
              <label htmlFor="autoCheckInAheadTimeFrame" className="form-label">
                Enable non-members to book online
              </label>
              <br />
              {/* <div className="d-flex gap-2">
                <input
                  type="number"
                  className="form-control"
                  id="autoCheckInAheadTimeFrame"
                  defaultValue="1"
                />
                <select className="form-select" id="timeFrameUnit">
                  <option>hours</option>
                  <option>days</option>
                  <option>weeks</option>
                </select>
              </div> */}
              <small className="form-text text-muted">
                Allow casual bookings by non-members via Member Portal
              </small>
              <p className="small text-muted">
                <i>
                  Default: UncheckedLast Changed: Nov 6 2024 6:57 pm by Mike
                  Bell
                </i>
              </p>
            </div>

            {/* Display Late Arrivals / Non Check-ins */}
            <div className="card p-4">
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="displayLateArrivals"
                  defaultChecked
                />
                <label
                  className="form-check-label"
                  htmlFor="displayLateArrivals"
                >
                  Require password during casual booking form
                </label>
                <p className="small text-muted">
                  Display and require password during casual booking form.
                </p>
              </div>
            </div>

            {/* Action When Members Do Not Attend Booked Class/Service */}
            <div className="mb-4 mt-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="displayLateArrivals"
                defaultChecked
              />
              <label>Enable cancellation of services online</label>
              <br />
              <small className="form-text text-muted">
                Allow members to cancel service/personal training via Member
                Portal
              </small>
              <br />
              <small htmlFor="actionWhenNotAttend" className="form-label">
                Default: CheckedLast Changed: Aug 24 2022 9:29 pm by Mike Bell
              </small>
              <div className="card p-4 mt-2">
                <div className="form-check mb-4">
                  {/* <input
                className="form-check-input"
                type="checkbox"
                id="displayLateArrivals"
                defaultChecked
              /> */}
                  <label
                    className="form-check-label"
                    htmlFor="displayLateArrivals"
                  >
                    Minimum cancellation period for members - services
                  </label>
                  <p className="small text-muted">
                    Select minimum amount of time before a service booking
                    begins that members can cancel online
                  </p>
                  <div className="d-flex gap-2">
                    <input
                      type="number"
                      className="form-control"
                      id="autoCheckInAheadTimeFrame"
                      defaultValue="1"
                    />
                    <select className="form-select" id="timeFrameUnit">
                      <option>hours</option>
                      <option>days</option>
                      <option>weeks</option>
                    </select>
                  </div>
                  <small>
                    Default Value: 1 DaysLast Changed: Sep 12 2023 8:26 pm by
                    airafitness
                  </small>
                </div>
                <div className="form-check mb-4">
                  {/* <input
                className="form-check-input"
                type="checkbox"
                id="displayLateArrivals"
                defaultChecked
              /> */}
                  <label
                    className="form-check-label"
                    htmlFor="displayLateArrivals"
                  >
                    Booking cancellation fee for members - services
                  </label>
                  <p className="small text-muted">
                    Choose cancellation fee charged to member account upon
                    cancellation of a service booking. This will apply only when
                    cancellation mode is set to 'Charge Fee for Cancellation'
                  </p>
                  <div className="d-flex gap-2">
                    <input
                      type="number"
                      className="form-control"
                      id="autoCheckInAheadTimeFrame"
                      defaultValue="1"
                    />
                  </div>
                </div>
                <div className="form-check mb-4">
                  {/* <input
                className="form-check-input"
                type="checkbox"
                id="displayLateArrivals"
                defaultChecked
              /> */}
                  <label
                    className="form-check-label"
                    htmlFor="displayLateArrivals"
                  >
                    Cancellation fee period - services
                  </label>
                  <p className="small text-muted">
                    Select time frame prior to service within which a
                    cancellation fee will be charged. If not set - fee will be
                    charged at any time of cancellation. Note this setting does
                    not apply when cancellation mode is set to 'Refund - No
                    Charge'.
                  </p>
                  <div className="d-flex gap-2">
                    <input
                      type="number"
                      className="form-control"
                      id="autoCheckInAheadTimeFrame"
                      defaultValue="1"
                    />
                    <select className="form-select" id="timeFrameUnit">
                      <option>hours</option>
                      <option>days</option>
                      <option>weeks</option>
                    </select>
                  </div>
                  <small>Default Value: 1 Hours</small>
                </div>
                <div className="form-check mb-4">
                  {/* <input
                className="form-check-input"
                type="checkbox"
                id="displayLateArrivals"
                defaultChecked
              /> */}
                  <label
                    className="form-check-label"
                    htmlFor="displayLateArrivals"
                  >
                    Cancellation mode - services
                  </label>
                  <p className="small text-muted">
                    Select option - how will member be charged for online
                    cancellation of a service booking
                  </p>
                  <div className="d-flex gap-2">
                    <select className="form-select" id="timeFrameUnit">
                      <option>Refund -NO charge</option>
                      <option>Forfeit Full Fee</option>
                      <option>Charge fee of cancellation</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-12">
                <div className="">
                  {/* Prevent Overlapping Bookings */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="preventOverlappingBookings"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="preventOverlappingBookings"
                    >
                      Require questionnaire once{" "}
                    </label>
                    <p className="small text-muted">
                      Require member to fill questionnaire on first booking /
                      membership purchase only
                    </p>
                  </div>

                  {/* Ignore 'stop after owe' for bookings */}
                  <div className="form-check mb-4">
                    {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="ignoreStopAfterOwe"
                    /> */}
                    <label
                      className="form-check-label"
                      htmlFor="ignoreStopAfterOwe"
                    >
                      Block member after consistent 'no-shows'
                    </label>
                    <p className="small text-muted">
                      Select number of no-shows within the set period to trigger
                      an automatic block on member from Member Portal
                    </p>
                    <input
                      type="number"
                      className="form-control"
                      id="autoCheckInAheadTimeFrame"
                      defaultValue="1"
                    />
                  </div>

                  {/* Allow Concession Packs to be Overbooked */}
                  <div className="card p-4 bg-light">
                    <div className="form-check mb-4">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="allowConcessionPacksToBeOverbooked"
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="allowConcessionPacksToBeOverbooked"
                      >
                        Block member for:
                      </label>
                      <p className="small text-muted">
                        How long this member should be blocked after too many no
                        shows
                      </p>
                      <div className="d-flex gap-2">
                        <input
                          type="number"
                          className="form-control"
                          id="autoCheckInAheadTimeFrame"
                          defaultValue="1"
                        />
                        <select className="form-select" id="timeFrameUnit">
                          <option>hours</option>
                          <option>days</option>
                          <option>weeks</option>
                        </select>
                      </div>
                      <small>
                        Default Value: 1 MonthsLast Changed: Sep 12 2023 8:26 pm
                        by airafitness
                      </small>
                    </div>
                  </div>
                  {/* Enable Service/Class Specific Questionnaires */}
                  <div className="form-check mb-4">
                    {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="enableServiceClassQuestionnaires"
                    /> */}
                    <label
                      className="form-check-label"
                      htmlFor="enableServiceClassQuestionnaires"
                    >
                      Daily service booking limitBeta
                    </label>
                    <p className="small text-muted">
                      Members can only make this many online service bookings
                      for a given day. The day is the day of the booking, and
                      not today.
                    </p>
                    <input
                      type="number"
                      className="form-control"
                      id="autoCheckInAheadTimeFrame"
                      defaultValue="1"
                    />
                    <small>
                      Last Changed: Jan 18 2023 6:27 pm by Mike Bell
                    </small>
                  </div>

                  {/* Enable Prerequisite Questionnaire */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enablePrerequisiteQuestionnaire"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enablePrerequisiteQuestionnaire"
                    >
                      Enable booking discount codes
                      <span className="badge bg-warning ms-2">Beta</span>
                    </label>
                    <p className="small text-muted">
                      Allow Discount Codes to be entered in the portal when
                      making a booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="">
                <div className="">
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enablePrerequisiteQuestionnaire"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enablePrerequisiteQuestionnaire"
                    >
                      Current day service booking limitBeta
                      <span className="badge bg-warning ms-2">Beta</span>
                    </label>
                    <p className="small text-muted">
                      Members can only make this many online service bookings
                      today. .
                    </p>
                    <input
                      type="number"
                      className="form-control"
                      id="autoCheckInAheadTimeFrame"
                      defaultValue="1"
                    />
                    <small>Last Changed: Jan 17 2023 4:00 pm by Mike Bell
                    </small>
                  </div>
                  {/* Email Template for Staff Class Enrollment Creation */}
                 
                </div>
              </div>
            </div>

          

           
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingConfigur;
