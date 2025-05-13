import React from "react";

function ServiceSetting() {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Services </h5>
        <div className="col-lg-12">
          <div className="card p-4 bg-light">
            {/* Require resource to be compatible with service */}
            <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="requireResource"
                />
                <label className="form-check-label" htmlFor="requireResource">
                  Require resource to be compatible with service
                </label>
              </div>
              <small className="form-text text-muted">
                Display resource (facility) compatible with selected service
                only. Default - all available resources will be shown. Also
                applies to equipment, when configured.
              </small>
            </div>

            {/* Display service sort order */}
            <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="displayServiceSort"
                />
                <label
                  className="form-check-label"
                  htmlFor="displayServiceSort"
                >
                  Display service sort order
                </label>
              </div>
              <small className="form-text text-muted">
                Display service type sort order on Service Configuration page.
                Default is alphabetical.
              </small>
            </div>

            {/* Enable semi-private group service bookings */}
            <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="enableSemiPrivateGroup"
                />
                <label
                  className="form-check-label"
                  htmlFor="enableSemiPrivateGroup"
                >
                  Enable semi-private group service bookings
                </label>
              </div>
              <small className="form-text text-muted">
                Allows setting a group service as semi-private where anyone can
                join an existing group session.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSetting;
