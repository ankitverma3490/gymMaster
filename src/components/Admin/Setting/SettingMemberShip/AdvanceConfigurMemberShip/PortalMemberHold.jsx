import React from "react";

function PortalMemberHold() {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Membership Hold </h5>
        <div className="col-md-12">
          <div className="card p-4 bg-light">
            {/* Default Hold Type */}
            <div className="mb-4">
              <label htmlFor="defaultHoldType" className="form-label">
                Default hold type
              </label>
              <br />

              <span>
                Select default configuration when adding membership hold:{" "}
              </span>
              <br />
              <span>Free: Member doesn't pay</span>
              <br />
              <span>Setup Cost: Pay a one-off fee</span>
              <br />
              <span>
                Ongoing Fee*: Regular membership due is altered for the period
              </span>
              <br />
              <span>
                Continue Regular Billing*: Pays full amount during hold
              </span>
              <br />
            </div>

            <div className="mt-2">
              <small className="form-text text-muted">
                * Not available while Disable Billing During Holds is checked.
              </small>
              <select
                id="defaultHoldType"
                className="form-select"
                defaultValue="Free"
              >
                <option value="Free">Free: Member doesn't pay</option>
                <option value="SetupCost">Setup Cost: Pay a one-off fee</option>
                <option value="OngoingFee">
                  Ongoing Fee: Regular membership due is altered for the period
                </option>
              </select>
              <small>
                Default Value: FreeLast Changed: Mar 27 2025 3:15 pm by Marisa
                Campbell
              </small>
            </div>
            {/* Default Ongoing Fee */}
            <div className="mb-4 mt-3">
              <label htmlFor="defaultOngoingFee" className="form-label">
                Default ongoing fee for holds
              </label>
              <br />
              <small className="form-text text-muted">
                Default fee used for adding holds with ongoing fee.
              </small>
              <input
                type="number"
                id="defaultOngoingFee"
                className="form-control"
                defaultValue="10"
              />
            </div>

            {/* Default Setup Cost */}
            <div className="mb-4">
              <label htmlFor="defaultSetupCost" className="form-label">
                Default setup cost for holds
              </label>
              <br />
              <small className="form-text text-muted">
                Default fee used for adding holds with setup cost.
              </small>
              <input
                type="number"
                id="defaultSetupCost"
                className="form-control"
                defaultValue="0"
              />
            </div>

            {/* Cancel Bookings During Hold */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="cancelBookingsDuringHold"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="cancelBookingsDuringHold"
              >
                Cancel bookings during hold
              </label>
              <small className="form-text text-muted">
                All bookings in cancel bookings preview will automatically be
                selected for cancellation.
              </small>
            </div>

            {/* Disable Billing During Hold */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="disableBillingDuringHold"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="disableBillingDuringHold"
              >
                Disable billing during hold
              </label>
              <small className="form-text text-muted">
                Disable billing while member is on hold. Charges will still be
                generated, but not collected until the hold ends. However, the
                member may still be billed during the hold period.
              </small>
            </div>

            {/* Disable Benefit Generation During Hold */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="disableBenefitGenerationDuringHold"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="disableBenefitGenerationDuringHold"
              >
                Disable benefit generation during hold
              </label>
              <small className="form-text text-muted">
                Select to disable the generation of member benefits during the
                hold period.
              </small>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="">
                  {/* Disable Unlimited Benefits During Hold */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="disableUnlimitedBenefitsDuringHold"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="disableUnlimitedBenefitsDuringHold"
                    >
                      Disable unlimited benefits during hold
                    </label>
                    <small className="form-text text-muted">
                      Disable benefit usage for unlimited benefits while member
                      is on hold. This will not affect benefits with limited
                      uses.
                    </small>
                  </div>

                  {/* Yearly Hold Limit Length */}
                  <div className="mb-4">
                    <label
                      htmlFor="yearlyHoldLimitLength"
                      className="form-label"
                    >
                      Yearly hold limit length
                    </label>
                    <input
                      type="number"
                      id="yearlyHoldLimitLength"
                      className="form-control"
                      placeholder="Enter the number of days"
                      min="1"
                    />
                    <small className="form-text text-muted">
                      Total amount of time a member is allowed to be 'on hold'
                      per year, based on their join date. This affects both
                      holds added by the member and by staff.
                    </small>
                  </div>

                  {/* Yearly Hold Limit Count */}
                  <div className="mb-4">
                    <label
                      htmlFor="yearlyHoldLimitCount"
                      className="form-label"
                    >
                      Yearly hold limit count
                    </label>
                    <input
                      type="number"
                      id="yearlyHoldLimitCount"
                      className="form-control"
                      placeholder="Enter number of times"
                      min="1"
                    />
                    <small className="form-text text-muted">
                      Total number of times a member is allowed to be 'on hold'
                      per year, based on their join date. This affects both
                      holds added by the member and by staff.
                    </small>
                  </div>

                  {/* Gifted Time Extends Minimum Term */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="giftedTimeExtendsMinimumTerm"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="giftedTimeExtendsMinimumTerm"
                    >
                      Gifted time extends minimum term
                    </label>
                    <small className="form-text text-muted">
                      Gifted time within minimum term will extend membership
                      minimum term.
                    </small>
                  </div>

                  {/* Mass Hold Tool */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="massHoldTool"
                      defaultChecked={false}
                    />
                    <label className="form-check-label" htmlFor="massHoldTool">
                      Mass hold tool
                    </label>
                    <small className="form-text text-muted">
                      This tool allows you to add holds to multiple members at
                      once, based on their membership type and club.
                    </small>
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

export default PortalMemberHold;
