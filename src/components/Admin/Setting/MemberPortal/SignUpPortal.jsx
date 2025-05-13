import React, { useState } from 'react'

function SignUpPortal() {
    const [enableOnlineSignup, setEnableOnlineSignup] = useState(false);
    const [requireCellPhone, setRequireCellPhone] = useState(false);
    const [requireGuardianSignature, setRequireGuardianSignature] = useState(true);
    const [chargeProratedFees, setChargeProratedFees] = useState(false);
    const [requestPreferredName, setRequestPreferredName] = useState(false);
  return (
    <>
       <div className="container mt-4">
      <h4>Sign-Up </h4>
      <div className="card p-4 bg-light">
        <form>
          {/* Enable Online Sign-Up */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableOnlineSignup"
              checked={enableOnlineSignup}
              onChange={(e) => setEnableOnlineSignup(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableOnlineSignup">
              Enable online sign-up
            </label><br/>
            <small>Allow public to sign-up via Member Portal
            </small>
          </div>

          {/* Require Cell Phone Number on Sign-Up */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="requireCellPhone"
              checked={requireCellPhone}
              onChange={(e) => setRequireCellPhone(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="requireCellPhone">
              Require Cell Phone number on sign-up
            </label><br/>
            <small>Require member Cell Phone number for sign-up to complete
            </small>
          </div>

          {/* Require Guardian Signature for Underage Members */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="requireGuardianSignature"
              checked={requireGuardianSignature}
              onChange={(e) => setRequireGuardianSignature(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="requireGuardianSignature">
              Require guardian signature for underage members
            </label><br/>
            <small>Require guardian signature to sign membership terms on behalf of underage members
            </small><br/>
            <small>Default: CheckedLast Changed: May 31 2023 12:49 am by Mike Bell
            </small>
          </div>

          {/* Charge Prorated Fees */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="chargeProratedFees"
              checked={chargeProratedFees}
              onChange={(e) => setChargeProratedFees(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="chargeProratedFees">
              Charge prorated fees for free promotion periods upfront
            </label><br/>
            <small>Extend the first payment date out for free promotion periods until after the promotion period has ended. This will result in any prorates between the end of the promotion period and the first payment date to be included in the upfront fee. If disabled the member can be charged prorated fees during their free promotion time.
            </small>
          </div>

          {/* Request Preferred Name on Sign-Up */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="requestPreferredName"
              checked={requestPreferredName}
              onChange={(e) => setRequestPreferredName(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="requestPreferredName">
              Request preferred name on sign-up
            </label><br/>
            <small>Enable preferred name field on sign-up
            </small>
          </div>

          {/* Submit Button */}
          
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUpPortal
