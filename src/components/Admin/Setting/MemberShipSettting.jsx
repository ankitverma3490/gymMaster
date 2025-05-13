import React, { useState } from "react";

function MemberShipSettting() {
    const [requireInitialPayment, setRequireInitialPayment] = useState(false);
    const [fillBankDetails, setFillBankDetails] = useState(true);
    const [prorateFirstPayment, setProrateFirstPayment] = useState(false);

      const [prorateFinalPayment, setProrateFinalPayment] = useState(false);
      const [prorateCancellation, setProrateCancellation] = useState(false);
      const [emailCancellation, setEmailCancellation] = useState(true);
      const [enableAutoExpiry, setEnableAutoExpiry] = useState(false);
      const [displayMembershipKPIs, setDisplayMembershipKPIs] = useState(true);
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Membership </h5>
        <div className="col-lg-12">
          <div className="card p-4 bg-light">
            {/* Email Confirmation to Member */}
            <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="emailConfirmation"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="emailConfirmation">
                  Email confirmation to member - membership created by staff
                </label>
                <br />
                <small>
                  Send notification email to member when membership created by
                  staff
                </small>
              </div>
              <div className="card p-4 bg-light">
                <label htmlFor="emailTemplate" className="form-label">
                  Email template used for membership confirmation
                </label>
                <select className="form-select" id="emailTemplate">
                  <option value="Member Portal Add Membership">
                    Member Portal Add Membership
                  </option>
                </select>
              </div>
            </div>

            {/* Static Membership Contract */}
            <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="useStaticContract"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="useStaticContract">
                  Use static membership contract
                </label>
              </div>
              <small className="form-text text-muted">
                Enable membership contracts to retain the default contract first
                page layout. Otherwise, membership contracts will be generated
                using user-defined membership contract templates.
              </small>
            </div>

            {/* Membership Renewal Settings */}
            <div className="mb-4">
              <label
                htmlFor="membershipRenewalConcessions"
                className="form-label"
              >
                Membership renewal - concessions
              </label>
              <input
                type="number"
                className="form-control"
                id="membershipRenewalConcessions"
                defaultValue="2"
              />
              <small className="form-text text-muted">
                Select how many concessions remaining before the 'renew' option
                becomes available.
              </small>
            </div>

            <div className="mb-4">
              <label htmlFor="membershipRenewalTime" className="form-label">
                Membership renewal - time
              </label>
              <input
                type="number"
                className="form-control"
                id="membershipRenewalTime"
                defaultValue="6"
              />
              <small className="form-text text-muted">
                Select how many weeks remaining on membership before the 'renew'
                option becomes available.
              </small>
            </div>
            <div className="">
              <div className="card-body">
                {/* Require initial payment */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="requireInitialPayment"
                      checked={requireInitialPayment}
                      onChange={() =>
                        setRequireInitialPayment(!requireInitialPayment)
                      }
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="requireInitialPayment"
                    >
                      Require an initial payment
                    </label>
                  </div>

                  <div className="ms-4 mt-2">
                    <p className="text-muted">
                      Require first payment to complete membership purchase.
                      Only applicable to One-Off/Paid-in-Full membership types
                    </p>
                    <p className="text-muted small fst-italic">
                      Default: Checked | Last Changed: Dec 3 2019 12:56 pm by
                      Mike Bell
                    </p>
                  </div>
                </div>

                {/* Fill in bank account details */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="fillBankDetails"
                      checked={fillBankDetails}
                      onChange={() => setFillBankDetails(!fillBankDetails)}
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="fillBankDetails"
                    >
                      Fill in bank account details
                    </label>
                  </div>

                  <div className="ms-4 mt-2">
                    <p className="text-muted">
                      Whenever billing information needs to be entered to
                      complete memberships
                    </p>
                    <p className="text-muted small fst-italic">
                      Default: Unchecked
                    </p>
                  </div>
                </div>

                {/* Prorate first payment */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="prorateFirstPayment"
                      checked={prorateFirstPayment}
                      onChange={() =>
                        setProrateFirstPayment(!prorateFirstPayment)
                      }
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="prorateFirstPayment"
                    >
                      Prorate first payment
                    </label>
                  </div>

                  <div className="ms-4 mt-2">
                    <p className="text-muted">
                      Add variable upfront fee when first payment date does not
                      land on membership start date. For example, if a member
                      signs up on the 1st of month and billing is on the 20th of
                      month, it will charge the member 20 days on top of the
                      first payment made. If unchecked this charge will be
                      voided
                    </p>
                    <p className="text-muted small fst-italic">
                      Default: Checked | Last Changed: Dec 3 2019 12:56 pm by
                      Mike Bell
                    </p>
                  </div>
                </div>

                {/* Prorate final payment */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="prorateFinalPayment"
                      checked={prorateFinalPayment}
                      onChange={() =>
                        setProrateFinalPayment(!prorateFinalPayment)
                      }
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="prorateFinalPayment"
                    >
                      Prorate final payment
                    </label>
                  </div>

                  <div className="ms-4 mt-2">
                    <p className="text-muted">
                      Add credit note to reduce the final membership charge by
                      the difference between expiry date and the end of the
                      billing period
                    </p>
                  </div>
                </div>

                {/* Prorate cancellation payment */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="prorateCancellation"
                      checked={prorateCancellation}
                      onChange={() =>
                        setProrateCancellation(!prorateCancellation)
                      }
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="prorateCancellation"
                    >
                      Prorate cancellation payment
                    </label>
                  </div>

                  <div className="ms-4 mt-2">
                    <p className="text-muted">
                      Prorate final billing when member cancels membership prior
                      to next billing cycle
                    </p>
                  </div>
                </div>

                {/* Email confirmation for cancellation */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailCancellation"
                      checked={emailCancellation}
                      onChange={() => setEmailCancellation(!emailCancellation)}
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="emailCancellation"
                    >
                      Email confirmation to member - membership canceled by
                      staff
                    </label>
                  </div>

                  <div className="ms-4 mt-2">
                    <p className="text-muted">
                      Send notification email to member when membership canceled
                      by staff
                    </p>
                    <p className="text-muted small fst-italic">
                      Default: Unchecked
                    </p>

                    <div className="card mt-3 bg-light">
                      <div className="card-body">
                        <h6 className="fw-bold">
                          Email template used for membership cancellation by
                          staff
                        </h6>
                        <p className="text-muted">
                          The email template sent to a member when their
                          membership is canceled by staff.
                        </p>

                        <div className="d-flex align-items-center">
                          <select className="form-select">
                            <option>
                              Member Portal Membership Cancellation
                            </option>
                          </select>
                          <button className="btn btn-outline-primary ms-2">
                            <i className="bi bi-pencil"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card-body">
                {/* Auto-expiry of age restricted memberships */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enableAutoExpiry"
                      checked={enableAutoExpiry}
                      onChange={() => setEnableAutoExpiry(!enableAutoExpiry)}
                    />
                    <label
                      className="form-check-label fw-bold d-flex align-items-center"
                      htmlFor="enableAutoExpiry"
                    >
                      Enable auto-expiry of age restricted memberships
                      <span className="ms-2 text-secondary">
                        <i className="bi bi-box"></i>
                      </span>
                    </label>
                  </div>

                  <div className="ms-4 mt-2">
                    <p className="text-muted">
                      Set membership to expire when member leaves designated age
                      range of membership. Task with 'Age Restricted Membership
                      Expiry' must be created for this to notify the member
                      and/or staff
                    </p>
                  </div>
                </div>

                {/* Display membership section in KPIs */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="displayMembershipKPIs"
                      checked={displayMembershipKPIs}
                      onChange={() =>
                        setDisplayMembershipKPIs(!displayMembershipKPIs)
                      }
                    />
                    <label
                      className="form-check-label fw-bold d-flex align-items-center"
                      htmlFor="displayMembershipKPIs"
                    >
                      Display membership section in KPIs
                      <span className="ms-2 text-secondary">
                        <i className="bi bi-box"></i>
                      </span>
                    </label>
                  </div>

                  <div className="ms-4 mt-2">
                    <p className="text-muted">
                      Display membership report section on KPI reports
                    </p>
                    <p className="text-muted small fst-italic">
                      Default: Unchecked
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

export default MemberShipSettting;
