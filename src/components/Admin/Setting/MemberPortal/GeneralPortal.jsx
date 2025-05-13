import React from "react";

function GeneralPortal() {
  return (
    <>
      <h5>General</h5>
      <form className="border roounde-2 p-2">
        <div className="form-check">
          <label className="form-check-label" htmlFor="use24HourFormat">
            Member Portal home page header
          </label>
          <p className="small text-muted">
            Choose header to be displayed on home page of Member Portal
          </p>
          <input
            type="text"
            className="form-control"
            placeholder="Aira Fitness Member Portal"
          />
          <small>Default Value: GymMaster Member Portal</small>
        </div>

        <div className="form-check mt-3">
          <label className="form-check-label" htmlFor="enableReadabilityMode">
            Default language
          </label>
          <p className="small text-muted">
            Select default language for Member Portal. Members can change
            language settings in profile
          </p>
          <select
            class="form-control"
            id="mp_default_languageid"
            name="mp_default_language"
            children=""
          >
            <option value="">N/A</option>
            <option value="en_US">English (US)</option>
            <option value="en_GB">English (UK)</option>
            <option value="ar">العَرَبِيَّة‎</option>
            <option value="zh">中文(简体)</option>
            <option value="zh_Hant_HK">中文(香港)</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="pt">Português</option>
            <option value="fi">Suomi</option>
            <option value="it">Italiano</option>
            <option value="ja">日本語</option>
            <option value="th">ภาษาไทย</option>
            <option value="nl">Nederlands</option>
            <option value="vi">Tiếng Việt</option>
            <option value="ko">한국어</option>
          </select>
          <small>Last Changed: Mar 7 2023 9:55 pm by airafitness</small>
        </div>

        <div className="form-check mt-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="enableTooltips"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="enableTooltips">
            Use white text instead of black{" "}
          </label>
          <p className="small text-muted">
            Set text color to white when embedded in host website. Use when host
            page has dark background
          </p>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="enableManualClockin"
          />
          <label className="form-check-label" htmlFor="enableManualClockin">
            Display club logo{" "}
            <span
              className=" p-1 rounded"
              style={{ background: "#fdeadc", color: "red" }}
            >
              Beta
            </span>
          </label>
          <p className="small text-muted">Display club logo on all pages</p>
          <small>Last Changed: Aug 24 2022 10:34 pm by Mike Bell</small>
        </div>

        {/* <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="enableMobileAppAccess"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="enableMobileAppAccess">
            Enable mobile app access for members
          </label>
          <p className="small text-muted">
            Allow members to access Member Portal via mobile app
          </p>
        </div> */}

        <div className="row mb-3 mt-2">
          <div className="col-md-12 ">
            <div className="card p-4">
              {/* Default App Notifications */}
              <div className="form-check mb-3 ">
                <label
                  className="form-check-label"
                  htmlFor="enableManualClockin"
                >
                  Display club logo{" "}
                  <span
                    className=" p-1 rounded"
                    style={{ background: "#fdeadc", color: "red" }}
                  >
                    Beta
                  </span>
                </label>
                <p className="small text-muted">
                  Display set club logo on all pages. Set to 'none' to choose no
                  logo
                </p>
                <select
                  class="form-control mb-2"
                  id="mp_default_logoid"
                  name="mp_default_logo"
                  children=""
                >
                  <option value="">None Selected</option>
                  <option value="15">Golf Simulator</option>
                </select>
                <small>Last Changed: Aug 4 2023 8:54 am by Mike Bell</small>
              </div>

              {/* Assign Bluetooth Access Tokens by Default */}

              {/* Assign Bluetooth Access Token when Booking */}
              {/* <div className="form-check mb-3">
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
                  Creates and assigns a Bluetooth Access Token to members when
                  they make a class or service booking via the Member's Portal
                </p>
                <p className="small text-muted">
                  <i>Last Changed: Jun 14 2023 9:19 pm by airafitness</i>
                </p>
              </div> */}
            </div>
          </div>
        </div>
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
            Shift to mobile-friendly page design on mobile devices
          </label>
          <p className="small text-muted">
            Enable mobile device to break out of parent website to shift to page
            designed for mobile access
          </p>
          <p className="small text-muted">
            <i>Last Changed: Nov 17 2024 10:17 pm by Mike Bell</i>
          </p>
        </div>
        <div className="form-check mt-3  ">
          <input
            type="checkbox"
            className="form-check-input"
            id="enableAppNotifications"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="enableAppNotifications">
            Enable language selection on the Login page
            <span className="badge bg-warning ms-2">Beta</span>
          </label>
          <p className="small text-muted">
            Enabling this feature will display a language selection dropdown on
            the login page. New members or prospects can choose their preferred
            language right from the start. Once selected, their account will
            automatically use that language every time they log in.
          </p>
        </div>
      </form>
    </>
  );
}

export default GeneralPortal;
