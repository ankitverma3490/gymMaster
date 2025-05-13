import React from "react";

function Footer() {
  return (
    <>
      {/* <div
        className="container mt-5 py-4 text-light"
        style={{ backgroundColor: "#1d1d1d" }}
      >
        <div className="row">
          Left Section
          <div className="col-md-5 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/path-to-your-logo.png"
                alt="GymMaster Logo"
                style={{ width: "50px", marginRight: "10px" }}
              />
              <div>
                <h5 className="mb-0 fw-bold">
                  GYM<span style={{ fontWeight: "400" }}>MASTER</span>
                </h5>
                <small>Powering your business</small>
              </div>
            </div>
            <p className="mb-1">
              <span className="text-white-50">
                Contact us for technical assistance
              </span>{" "}
              <span className="text-white">support@airafitness.com</span> or{" "}
              <span className="text-white">815-529-7260</span>
            </p>
            <h6 className="mt-4">Support Hours:</h6>
            <p className="text-white-50 mb-0">
              Monday to Friday 9am to 6pm Central
            </p>
            <small className="text-white-50 d-block mt-3">
              © 2025 GymMaster Online (v1395)
            </small>
          </div>

          Divider
          <div className="col-md-1 d-none d-md-block">
            <div style={{ borderLeft: "1px solid #444", height: "100%" }}></div>
          </div>

          Right Section
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">GymMaster News</h5>

            <div className="mb-4">
              <h6 className="fw-bold mb-1">
                Top Gym Advertising Strategies for 2025
              </h6>
              <small className="text-white-50">Wed, 23 Apr 2025</small>
              <p className="text-white-50 mb-0 small">
                7 Best Gym Advertising Strategies for 2025: Boost Signups,
                Retention, and Community...
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold mb-1">
                Gym Owner Salaries & How to Succeed
              </h6>
              <small className="text-white-50">Wed, 16 Apr 2025</small>
              <p className="text-white-50 mb-0 small">
                Owning a gym can be an incredibly rewarding business, both
                financially and personally...
              </p>
            </div>

            <div>
              <h6 className="fw-bold mb-1">
                Mastering Gym Lead Generation: A Comprehensive Guide
              </h6>
              <small className="text-white-50">Thu, 10 Apr 2025</small>
              <p className="text-white-50 mb-0 small">
                Hey there, gym owners and fitness pros! If you’re reading this,
                you’re probably wondering...
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <footer>
        <div className="container-fluid gm-support-container">
          <div className="row">
            {/* Feedback Column */}
            <div className="col-lg-3 col-md-4 gm-feedback-section">
              <textarea
                className="gm-feedback-textarea"
                placeholder="What can we do to improve GymManagement for you? Please be descriptive."
                defaultValue={""}
              />
              <button className="gm-feedback-btn">
                <i className="fas fa-comments gm-feedback-icon" /> We would love
                your feedback
              </button>
            </div>
            {/* Support Column */}
            <div className="col-lg-3 col-md-4">
              <h2 className="gm-support-title">Support</h2>
              <p className="gm-support-text">Email admin@admin.com</p>
              <p className="gm-support-text">Phone Support +44 123 456 7890</p>
              <div className="d-flex">
                <button className="gm-support-btn">
                  <i className="fas fa-headset gm-support-icon" /> Support Page
                </button>
                <button className="gm-support-btn">
                  <i className="fas fa-key gm-support-icon" /> Order Key Fobs
                </button>
              </div>
            </div>
            {/* Support Hours Column */}
            <div className="col-lg-3 col-md-4">
              <h2 className="gm-support-hours-title">Support Hours:</h2>
              <p className="gm-support-hours-text">
                Monday to Friday 9am to 6pm Central
              </p>
            </div>
            {/* Language Column */}
            <div className="col-lg-3 col-md-12 text-end">
              <span className="gm-ticket-number">#1027040</span>
              <div className="d-flex" style={{ marginTop: 130 }}>
                <select
                  className="form-select w-auto gm-language-btn"
                  aria-label="Default select example"
                >
                  <option selected="">Hindi (IND)</option>
                  <option value="en_US" selected="">
                    English (US)
                  </option>
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
                <button className="gm-language-btn">Set Language</button>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bar */}
        <div className="container-fluid gm-footer-bar">
          <div className="row">
            <div className="col-md-6">
              <span>123 Main Street, Springfield, USA 12345</span>
            </div>
            <div className="col-md-6 text-end">
              <span>
                © 2025 Fitness Software | v1395 Wyvern 65 / 30 members
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
