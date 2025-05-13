import React, { useState } from 'react'

function MembershipPortal() {
    const [enableBillingInfo, setEnableBillingInfo] = useState(false);
    const [enableQuestionnaire, setEnableQuestionnaire] = useState(false);
    const [enableRenewal, setEnableRenewal] = useState(false);
    const [renewalDate, setRenewalDate] = useState(false);
    const [rechargeSignUpFee, setRechargeSignUpFee] = useState(false);
    const [cancelMembershipPeriod, setCancelMembershipPeriod] = useState('N/A');
    const [membershipNoticePeriod, setMembershipNoticePeriod] = useState("");
    const [displayCostExcludingTax, setDisplayCostExcludingTax] = useState(false);
    const [displayMultiStepMembershipList, setDisplayMultiStepMembershipList] = useState(false);
    const [weeklyText, setWeeklyText] = useState("");
    const [fortnightlyText, setFortnightlyText] = useState("");
    const [monthlyText, setMonthlyText] = useState("");
    const [enableLinkedSignup, setEnableLinkedSignup] = useState(false);
    const [billImmediately, setBillImmediately] = useState(false);
    const [requireMembership, setRequireMembership] = useState(false);
    const [cancellationTemplate, setCancellationTemplate] = useState('MP Membership Cancellation Requested');
    const [reSignAgreement, setReSignAgreement] = useState(false);
    const [holdRequestTemplate, setHoldRequestTemplate] = useState('MP Membership Hold Requested');
  
  return (
    <>
      <div className="container mt-4">
      <h4>Membership </h4>
      <div className="card p-4 bg-light">
        <form>
          {/* Enable Billing Information */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableBillingInfo"
              checked={enableBillingInfo}
              onChange={(e) => setEnableBillingInfo(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableBillingInfo">
              Take billing information/payment with Sign & Complete
            </label><br/>
            <span>Request billing details when completing a membership with Sign & Complete. Payment will also be taken based on the "Bill Immediately" settings in Member Portal settings.
            </span><br/>
            <small>Last Changed: Nov 7 2024 6:09 pm by Mike Bell
            </small>
          </div>

          {/* Enable Questionnaire After Add Membership */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableQuestionnaire"
              checked={enableQuestionnaire}
              onChange={(e) => setEnableQuestionnaire(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableQuestionnaire">
              Enable questionnaire after add membership
            </label><br/>
            <span>
            Redirect member to complete questionnaire after purchase of additional membership

            </span>
          </div>

          {/* Enable Membership Renewal */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableRenewal"
              checked={enableRenewal}
              onChange={(e) => setEnableRenewal(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableRenewal">
              Enable membership renewal via Member Portal
            </label><br/>
            <span>Allow members to renew their membership via online portal
            </span>
          </div>

          {/* Renewal Date Option */}
          <div className='card p-4 bg-light'>         
             {enableRenewal && (
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="renewalDate"
                checked={renewalDate}
                onChange={(e) => setRenewalDate(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="renewalDate">
                Renewal date from end-date of previous membership
              </label><br/>
              <span>Start renewal from end-date of original membership, even if membership is renewed prior to end-date. This does not affect concession-based memberships, as those will always renew on the current date instead of the membership's end-date.
              </span>
            </div>
          )}

          {/* Recharge Sign-Up Fee */}
          {enableRenewal && (
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rechargeSignUpFee"
                checked={rechargeSignUpFee}
                onChange={(e) => setRechargeSignUpFee(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="rechargeSignUpFee">
                Recharge sign-up fee
              </label><br/>
              <small>Require sign-up fee to be paid for each new membership purchase
              </small>
            </div>
          )}
</div>

          {/* Membership Cancellation Option */}
          <div className="mb-3 mt-4">
            <label htmlFor="cancelMembershipPeriod" className="form-label">
              Enable membership cancellation via Member Portal
            </label><br/>
            <small>Allow members to cancel membership / request membership cancellation online
            </small>
            <select
              className="form-select"
              id="cancelMembershipPeriod"
              value={cancelMembershipPeriod}
              onChange={(e) => setCancelMembershipPeriod(e.target.value)}
            >
              <option value="N/A">N/A</option>
              <option value="1">1 Day</option>
              <option value="7">7 Days</option>
              <option value="30">30 Days</option>
            </select>
            <small>Last Changed: Mar 18 2021 10:20 am by Lizzie Kube
            </small>
          </div>

          <div className="card p-4 bg-light">
          <div className="mb-3">
            <label htmlFor="membershipNoticePeriod" className="form-label">
              Membership cancellation notice period
            </label><br/>
            <small>Select required notice period before membership can be canceled
            </small>
            <select
              id="membershipNoticePeriod"
              className="form-select"
              value={membershipNoticePeriod}
              onChange={(e) => setMembershipNoticePeriod(e.target.value)}
            >
              <option value="">Select a period</option>
              <option value="seconds">Seconds</option>
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
              <option value="years">Years</option>
            </select>
          </div>
          </div>

          {/* Display Membership Cost Excluding Tax */}
          <div className="form-check mb-3 mt-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="displayCostExcludingTax"
              checked={displayCostExcludingTax}
              onChange={(e) => setDisplayCostExcludingTax(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="displayCostExcludingTax">
              Display membership cost excluding tax
            </label><br/>
            <small>Display membership cost broken down; cost excluding tax, with tax amount shown
            </small>
          </div>

          {/* Display Multi-step Membership List */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="displayMultiStepMembershipList"
              checked={displayMultiStepMembershipList}
              onChange={(e) => setDisplayMultiStepMembershipList(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="displayMultiStepMembershipList">
              Display multi-step membership list
            </label><br/>
            <small>Enable memberships to be displayed by Category first, then Membership. Advised when many membership options available online
            </small><br/>
            <small>Last Changed: Dec 16 2019 6:52 pm by airafitness
            </small>
          </div>

          {/* Replace 'Weekly' Text */}
          <div className="mb-3">
            <label htmlFor="weeklyText" className="form-label">
              Replace 'Weekly' text with:
            </label>
            <br/>
            <small>Choose alternative description for Weekly membership payment schedule
            </small>
            <input
              type="text"
              className="form-control"
              id="weeklyText"
              value={weeklyText}
              onChange={(e) => setWeeklyText(e.target.value)}
            />
          </div>

          {/* Replace 'Fortnightly' Text */}
          <div className="mb-3">
            <label htmlFor="fortnightlyText" className="form-label">
              Replace 'Fortnightly' text with:
            </label><br/>
            <small>Choose alternative description for Fortnightly membership payment schedule
            </small>
            <input
              type="text"
              className="form-control"
              id="fortnightlyText"
              value={fortnightlyText}
              onChange={(e) => setFortnightlyText(e.target.value)}
            />
          </div>

          {/* Replace 'Monthly' Text */}
          <div className="mb-3">
            <label htmlFor="monthlyText" className="form-label">
              Replace 'Monthly' text with:
            </label><br/>
            <small>Choose alternative description for Monthly membership payment schedule
            </small>
            <input
              type="text"
              className="form-control"
              id="monthlyText"
              value={monthlyText}
              onChange={(e) => setMonthlyText(e.target.value)}
            />
            <small>Last Changed: Apr 20 2023 6:04 pm by Mike Bell
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="monthlyText" className="form-label">
            Replace 'Full Cost' text with:
            </label><br/>
            <small>Choose alternative description when membership payment is in full

            </small>
            <input
              type="text"
              className="form-control"
              id="monthlyText"
              value={monthlyText}
              onChange={(e) => setMonthlyText(e.target.value)}
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="monthlyText" className="form-label">
            Replace 'Sign-up Fee' text with:
            </label><br/>
            <small>Choose alternative description for 'Sign-up Fee'

            </small>
            <input
              type="text"
              className="form-control"
              id="monthlyText"
              placeholder='Enrollment Fee'
              value={monthlyText}
              onChange={(e) => setMonthlyText(e.target.value)}
            />
            <small>Default Value: Signup FeeLast Changed: Dec 14 2024 9:36 pm by Mike Bell

            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="monthlyText" className="form-label">

            Enable selection of membership start date            </label><br/>
            <small>Allow members to select membership start date on sign-up

            </small>
           
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableLinkedSignup"
              checked={enableLinkedSignup}
              onChange={(e) => setEnableLinkedSignup(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableLinkedSignup">
              Enable linked member sign-up
            </label><br/>
            <small>Allow members to add linked members during online sign-up and from their profile. This will add parent name field to sign-up form, showing list of linked members on member's profile when logged in
            </small>
          </div>

          {/* Bill Immediately for Linked Members */}
          <div className="card p-4 bg-light">
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="billImmediately"
              checked={billImmediately}
              onChange={(e) => setBillImmediately(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="billImmediately">
              Bill immediately for linked-member membership fees
            </label><br/>
            <small>When adding giving new linked members their own membership, bill for their membership fee immediately.
            </small>
          </div>

          {/* Require Membership on Linked Members */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="requireMembership"
              checked={requireMembership}
              onChange={(e) => setRequireMembership(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="requireMembership">
              Require membership on linked members
            </label><br/>
            <small>Prevent adding linked members without either their own membership or being added to a shared membership.
            </small>
          </div>
          </div>

          {/* Membership Cancellation Request Template */}
          <div className="mb-3 mt-4">
            <label htmlFor="cancellationTemplate" className="form-label">
              Membership cancellation request received template
            </label><br/>
            <small>Template used to notify a member that the Club has received their cancellation request.
            </small>
            <div className='d-flex gap-2'>
            <select
              id="cancellationTemplate"
              className="form-select"
              value={cancellationTemplate}
              onChange={(e) => setCancellationTemplate(e.target.value)}
            >
              <option value="MP Membership Cancellation Requested">MP Membership Cancellation Requested</option>
              <option value="MP Membership Cancellation Acknowledged">MP Membership Cancellation Acknowledged</option>
            </select>
            <div>
                <button className='btn btn-secondary'><i class="fa-solid fa-pen"></i></button>
            </div>
            </div>
          </div>

          {/* Re-sign Agreement on Adding New Membership */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="reSignAgreement"
              checked={reSignAgreement}
              onChange={(e) => setReSignAgreement(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="reSignAgreement">
              Members must re-sign any agreements when adding a new membership
            </label><br/>
            <small>Members will be forced to re-sign any agreements when adding a new membership online. This will ignore if the member is still covered by a previous signing.
            </small>
          </div>

          {/* Membership Hold Request Template */}
          <div className="mb-3">
            <label htmlFor="holdRequestTemplate" className="form-label">
              Membership hold request received template
            </label><br/>
            <small>Template used to notify a member that the Club has received their hold request.
            </small>
            <div className='d-flex gap-2'>
            <select
              id="holdRequestTemplate"
              className="form-select"
              value={holdRequestTemplate}
              onChange={(e) => setHoldRequestTemplate(e.target.value)}
            >
              <option value="MP Membership Hold Requested">MP Membership Hold Requested</option>
              <option value="MP Membership Hold Acknowledged">MP Membership Hold Acknowledged</option>
            </select>
            <div>
                <button className='btn btn-secondary'><i class="fa-solid fa-pen"></i></button>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default MembershipPortal
