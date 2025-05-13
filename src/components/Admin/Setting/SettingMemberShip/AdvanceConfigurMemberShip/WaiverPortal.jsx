import React from "react";

function WaiverPortal() {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Waivers </h5>
        <div className="col-lg-12">
          <div className="card p-4 bg-light">
            {/* Default Waiver */}
            <div className="mb-4">
              <label htmlFor="defaultWaiver" className="form-label">
                Default waiver for members and prospects
              </label>
              <select
                id="defaultWaiver"
                className="form-select"
                defaultValue="None Selected"
              >
                <option value="None Selected">None Selected</option>
                <option value="Waiver/Terms and Conditions">
                  Waiver/Terms and Conditions
                </option>
                <option value="Other Waiver">Other Waiver</option>
              </select>
              <small className="form-text text-muted">
                Default waiver used for new members and prospects.
              </small>
            </div>

            {/* Default Child Waiver */}
            <div className="mb-4">
              <label htmlFor="defaultChildWaiver" className="form-label">
                Default child waiver
              </label>
              <select
                id="defaultChildWaiver"
                className="form-select"
                defaultValue="Waiver/Terms and Conditions"
              >
                <option value="Waiver/Terms and Conditions">
                  Waiver/Terms and Conditions
                </option>
                <option value="Other Child Waiver">Other Child Waiver</option>
              </select>
              <small className="form-text text-muted">
                Default waiver used for child-age members without current
                membership.
              </small>
            </div>

            {/* Adult Age Limit */}
            <div className="mb-4">
              <label htmlFor="adultAgeLimit" className="form-label">
                Adult age limit
              </label>
              <input
                type="number"
                className="form-control"
                id="adultAgeLimit"
                defaultValue="18"
              />
              <small className="form-text text-muted">
                Age at which a member is considered 'adult' for
                waiver/membership purposes.
              </small>
            </div>

            {/* Linked Members Can Be Covered by Waivers */}
            <div className="mb-4 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="linkedMembersCovered"
              />
              <label
                className="form-check-label"
                htmlFor="linkedMembersCovered"
              >
                Linked members can be covered by waivers
              </label>
              <br />
              <small className="form-text text-muted">
                List of linked members will be displayed and can be selected
                when signing the waiver.
              </small>
            </div>

            {/* Save PDF When Agreement is Signed */}
            <div className="mb-4 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="savePDF"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="savePDF">
                Save PDF when agreement is signed
              </label>
              <br />
              <small className="form-text text-muted">
                Save a PDF copy of any agreement and signature to the member's
                communication when signed through Member Portal.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WaiverPortal;
