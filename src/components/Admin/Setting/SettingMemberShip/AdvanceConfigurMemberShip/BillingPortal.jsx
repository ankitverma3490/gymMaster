import React from 'react'

function BillingPortal() {
  return (
    <>
       <h4 >Billing</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="card p-4 bg-light">
                    <h5 className="mb-4">Billing Settings</h5>

                    {/* Default Weekly Membership Payment Day */}
                    <div className="mb-4">
                      <label htmlFor="weeklyPaymentDay" className="form-label">
                        Default weekly membership payment day
                      </label>
                      <select className="form-select" id="weeklyPaymentDay">
                        <option>N/A</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                      </select>
                      <small className="form-text text-muted">
                        Select default first and ongoing payment day for weekly
                        and fortnightly memberships.
                      </small>
                    </div>

                    {/* Default Monthly Membership Payment Date */}
                    <div className="mb-4">
                      <label
                        htmlFor="monthlyPaymentDate"
                        className="form-label"
                      >
                        Default monthly membership payment date
                      </label>
                      <select className="form-select" id="monthlyPaymentDate">
                        <option>1st</option>
                        <option>2nd</option>
                        <option>3rd</option>
                        <option>4th</option>
                        <option>5th</option>
                        {/* Add other dates */}
                      </select>
                      <small className="form-text text-muted">
                        Select default first and ongoing payment date for
                        monthly memberships.
                      </small>
                    </div>

                    {/* Bill Bookings at Next Billing Cycle */}
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="billBookingsAtNextBillingCycle"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billBookingsAtNextBillingCycle"
                      >
                        Bill bookings at next billing cycle
                      </label>
                      <p className="small text-muted">
                        Enable booking charges to be exported - along with
                        membership charges according to members billing cycle -
                        to bank/billing provider for processing.
                      </p>
                    </div>

                    {/* Collect Payment Same Day Booking Occurs */}
                    <div className="border p-2 rounded bg-light ">
                      <div className="form-check mb-4 ">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="collectPaymentSameDayBookingOccurs"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="collectPaymentSameDayBookingOccurs"
                        >
                          Collect payment same day booking occurs
                        </label>
                        <p className="small text-muted">
                          Set booking charges to 'Bill On Bill Date' - member
                          will be charged on the day of the booking. Payment
                          will transfer from billing providers to club within
                          hours / overnight.
                        </p>
                        <p className="small text-muted">
                          <i>Last Changed: Jan 17 2023 4:05 pm by Mike Bell</i>
                        </p>
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="col-md-12 ">
                        <div className="">
                          {/* Bill for Products at Next Billing Cycle */}
                          <div className="form-check mb-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="billForProductsAtNextBillingCycle"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="billForProductsAtNextBillingCycle"
                            >
                              Bill for products at next billing cycle
                            </label>
                            <p className="small text-muted">
                              Enable point of sale charges to be exported -
                              along with membership charges according to members
                              billing cycle - to bank/billing provider for
                              processing.
                            </p>
                          </div>

                          {/* Billing Fail Limit */}
                          <div className="mb-4" style={{ marginLeft: "20px" }}>
                            <label
                              htmlFor="billingFailLimit"
                              className="form-label"
                            >
                              Billing fail limit
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="billingFailLimit"
                              defaultValue="999"
                            />
                            <small className="form-text text-muted">
                              Select number of consecutive failed billing
                              attempts before system marks member as 'Pending
                              Review'.
                            </small>
                          </div>

                          {/* Collect Historic Debts */}
                          <div className="form-check mb-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="collectHistoricDebts"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="collectHistoricDebts"
                            >
                              Collect historic debts
                            </label>
                            <p className="small text-muted">
                              Enable debt collection attempts for any
                              outstanding charges to continue for up to 6 months
                              after membership expires.
                            </p>
                          </div>

                          {/* Member Credit Limit */}
                          <div className="mb-4" style={{ marginLeft: "20px" }}>
                            <label
                              htmlFor="memberCreditLimit"
                              className="form-label"
                            >
                              Member credit limit
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="memberCreditLimit"
                              defaultValue="0"
                            />
                            <small className="form-text text-muted">
                              Select credit limit. Additional charges cannot be
                              added when limit reached, until paid. Leave as 0
                              for no limit.
                            </small>
                          </div>

                          {/* Global Min Export Value */}
                          <div className="mb-4" style={{ marginLeft: "20px" }}>
                            <label
                              htmlFor="globalMinExportValue"
                              className="form-label"
                            >
                              Global min export value
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="globalMinExportValue"
                              defaultValue="0"
                            />
                            <small className="form-text text-muted">
                              Transactions below this value will not be charged.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="">
                          {/* Global Max Export Value */}
                          <div className="mb-4" style={{ marginLeft: "20px" }}>
                            <label
                              htmlFor="globalMaxExportValue"
                              className="form-label"
                            >
                              Global max export value
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="globalMaxExportValue"
                              defaultValue="3000"
                            />
                            <small className="form-text text-muted">
                              Select to prevent accidental overcharging. Maximum
                              amount member can be charged.
                            </small>
                            <p className="small text-muted">
                              <i>
                                Default Value: 1000. Last Changed: Oct 1 2024
                                11:55 am by Mike Bell
                              </i>
                            </p>
                          </div>

                          {/* Billing Retry Interval */}
                          <div className="mb-4" style={{ marginLeft: "20px" }}>
                            <label
                              htmlFor="billingRetryInterval"
                              className="form-label"
                            >
                              Billing retry interval
                            </label>
                            <div className="d-flex gap-2">
                              <input
                                type="number"
                                className="form-control"
                                id="billingRetryInterval"
                                defaultValue="1"
                              />
                              <select
                                className="form-select"
                                id="retryIntervalUnit"
                              >
                                <option>weeks</option>
                                <option>days</option>
                                <option>months</option>
                              </select>
                            </div>
                            <small className="form-text text-muted">
                              The system will retry failed billing after a given
                              number of days. If set to an interval of 0, then
                              the system will not retry billing.
                            </small>
                            <p className="small text-muted">
                              <i>
                                Default Value: Nothing. Last Changed: Sep 12
                                2023 8:26 pm by airafitness
                              </i>
                            </p>
                          </div>

                          {/* Billing Design Version 5 */}
                          <div className="form-check mb-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="billingDesignVersion5"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="billingDesignVersion5"
                            >
                              Billing design version 5{" "}
                              <span className="badge bg-warning ms-2">
                                Beta
                              </span>
                            </label>
                            <p className="small text-muted">
                              Enable Billing redesigned newer version of billing
                              page.
                            </p>
                            <p className="small text-muted">
                              <i>
                                Last Changed: Sep 24 2024 12:17 am by
                                airafitness
                              </i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default BillingPortal
