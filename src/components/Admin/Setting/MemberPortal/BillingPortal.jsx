import React from "react";

function BillingPortal() {
  return (
    <>
      <h4>Billing</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="card p-4 bg-light">
            

            {/* Default Weekly Membership Payment Day */}
            <div className="mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="billBookingsAtNextBillingCycle"
                defaultChecked
              />
              <label htmlFor="weeklyPaymentDay" className="form-label">
                Bill before club billing start date{" "}
              </label>
              <br />
              <spam className="form-text text-muted">
                Allow pre-sales to be billed immediately, prior to club opening
                date
              </spam>
              <br />
              <small>
                Default: UncheckedLast Changed: Dec 16 2019 6:52 pm by
                airafitness
              </small>
            </div>

            {/* Default Monthly Membership Payment Date */}
            <div className="mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="billBookingsAtNextBillingCycle"
                defaultChecked
              />
              <label htmlFor="monthlyPaymentDate" className="form-label">
                Bill immediately for first payment of membership fee
              </label>
              <br />
              <spam>
                Enable first membership payment fee to be billed immediately
              </spam>
              <br />
              <small className="form-text text-muted">
                Default: UncheckedLast Changed: Nov 7 2024 6:10 pm by Mike Bell
              </small>
            </div>

            {/* Bill Bookings at Next Billing Cycle */}
            <div className="form-check mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="billBookingsAtNextBillingCycle"
                defaultChecked
              />
              <label
                className="form-check-label"
                htmlFor="billBookingsAtNextBillingCycle"
              >
                Bill immediately for paid in full membership fee
              </label>
              <br />
              <p className="small text-muted">
                Enable 'paid in full' membership fee to be billed immediately
              </p>
            </div>

            {/* Collect Payment Same Day Booking Occurs */}
            <div className="">
              <div className="form-check mb-4 ">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id="collectPaymentSameDayBookingOccurs"
                  defaultChecked
                />
                <label
                  className="form-check-label"
                  htmlFor="collectPaymentSameDayBookingOccurs"
                >
                  Bill immediately for membership sign-up fee
                </label>
                <p className="small text-muted">
                  Enable membership sign-up fee to be billed immediately.
                  Sign-up fee: additional amount member is charged when signing
                  up for membership
                </p>
                <p className="small text-muted">
                  <i>Last Changed: Feb 28 2024 3:05 pm by Mike Bell</i>
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
                      Bill immediately for membership upfront fee
                    </label>
                    <p className="small text-muted">
                      Enable point of sale charges to be exported - along with
                      membership charges according to members billing cycle - to
                      bank/billing provider for processing.
                    </p>
                    <small>Default: Unchecked</small>
                  </div>

                  {/* Billing Fail Limit */}
                  {/* <div className="mb-4" style={{ marginLeft: "20px" }}>
                    <label htmlFor="billingFailLimit" className="form-label">
                      Billing fail limit
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="billingFailLimit"
                      defaultValue="999"
                    />
                    <small className="form-text text-muted">
                      Select number of consecutive failed billing attempts
                      before system marks member as 'Pending Review'.
                    </small>
                  </div> */}

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
                      Bill immediately for products
                    </label>
                    <p className="small text-muted">
                    Enable product purchases to be billed immediately

                    </p>
                  </div>

                  {/* Member Credit Limit */}
                  <div className="mb-4" style={{}}>
                  <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="billBookingsAtNextBillingCycle"
                        defaultChecked
                      />
                    <label htmlFor="memberCreditLimit" className="form-label">
                    Use Account credit for booking fees                    </label><br/>
                   <span>Enable to use member's credit towards payment of membership fees.
                   </span><br/>
                    <small className="form-text text-muted">
                    Default: UncheckedLast Changed: Apr 11 2023 4:30 pm by Mike Bell

                    </small>
                  </div>

                  {/* Global Min Export Value */}
                  <div className="mb-4" style={{ }}>
                  <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="billBookingsAtNextBillingCycle"
                        defaultChecked
                      />
                    <label
                      htmlFor="globalMinExportValue"
                      className="form-label"
                    >
                     Allow 'Pay Later' for everything
                    </label><br/>
                   
                    <small className="form-text text-muted">
                    Allow members to delay payment for classes, services, products, memberships, whether or not they have "Pay Later" enabled individually. Charges will accrue on their member account and be collected at their next payment cycle. Members without billing details will be prompted to pay in person.
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="">
                  {/* Global Max Export Value */}
                  <div className="mb-4" style={{ }}>
                  <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="billBookingsAtNextBillingCycle"
                        defaultChecked
                      />
                    <label
                      htmlFor="globalMaxExportValue"
                      className="form-label"
                    >
                      Hide 'Bank Account' option
                    </label>
                  <br/>
                  <span>Hide this online payment option. Note: If both Bank Account and Credit Card options are hidden, payment step will not work
                  </span><br/>
                    <small className="form-text text-muted">
                    Default: UncheckedLast Changed: May 31 2024 9:34 pm by airafitness

                    </small>
                    <p className="small text-muted">
                      <i>
                        Default Value: 1000. Last Changed: Oct 1 2024 11:55 am
                        by Mike Bell
                      </i>
                    </p>
                  </div>

                  {/* Billing Retry Interval */}
                  {/* <div className="mb-4" style={{ marginLeft: "20px" }}>
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
                      <select className="form-select" id="retryIntervalUnit">
                        <option>weeks</option>
                        <option>days</option>
                        <option>months</option>
                      </select>
                    </div>
                    <small className="form-text text-muted">
                      The system will retry failed billing after a given number
                      of days. If set to an interval of 0, then the system will
                      not retry billing.
                    </small>
                    <p className="small text-muted">
                      <i>
                        Default Value: Nothing. Last Changed: Sep 12 2023 8:26
                        pm by airafitness
                      </i>
                    </p>
                  </div> */}

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
                      Hide 'Credit Card' option{" "}
                      <span className="badge bg-warning ms-2">Beta</span>
                    </label>
                    <p className="small text-muted">
                    Hide this online payment option. Note: If both Bank Account and Credit Card options are hidden, payment step will not work

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

export default BillingPortal;
