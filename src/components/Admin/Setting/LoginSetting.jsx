import React from "react";

function LoginSetting() {
  return (
    <>
      <div className="row">
        <h4>Login</h4>
        <div className="col-md-12">
          <div className="card p-4 bg-light">
            <div className="mb-4">
              <label htmlFor="emailTemplateForInvoice" className="form-label">
                Lock screen when inactive
              </label>
              <br />
              <small className="form-text text-muted">
                Select time of inactivity before screen-lock engaged. Will not
                trigger if not set
              </small>
              <select className="form-select" id="emailTemplateForInvoice">
                <option>Not Set</option>
                <option>15 minutes</option>
                <option>1 hour</option>
                <option> 2 hour</option>
                <option>3 hour</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSetting;
