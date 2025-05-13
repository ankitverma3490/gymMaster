import React from 'react'

function General() {
  return (
    <>
     <h5>General</h5>
              <form className="border roounde-2 p-2">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="use24HourFormat"
                  />
                  <label className="form-check-label" htmlFor="use24HourFormat">
                    Use 24 hour format
                  </label>
                  <p className="small text-muted">
                    Display all times and timestamps in 24hr format
                  </p>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="enableReadabilityMode"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="enableReadabilityMode"
                  >
                    Enable readability mode
                  </label>
                  <p className="small text-muted">
                    Increase text size with darker text
                  </p>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="enableTooltips"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="enableTooltips">
                    Enable tooltips
                  </label>
                  <p className="small text-muted">Enable mouse-over tooltips</p>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="enableManualClockin"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="enableManualClockin"
                  >
                    Enable manual clock-in
                  </label>
                  <p className="small text-muted">
                    Allow manual staff clock-in
                  </p>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="enableMobileAppAccess"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="enableMobileAppAccess"
                  >
                    Enable mobile app access for members
                  </label>
                  <p className="small text-muted">
                    Allow members to access Member Portal via mobile app
                  </p>
                </div>

                <div className="row mb-2">
                  <div className="col-md-12 ">
                    <div className="card p-4">
                      {/* Default App Notifications */}
                      <div className="form-check mb-3 ">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="defaultAppNotifications"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultAppNotifications"
                        >
                          Default app notifications
                        </label>
                        <p className="small text-muted">
                          Send messages by default via App rather than SMS, for
                          members using GymMaster App
                        </p>
                      </div>

                      {/* Assign Bluetooth Access Tokens by Default */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="assignBluetoothAccessTokens"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="assignBluetoothAccessTokens"
                        >
                          Assign Bluetooth access tokens by default
                          <span className="badge bg-warning ms-2">Beta</span>
                        </label>
                        <p className="small text-muted">
                          Default value for a categories Bluetooth Access Token.
                          Enable to update existing categories 'Assign a
                          Bluetooth Access Token' setting
                        </p>
                        <p className="small text-muted">
                          <i>Last Changed: Aug 24 2022 10:34 pm by Mike Bell</i>
                        </p>
                      </div>

                      {/* Assign Bluetooth Access Token when Booking */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="assignBluetoothAccessTokenWhenBooking"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="assignBluetoothAccessTokenWhenBooking"
                        >
                          Assign a Bluetooth access token when booking
                          <span className="badge bg-warning ms-2">Beta</span>
                        </label>
                        <p className="small text-muted">
                          Creates and assigns a Bluetooth Access Token to
                          members when they make a class or service booking via
                          the Member's Portal
                        </p>
                        <p className="small text-muted">
                          <i>
                            Last Changed: Jun 14 2023 9:19 pm by airafitness
                          </i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-check mt-3  ">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="enableAppNotifications"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="enableAppNotifications"
                  >
                    Enable dashboard customization
                    <span className="badge bg-warning ms-2">Beta</span>
                  </label>
                  <p className="small text-muted">
                    Enables dashboard categories & Customize Widgets page
                  </p>
                </div>
              </form>
    </>
  )
}

export default General
