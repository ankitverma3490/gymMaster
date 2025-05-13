import React, { useState } from "react";

function ComunicationPortal() {
  const [enableSignUpConfirmation, setEnableSignUpConfirmation] =
    useState(true);
  const [enableFacilityNotification, setEnableFacilityNotification] =
    useState(true);
  const [enableMembershipConfirmation, setEnableMembershipConfirmation] =
    useState(true);
  const [enableServiceBooking, setEnableServiceBooking] = useState(true);
  const [notifyFacility, setNotifyFacility] = useState(false);
  const [enableCancelBooking, setEnableCancelBooking] = useState(true);

  return (
    <>
      <div className="">
        <h2 className="text-xl font-medium text-gray-800 mb-4">
          Communication
        </h2>
        <div className="row">
          <div className="col-md-12">
            <div className="card bg-light border border-gray-200 rounded-lg p-4">
              {/* Sign-up confirmation email */}
              <div className="mb-6">
                <div className="flex items-start mb-2">
                  <input
                    type="checkbox"
                    id="signup-confirmation"
                    className="mt-1 mr-3"
                    checked={enableSignUpConfirmation}
                    onChange={() =>
                      setEnableSignUpConfirmation(!enableSignUpConfirmation)
                    }
                  />

                  <label
                    htmlFor="signup-confirmation"
                    className="font-medium text-gray-800"
                  >
                    Enable sign-up confirmation email
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Sends a confirmation email to a member, using the email
                    template set below, when they sign up online. A sign-up is
                    when they enter their details for the first time, and add a
                    membership.
                  </p>
                </div>

                {enableSignUpConfirmation && (
                  <div className="card p-2 bg-light">
                    <div className="ml-7 mt-3 bg-gray-50 p-4 rounded-md">
                      <label className="font-medium text-gray-800 mb-2">
                        Email template used for sign-up confirmation
                      </label>
                      <p className="text-sm text-gray-600 mb-3">
                        The email template sent to a new member who signs up
                        online.
                      </p>
                      <div className="d-flex items-center gap-2">
                        <div className="relative flex-1">
                          <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8">
                            <option>Online signup: Welcome, new member!</option>
                            <option>New Member Registration</option>
                            <option>Welcome to Our Facility</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"></div>
                        </div>
                        <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                          <i class="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Facility notification */}
              <div className="mb-6 mt-3">
                <div className="flex items-start mb-2">
                  <input
                    type="checkbox"
                    id="facility-notification"
                    className="mt-1 mr-3 me-2"
                    checked={enableFacilityNotification}
                    onChange={() =>
                      setEnableFacilityNotification(!enableFacilityNotification)
                    }
                  />

                  <label
                    htmlFor="facility-notification"
                    className="font-medium text-gray-800"
                  >
                    Send confirmation email to facility upon online Sign-up and
                    Contact Us
                  </label>
                  <span className="text-sm text-gray-600 mt-1">
                    Send confirmation email to facility when a Sign-up or
                    inquiry is received. The confirmation email will be sent to
                    the facility email set via Settings - Club Details.
                  </span>
                </div>

                {enableFacilityNotification && (
                  <div className="card p-4 bg-light">
                    <div className="">
                      <label className="font-medium text-gray-800 mb-2">
                        Email template used for member sign-up and add
                        membership notification
                      </label>
                      <span className="text-sm text-gray-600 mb-3">
                        The email template sent to the facility when a member
                        signs up or adds a membership online.
                      </span>
                      <div className="d-flex items-center gap-2">
                        <div className="relative flex-1">
                          <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8">
                            <option>
                              Member Portal Membership Signup Notification
                            </option>
                            <option>New Member Alert</option>
                            <option>Facility Notification: New Signup</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"></div>
                        </div>
                        <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                          <i class="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Add membership confirmation */}
              <div>
                <div className=" items-start mb-2 mt-3">
                  <input
                    type="checkbox"
                    id="add-membership"
                    className="mt-1 mr-3 me-3"
                    checked={enableMembershipConfirmation}
                    onChange={() =>
                      setEnableMembershipConfirmation(
                        !enableMembershipConfirmation
                      )
                    }
                  />

                  <label
                    htmlFor="add-membership"
                    className="font-medium text-gray-800"
                  >
                    Enable add membership confirmation email
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Send confirmation email when member signs up for membership
                  </p>
                </div>

                {enableMembershipConfirmation && (
                  <div className="card p-4 bg-light">
                    <div className="">
                      <label className="font-medium text-gray-800 mb-2">
                        Email template used for add membership confirmation
                      </label>
                      <span className="text-sm text-gray-600 mb-3">
                        The email template sent to an existing member when they
                        add a new membership online.
                      </span>
                      <div className="d-flex items-center gap-2">
                        <div className="relative flex-1">
                          <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8">
                            <option>Member Portal Add Membership</option>
                            <option>Membership Addition Confirmation</option>
                            <option>Thanks for Adding a Membership</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"></div>
                        </div>
                        <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                          <i class="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-6 bg-gray-50 p-4 rounded-md">
                <label className="font-medium text-gray-800 mb-2">
                  Email template used for membership cancellation
                </label>
                <span className="text-sm text-gray-600 mb-3">
                  The email template sent to a member when they cancel their
                  membership online.
                </span>
                <div className="d-flex items-center gap-2">
                  <div className="relative flex-1">
                    <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8">
                      <option>Member Portal Membership Cancellation</option>
                      <option>Membership Cancellation Confirmation</option>
                      <option>Subscription Cancellation Notice</option>
                    </select>
                  </div>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                    <i class="fa-solid fa-pen"></i>
                  </button>
                </div>
              </div>

              {/* Service Booking Confirmation */}
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <input
                    type="checkbox"
                    id="service-booking"
                    className="mt-1 mr-3 me-2 "
                    checked={enableServiceBooking}
                    onChange={() =>
                      setEnableServiceBooking(!enableServiceBooking)
                    }
                  />

                  <label
                    htmlFor="service-booking"
                    className="font-medium text-gray-800"
                  >
                    Enable service booking confirmation email
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Send confirmation email to members and trainers for service
                    bookings
                  </p>
                </div>

                {enableServiceBooking && (
                  <div className="card p-4 bg-light">
                    <div className="">
                      <label className="font-medium text-gray-800 mb-2">
                        Email template used for service booking confirmation
                      </label>
                      <p className="text-sm text-gray-600 mb-3">
                        The email template used when a member books a service
                        booking online.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8">
                            <option>Individual Booking</option>
                            <option>Service Booking Confirmation</option>
                            <option>Trainer Session Booked</option>
                          </select>
                        </div>
                        <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                          <i class="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Notify Facility */}
              <div className="mb-6 mt-4">
                <div className="flex items-start mb-3">
                  <input
                    type="checkbox"
                    id="notify-facility"
                    className="mt-1 mr-3"
                    checked={notifyFacility}
                    onChange={() => setNotifyFacility(!notifyFacility)}
                  />

                  <label
                    htmlFor="notify-facility"
                    className="font-medium text-gray-800"
                  >
                    Notify facility when member books online
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Send notification email to facility when member books
                    service or class online
                  </p>
                </div>
              </div>

              {/* Cancel Booking Confirmation */}
              <div className="mb-6 mt-4">
                <div className="flex items-start mb-3">
                  <input
                    type="checkbox"
                    id="cancel-booking"
                    className="mt-1 mr-3"
                    checked={enableCancelBooking}
                    onChange={() =>
                      setEnableCancelBooking(!enableCancelBooking)
                    }
                  />

                  <label
                    htmlFor="cancel-booking"
                    className="font-medium text-gray-800"
                  >
                    Enable cancel booking confirmation email
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Send confirmation email on cancellation of booking
                  </p>
                </div>

                {enableCancelBooking && (
                  <div className="card p-4 bg-light">
                    <div className="ml-7 space-y-6">
                      {/* Waitlist Cancellation Template */}
                      <div className="mt-3 bg-gray-50 p-4 rounded-md">
                        <label className="font-medium text-gray-800 mb-2">
                          Email template used for waitlist cancellation
                        </label>
                        <span className="text-sm text-gray-600 mb-3">
                          The email template sent to a member when they cancel
                          their waitlist booking online.
                        </span>
                        <div className="d-flex items-center gap-2">
                          <div className="relative flex-1">
                            <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8">
                              <option>Class Waitlist Removal</option>
                              <option>Waitlist Cancellation Notice</option>
                              <option>Removed from Waitlist</option>
                            </select>
                          </div>
                          <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                            <i class="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>

                      {/* Booking Cancellation Template */}
                      <div className="bg-gray-50 p-4 rounded-md">
                        <label className="font-medium text-gray-800 mb-2">
                          Email template used for booking cancellation
                        </label>
                        <span className="text-sm text-gray-600 mb-3">
                          The email template sent to a member when they cancel
                          their class booking online.
                        </span>
                        <div className="d-flex items-center gap-2">
                          <div className="relative flex-1">
                            <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8">
                              <option>
                                Class Booking Cancellation: Booking Cancelled
                              </option>
                              <option>Class Cancellation Notification</option>
                              <option>Your Booking Has Been Cancelled</option>
                            </select>
                          </div>
                          <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                            <i class="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="row">
                {/* Sidebar for navigation */}

                {/* Main content */}
                <div className="col-md-12 p-4">
                  <form>
                    {/* Send notification email to facility */}
                    <div className="form-check mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="sendNotificationToFacility"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="sendNotificationToFacility"
                      >
                        Send notification email to facility when member updates
                        payment details
                      </label>
                      <br />
                      <span>
                        When a member updates their payment details online, send
                        an email to the club to let them know.
                      </span>
                    </div>

                    {/* Enable update of payment details confirmation email */}
                    <div className="form-check mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="enableUpdateConfirmationEmail"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="enableUpdateConfirmationEmail"
                      >
                        Enable update of payment details confirmation email
                      </label>
                      <br />
                      <span>
                        Send confirmation email when member updates payment
                        details
                      </span>
                    </div>

                    {/* Email template for paid outstanding balance */}
                    <div className="mb-3 mt-3">
                      <label
                        htmlFor="paidOutstandingBalanceTemplate"
                        className="form-label"
                      >
                        Email template used for paid outstanding balance
                      </label>
                      <br />
                      <span>
                        The email template used when a member pays their
                        outstanding account balance online.
                      </span>
                      <div className="d-flex">
                        <select
                          className="form-select me-2"
                          id="paidOutstandingBalanceTemplate"
                          aria-label="Email template for paid outstanding balance"
                        >
                          <option value="memberPortalOutstandingBalance">
                            Member Portal Outstanding Balance
                          </option>
                        </select>
                        <div>
                          <button className="btn btn-secondary">
                            <i class="fa-solid fa-pen text-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Email template for Contact Us confirmation */}
                    <div className="mb-3">
                      <label
                        htmlFor="contactUsConfirmationTemplate"
                        className="form-label"
                      >
                        Email template used for Contact Us confirmation
                      </label>
                      <br />
                      <span>
                        The email template sent to somebody who fills in the
                        Contact Us page.
                      </span>
                      <div className="d-flex">
                        <select
                          className="form-select me-2"
                          id="contactUsConfirmationTemplate"
                          aria-label="Email template for Contact Us confirmation"
                        >
                          <option value="memberPortalEnquiry">
                            Member Portal Enquiry
                          </option>
                        </select>
                        <div>
                          <button className="btn btn-secondary">
                            <i class="fa-solid fa-pen text-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Email template for password update */}
                    <div className="mb-3">
                      <label
                        htmlFor="passwordUpdateTemplate"
                        className="form-label"
                      >
                        Email template used for password update
                      </label>
                      <br />
                      <span>
                        The email template sent to a member when they try to
                        recover their password online.
                      </span>
                      <div className="d-flex">
                        <select
                          className="form-select me-2"
                          id="passwordUpdateTemplate"
                          aria-label="Email template for password update"
                        >
                          <option value="memberPortalPasswordReset">
                            Member Portal Password Reset
                          </option>
                        </select>
                        <div>
                          <button className="btn btn-secondary">
                            <i class="fa-solid fa-pen text-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComunicationPortal;
