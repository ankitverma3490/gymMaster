import React from "react";

function Doors() {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Doors & Readers </h5>
        <div className="col-md-12">
          <div className="card p-4 bg-light">
            {/* Display QR Code on Member Check-in */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="displayQRCodeOnCheckin"
                defaultChecked
              />
              <label
                className="form-check-label"
                htmlFor="displayQRCodeOnCheckin"
              >
                Display QR code on member check-in
              </label>
            </div>

            {/* Display Text-Input Field on Member Check-in */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="displayTextInputOnCheckin"
                defaultChecked
              />
              <label
                className="form-check-label"
                htmlFor="displayTextInputOnCheckin"
              >
                Display text-input field on member check-in
              </label>
              <p className="small text-muted">
                Display text input field on the member check-in page. If using
                the Kiosk App, you may need to clear the app's storage for this
                to take effect.
              </p>
            </div>

            {/* Enable Relaxed Member Searching on Kiosk App */}
            <div className="card p-4 bg-light">
              <div className="form-check mb-4 ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="enableRelaxedMemberSearching"
                />
                <label
                  className="form-check-label"
                  htmlFor="enableRelaxedMemberSearching"
                >
                  Enable relaxed member searching on kiosk app
                </label>
                <p className="small text-muted">
                  Allows kiosk mobile app to search by member name and match
                  members on partial search keywords. NOTE: Enabling this option
                  may allow people to check other members into the facility.
                </p>
              </div>
            </div>
            {/* Swipe Timeout */}
            <div className="mb-4 mt-3">
              <label htmlFor="swipeTimeout" className="form-label">
                Swipe timeout
              </label>
              <div className="d-flex gap-2">
                <input
                  type="number"
                  className="form-control"
                  id="swipeTimeout"
                  defaultValue="5"
                />
                <select className="form-select" id="swipeTimeoutUnit">
                  <option>minutes</option>
                  <option>seconds</option>
                </select>
              </div>
              <small className="form-text text-muted">
                Select time before additional concession/visit is recorded when
                swiping in.
              </small>
            </div>

            {/* Stop After Owe Time */}
            <div className="mb-4">
              <label htmlFor="stopAfterOweTime" className="form-label">
                Stop after owe - time
              </label>
              <div className="d-flex gap-2">
                <input
                  type="number"
                  className="form-control"
                  id="stopAfterOweTime"
                  defaultValue="15"
                />
                <select className="form-select" id="stopAfterOweTimeUnit">
                  <option>days</option>
                  <option>hours</option>
                </select>
              </div>
              <small className="form-text text-muted">
                Select time period member may continue to access the gym when
                money is owed. Some time is required in the case of suspensions
                and handling delays for billing to occur.
              </small>
              <p className="small text-muted">
                <i>
                  Default Value: 15 days. Last Changed: Jul 7 2022 2:04 pm by
                  Dominic Pavell
                </i>
              </p>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="">
                  {/* Stop After Owe - Amount */}
                  <div className="mb-4">
                    <label htmlFor="stopAfterOweAmount" className="form-label">
                      Stop after owe - amount
                    </label>
                    <div className="d-flex gap-2">
                      <input
                        type="number"
                        className="form-control"
                        id="stopAfterOweAmount"
                        defaultValue="10.00"
                      />
                    </div>
                    <small className="form-text text-muted">
                      Select maximum amount member can owe before access is
                      denied to the Club and new bookings are blocked.
                    </small>
                    <p className="small text-muted">
                      <i>
                        Default Value: 50. Last Changed: Jul 7 2022 2:04 pm by
                        Dominic Pavell
                      </i>
                    </p>
                  </div>

                  {/* Warning on Owe */}
                  <div className="mb-4">
                    <label htmlFor="warningOnOwe" className="form-label">
                      Warning on owe
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="warningOnOwe"
                      defaultValue="1"
                    />
                    <small className="form-text text-muted">
                      Display on-screen warning to staff indicating member
                      entering gym owing over certain amount.
                    </small>
                    <p className="small text-muted">
                      <i>Last Changed: Dec 13 2021 5:34 pm by airafitness</i>
                    </p>
                  </div>

                  {/* Grace Period as Membership Expires */}
                  <div className="mb-4">
                    <label htmlFor="gracePeriod" className="form-label">
                      Grace period as membership expires
                    </label>
                    <div className="d-flex gap-2">
                      <input
                        type="number"
                        className="form-control"
                        id="gracePeriod"
                        defaultValue="0"
                      />
                      <select className="form-select" id="gracePeriodUnit">
                        <option>seconds</option>
                        <option>minutes</option>
                        <option>hours</option>
                      </select>
                    </div>
                    <small className="form-text text-muted">
                      Select time period member may continue to access the gym
                      upon membership expiry.
                    </small>
                    <p className="small text-muted">
                      <i>Last Changed: Jun 26 2020 12:01 pm by airafitness</i>
                    </p>
                  </div>

                  {/* Member App Bluetooth Door Access */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="bluetoothDoorAccess"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="bluetoothDoorAccess"
                    >
                      Member App Bluetooth door access
                    </label>
                    <p className="small text-muted">
                      This will allow access to Bluetooth check-in via the
                      Member App.
                    </p>
                    <p className="small text-muted">
                      <i>Last Changed: Jun 14 2023 9:19 pm by airafitness</i>
                    </p>
                  </div>

                  {/* App BLE RSSI */}
                  <div className="mb-4">
                    <label htmlFor="appBleRssi" className="form-label">
                      App BLE RSSI
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="appBleRssi"
                      defaultValue="-45"
                    />
                    <small className="form-text text-muted">
                      RSSI value the Member App will use for BLE readers (-45 is
                      direct, -90 is about 10 meters).
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="">
                  <h5 className="mb-4">Doors & Readers Settings</h5>

                  {/* Automatic Door Status */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="automaticDoorStatus"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="automaticDoorStatus"
                    >
                      Automatic door status
                    </label>
                    <p className="small text-muted">
                      Enables the 'Automatic' status for door readers. Once set,
                      this will unlock and lock the door according to the start
                      and end times of the door's specific roster.
                    </p>
                    <p className="small text-muted">
                      <i>Last Changed: Jun 14 2023 9:19 pm by airafitness</i>
                    </p>
                  </div>

                  {/* Kiosk Check-in Prompt Text */}
                  <div className="mb-4">
                    <label
                      htmlFor="kioskCheckinPromptText"
                      className="form-label"
                    >
                      Kiosk check-in prompt text
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="kioskCheckinPromptText"
                      defaultValue="Please Check In"
                    />
                    <small className="form-text text-muted">
                      Select text to be shown on the kiosk check-in page.
                    </small>
                    <p className="small text-muted">
                      <i>Last Changed: Aug 22 2021 8:09 pm by airafitness</i>
                    </p>
                  </div>

                  {/* Static Check-in QR Codes */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="staticCheckInQRCode"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="staticCheckInQRCode"
                    >
                      Static check-in QR Codes
                    </label>
                    <p className="small text-muted">
                      Adds an option to a door's settings page to download a
                      static version of the check-in QR code. This QR Code can
                      be put up at reception or in front of doors, members can
                      then use this to check in via the Member's App. QR Codes
                      expire after one year, so will need to be re-downloaded
                      after this time frame.
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

export default Doors;
