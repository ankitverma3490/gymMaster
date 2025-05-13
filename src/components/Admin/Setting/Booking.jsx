import React from "react";

function Booking() {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Booking </h5>
        <div className="col-md-12">
          <div className="card p-4 bg-light">
            {/* Require Manual Sign-in */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="requireManualSignIn"
              />
              <label className="form-check-label" htmlFor="requireManualSignIn">
                Require manual sign-in
              </label>
              <p className="small text-muted">
                Require members to sign in with signature. This overrides
                auto-check in with key tag.
              </p>
            </div>

            {/* Disable 'Late' Auto Check-in */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="disableLateAutoCheckIn"
              />
              <label
                className="form-check-label"
                htmlFor="disableLateAutoCheckIn"
              >
                Disable 'late' auto check-in
              </label>
              <p className="small text-muted">
                Disable auto check-in for late members.
              </p>
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
                Require payment prior to check-in
              </label>
              <p className="small text-muted">
                Require member to pay for bookings prior to checking in to
                class/service.
              </p>
            </div>

            {/* Auto Check-in Ahead Time Frame */}
            <div className="mb-4">
              <label htmlFor="autoCheckInAheadTimeFrame" className="form-label">
                Auto check-in ahead time frame
              </label>
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
              <small className="form-text text-muted">
                Select the length of time before a booking has started where a
                facility check-in for one of the enrolled members will also
                automatically check them into the booking as well.
              </small>
              <p className="small text-muted">
                <i>Last Changed: Sep 12 2023 8:26 pm by airafitness</i>
              </p>
            </div>

            {/* Display Late Arrivals / Non Check-ins */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="displayLateArrivals"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="displayLateArrivals">
                Display late arrivals / non check-ins
              </label>
              <p className="small text-muted">
                Display notice at top of dashboard indicating members who have
                not checked-in to current class/service.
              </p>
            </div>

            {/* Action When Members Do Not Attend Booked Class/Service */}
            <div className="mb-4">
              <small className="form-text text-muted">
                Select action to be performed the day after a class/service is
                completed. This only applies if a booking is not checked in or
                canceled.
              </small>
              <label htmlFor="actionWhenNotAttend" className="form-label">
                Action when members do not attend booked class/service
              </label>
              <select className="form-select" id="actionWhenNotAttend">
                <option>Cancel Booking</option>
                <option>Notify Member</option>
                <option>No Action</option>
              </select>
              <p className="small text-muted mt-2">
                <i>
                  Default Value: Checked. Last Changed: Jan 17 2023 4:05 pm by
                  Mike Bell
                </i>
              </p>
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
                      Prevent overlapping bookings
                    </label>
                    <p className="small text-muted">
                      Prevent members booking classes or services that will
                      overlap.
                    </p>
                  </div>

                  {/* Ignore 'stop after owe' for bookings */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ignoreStopAfterOwe"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="ignoreStopAfterOwe"
                    >
                      Ignore 'stop after owe' for bookings
                    </label>
                    <p className="small text-muted">
                      Allow members to make bookings after they have passed
                      'stop after owe' threshold.
                    </p>
                  </div>

                  {/* Allow Concession Packs to be Overbooked */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="allowConcessionPacksToBeOverbooked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="allowConcessionPacksToBeOverbooked"
                    >
                      Allow concession packs to be overbooked
                    </label>
                    <p className="small text-muted">
                      Allow members to make bookings using concession packs,
                      even when those concession pack usages have been earmarked
                      for use on existing bookings.
                    </p>
                  </div>

                  {/* Enable Service/Class Specific Questionnaires */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enableServiceClassQuestionnaires"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enableServiceClassQuestionnaires"
                    >
                      Enable service/class specific questionnaires
                    </label>
                    <p className="small text-muted">
                      Enable 'questionnaire' field on services and classes.
                      Allows selection of service/class-specific questionnaire.
                    </p>
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
                      Enable prerequisite questionnaire
                      <span className="badge bg-warning ms-2">Beta</span>
                    </label>
                    <p className="small text-muted">
                      Allow requirement of prerequisite questionnaire to be
                      completed before service/class can be booked.
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
                      Email members on creation of booking by staff{" "}
                      <span className="badge bg-warning ms-2">Beta</span>
                    </label>
                    <p className="small text-muted">
                      Send confirmation email to members when booking created by
                      staff.
                    </p>
                  </div>
                  {/* Email Template for Staff Class Enrollment Creation */}
                  <div className="card p-4 bg-light">
                    <div className="mb-4">
                      <label
                        htmlFor="classEnrollmentTemplate"
                        className="form-label"
                      >
                        Email template used for staff class enrollment creation
                      </label>
                      <select
                        className="form-select"
                        id="classEnrollmentTemplate"
                      >
                        <option>Member Portal Class Booking</option>
                        <option>Another Template</option>
                      </select>
                      <small className="form-text text-muted">
                        Email template used when a staff enrolls a member into a
                        class. The same template as 'Email template used for
                        class booking confirmation' from Member Portal
                        Configuration can be used.
                      </small>
                    </div>

                    {/* Email Template for Staff Service Booking Creation */}
                    <div className="mb-4">
                      <label
                        htmlFor="serviceBookingTemplate"
                        className="form-label"
                      >
                        Email template used for staff service booking creation
                      </label>
                      <select
                        className="form-select"
                        id="serviceBookingTemplate"
                      >
                        <option>Individual Booking</option>
                        <option>Another Template</option>
                      </select>
                      <small className="form-text text-muted">
                        Email template used when a staff creates a booking for a
                        member. The same template as 'Email template used for
                        service booking confirmation' from Member Portal
                        Configuration can be used.
                      </small>
                    </div>

                    {/* Email Template for Staff Waitlist Addition */}
                    <div className="mb-4">
                      <label
                        htmlFor="waitlistAdditionTemplate"
                        className="form-label"
                      >
                        Email template used for staff waitlist addition
                      </label>
                      <select
                        className="form-select"
                        id="waitlistAdditionTemplate"
                      >
                        <option>Select a template</option>
                        <option>Template 1</option>
                      </select>
                      <small className="form-text text-muted">
                        Email template used when a staff adds a member to a
                        class waitlist. The same template as 'Email template
                        used for waitlist confirmation' from Member Portal
                        Configuration can be used.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-12">
                <div className="">
                  {/* Email Member on Booking Change/Update */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailMemberOnBookingChange"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="emailMemberOnBookingChange"
                    >
                      Email member on booking change/update
                    </label>
                    <p className="small text-muted">
                      Send notification email to all members affected by changes
                      made to date, time, trainer or location (resource) of a
                      booking.
                    </p>
                    <p className="small text-muted">
                      <i>Default Value: Unchecked</i>
                    </p>
                  </div>

                  {/* Email Member on Booking Cancellation by Staff */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailMemberOnBookingCancellation"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="emailMemberOnBookingCancellation"
                    >
                      Email members on booking cancellation by staff
                    </label>
                    <p className="small text-muted">
                      Send confirmation email to member when booking canceled by
                      staff. Applies to service and class bookings.
                    </p>
                    <p className="small text-muted">
                      <i>Default Value: Unchecked</i>
                    </p>
                  </div>

                  {/* Email Template for Waitlist Removal */}
                  <div className="card p-4 bg-light">
                    <div className="mb-4">
                      <label
                        htmlFor="waitlistRemovalTemplate"
                        className="form-label"
                      >
                        Email template used for waitlist removal by staff
                        members
                      </label>
                      <select
                        className="form-select"
                        id="waitlistRemovalTemplate"
                      >
                        <option>Class Waitlist Removal</option>
                        <option>Another Template</option>
                      </select>
                      <small className="form-text text-muted">
                        Email template sent to a member when a staff member
                        removes them from the class waitlist. The same template
                        as 'Email template used for waitlist cancellation' from
                        Member Portal Configuration can be used.
                      </small>
                    </div>

                    {/* Email Template for Booking Cancellations */}
                    <div className="mb-4">
                      <label
                        htmlFor="bookingCancellationTemplate"
                        className="form-label"
                      >
                        Email template used for booking cancellations by staff
                        members
                      </label>
                      <select
                        className="form-select"
                        id="bookingCancellationTemplate"
                      >
                        <option>
                          Class Booking Cancellation: Booking Cancelled by Staff
                        </option>
                        <option>Another Template</option>
                      </select>
                      <small className="form-text text-muted">
                        Email template sent to a member when a staff member
                        cancels their booking. Applies to service and class
                        bookings.
                      </small>
                    </div>
                  </div>
                  {/* Require Cancellation Reason */}
                  <div className="form-check mb-4 mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="requireCancellationReason"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="requireCancellationReason"
                    >
                      Require cancellation reason
                    </label>
                    <p className="small text-muted">
                      Require reason for cancellation to be selected.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col--md-12">
                <div className="">
                  {/* Default Cancellation Fee */}
                  <div className="mb-4">
                    <label
                      htmlFor="defaultCancellationFee"
                      className="form-label"
                    >
                      Default cancellation fee
                    </label>
                    <select className="form-select" id="defaultCancellationFee">
                      <option>No Default</option>
                      <option>$5</option>
                      <option>$10</option>
                    </select>
                    <small className="form-text text-muted">
                      Select default cancellation fee when canceling bookings.
                    </small>
                  </div>

                  {/* Default Cancellation Type */}
                  <div className="mb-4">
                    <label
                      htmlFor="defaultCancellationType"
                      className="form-label"
                    >
                      Default cancellation type
                    </label>
                    <select
                      className="form-select"
                      id="defaultCancellationType"
                    >
                      <option>No Default</option>
                      <option>Full Refund</option>
                      <option>Partial Refund</option>
                    </select>
                    <small className="form-text text-muted">
                      Select default cancellation type when canceling bookings.
                    </small>
                  </div>

                  {/* Email Attendee List to Instructor Prior to Class */}
                  <div className="mb-4">
                    <label htmlFor="emailAttendeeList" className="form-label">
                      Email attendee list to instructor prior to class
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="emailAttendeeList"
                      placeholder="Enter time"
                    />
                    <small className="form-text text-muted">
                      Select when, prior to class, attendee list to be emailed
                      to instructor. If set, this needs to be more than 10
                      minutes before.
                    </small>
                  </div>

                  {/* Allow Trainers to Receive Commission */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="allowTrainersCommission"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="allowTrainersCommission"
                    >
                      Allow trainers to receive commission for all bookings
                    </label>
                    <p className="small text-muted">
                      Allow trainers to be paid for all booking commissions -
                      including canceled and no show booking.
                    </p>
                    <p className="small text-muted">
                      <i>Default Value: Unchecked</i>
                    </p>
                  </div>

                  {/* Enable Service/Class Specific 'Pay Later' Option */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enablePayLaterOption"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enablePayLaterOption"
                    >
                      Enable service/class specific 'Pay Later' option
                      <span className="badge bg-warning ms-2">Beta</span>
                    </label>
                    <p className="small text-muted">
                      Allows member to skip online payment for a specific
                      class/service. Charges will accrue on their member account
                      and be collected at their next payment cycle.
                    </p>
                  </div>

                  {/* Email Trainer on Cancellation */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailTrainerOnCancellation"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="emailTrainerOnCancellation"
                    >
                      Email trainer on cancellation
                    </label>
                    <p className="small text-muted">
                      Send notification email to trainer when booking canceled.
                    </p>
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

export default Booking;
