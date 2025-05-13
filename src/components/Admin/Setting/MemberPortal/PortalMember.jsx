import React, { useState } from 'react'

function PortalMember() {
    const [enableMemberPhotoUpload, setEnableMemberPhotoUpload] = useState(false);
  const [enableFileUpload, setEnableFileUpload] = useState(false);
  const [showAccountBalance, setShowAccountBalance] = useState(true);
  const [enableMemberActivitySummary, setEnableMemberActivitySummary] = useState(false);
  const [weeklyVisitStreak, setWeeklyVisitStreak] = useState(0);
  return (
    <>
       <div className="container mt-4">
      <h4>Member </h4>
      <div className="row">
        <div className="col-md-12">
            <div className="card p-4 bg-light">
            <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableMemberPhoto"
              checked={enableMemberPhotoUpload}
              onChange={(e) => setEnableMemberPhotoUpload(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableMemberPhotoUpload">
            Enable online login
            </label><br/>
            <small>Allow members to log in to their account online
            </small>
          </div>

           
      <div className="card p-4 bg-light">
        <form>
        <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableMemberPhotoUpload"
              checked={enableMemberPhotoUpload}
              onChange={(e) => setEnableMemberPhotoUpload(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableMemberPhotoUpload">
            Allow only current members to access portal
            </label><br/>
            <small>Prevent members who do not hold a current membership from logging into Member Portal
            </small><br/>
            <small>Default: UncheckedLast Changed: Jul 11 2022 10:36 pm by Mike Bell
            </small>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableMemberPhotoUpload"
              checked={enableMemberPhotoUpload}
              onChange={(e) => setEnableMemberPhotoUpload(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableMemberPhotoUpload">
            Allow first password = phone numberDeprecated            </label><br/>
            <small>Allow first login only to use member phone number as password. Individual password must be set during first login

            </small><br/>
            <small>Default: Unchecked

            </small>
          </div>

          {/* Enable Member Photo Upload */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableMemberPhotoUpload"
              checked={enableMemberPhotoUpload}
              onChange={(e) => setEnableMemberPhotoUpload(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableMemberPhotoUpload">
              Enable member photo upload
            </label>
            <br/>
            <small>Allow members to upload own profile photo online
            </small><br/>
            <small>Default: UncheckedLast Changed: Jul 24 2023 4:53 pm by Mike Bell
            </small>
          </div>

          {/* Enable File Upload */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableFileUpload"
              checked={enableFileUpload}
              onChange={(e) => setEnableFileUpload(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableFileUpload">
              Enable file upload
            </label><br/>
            <small>Allow members to upload files to their communication online
            </small>
          </div>

          {/* Show Account Balance */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="showAccountBalance"
              checked={showAccountBalance}
              onChange={(e) => setShowAccountBalance(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="showAccountBalance">
              Show account balance
            </label><br/>
            <samp>Allow members to view current account balance online
            </samp>
            <br/>
            <small>Default: CheckedLast Changed: Jan 15 2023 4:59 pm by Mike Bell
            </small>
          </div>

          {/* Enable Member Activity Summary */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="enableMemberActivitySummary"
              checked={enableMemberActivitySummary}
              onChange={(e) => setEnableMemberActivitySummary(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableMemberActivitySummary">
              Enable member activity summary
            </label><br/>
            <span>Allow member to view gym activity summary online
            </span>
          </div>

          {/* Display Weekly Visit Streak */}
          <div className="mb-3">
            <label htmlFor="weeklyVisitStreak" className="form-label">
              Display weekly visit streak
            </label><br/>
           
            <input
              type="number"
              className="form-control"
              id="weeklyVisitStreak"
              value={weeklyVisitStreak}
              onChange={(e) => setWeeklyVisitStreak(e.target.value)}
            />
            <small className="form-text text-muted">
              Select # weekly/week visits before displaying 'visit streak'. Select '0' to disable feature.
            </small>
          </div>

          
        </form>
      </div>
    </div>
    </div>
        </div>
      </div>
    </>
  )
}

export default PortalMember
