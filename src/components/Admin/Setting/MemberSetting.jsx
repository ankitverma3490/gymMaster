import React from "react";

function MemberSetting() {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Member </h5>
        <div className="col-md-12">
          <div className="card p-4 bg-light">
            {/* Default 'Add Prospect' */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="defaultAddProspect"
                defaultChecked={false}
              />
              <label className="form-check-label" htmlFor="defaultAddProspect">
                Default 'add prospect'
              </label>
              <small className="form-text text-muted">
                Set default to Add Prospect on Add Member page.
              </small>
            </div>

            {/* Open Member Page in New Tab */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="openMemberPageInNewTab"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="openMemberPageInNewTab"
              >
                Open member page in new tab
              </label>
              <small className="form-text text-muted">
                Set default to open Member page in a new tab.
              </small>
            </div>

            {/* Select Name Order */}
            <div className="mb-4">
              <label htmlFor="selectNameOrder" className="form-label">
                Select name order
              </label>
              <select className="form-select" id="selectNameOrder">
                <option>First name Surname</option>
                <option>Surname First name</option>
              </select>
              <small className="form-text text-muted">
                Select display order for member names on Member page.
              </small>
            </div>

            {/* Enable Home Phone Number Field */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="enableHomePhoneNumberField"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="enableHomePhoneNumberField"
              >
                Enable home phone number field
              </label>
              <small className="form-text text-muted">
                Enable home phone number field on Member page.
              </small>
              <p className="small text-muted">
                <i>Last Changed: Sep 9 2022 7:59 am by Mike Bell</i>
              </p>
            </div>

            {/* Enable Work Phone Number Field */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="enableWorkPhoneNumberField"
                defaultChecked={true}
              />
              <label
                className="form-check-label"
                htmlFor="enableWorkPhoneNumberField"
              >
                Enable work phone number field
              </label>
              <br />
              <small className="form-text text-muted">
                Enable work phone number field on Member page.
              </small>
              <p className="small text-muted">
                <i>Default: Unchecked</i>
              </p>
            </div>

            {/* Enable Date of Birth Field */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="enableDateOfBirthField"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="enableDateOfBirthField"
              >
                Enable date of birth field
              </label>
              <br />
              <small className="form-text text-muted">
                Select if requiring this personal information from members.
              </small>
              <p className="small text-muted">
                <i>Last Changed: Oct 28 2022 1:38 pm by Ashley.</i>
              </p>
            </div>

            {/* Enable Gender Field */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="enableGenderField"
                defaultChecked={false}
              />
              <label className="form-check-label" htmlFor="enableGenderField">
                Enable gender field
              </label>
              <br />
              <small className="form-text text-muted">
                Collect and display gender for members. When disabling, existing
                gender information will be retained but won't be shown, and
                existing gender restrictions will be removed from doors.
              </small>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="">
                  {/* Default Gender */}
                  <div className="mb-4">
                    <label htmlFor="defaultGender" className="form-label">
                      Default gender
                    </label>
                    <select className="form-select" id="defaultGender">
                      <option>No Default</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    <small className="form-text text-muted">
                      Sets default gender when adding a new member.
                    </small>
                  </div>

                  {/* Additional Gender Option */}
                  <div className="mb-4">
                    <label
                      htmlFor="additionalGenderOption"
                      className="form-label"
                    >
                      Additional gender option
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="additionalGenderOption"
                      placeholder="Enter additional gender option"
                    />
                    <small className="form-text text-muted">
                      Choose label for additional gender option. If left blank,
                      additional option will not be displayed.
                    </small>
                  </div>

                  {/* Enable Parent Name Field */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enableParentNameField"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enableParentNameField"
                    >
                      Enable parent name field
                    </label>
                    <small className="form-text text-muted">
                      Enable member parent name field on Member page.
                    </small>
                  </div>

                  {/* Enable Doctor Information Field */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enableDoctorInfoField"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enableDoctorInfoField"
                    >
                      Enable doctor information field
                    </label>
                    <small className="form-text text-muted">
                      Enable doctor information field on Member page.
                    </small>
                  </div>

                  {/* Measurement Due Duration */}
                  <div className="mb-4">
                    <label
                      htmlFor="measurementDueDuration"
                      className="form-label"
                    >
                      Measurement due duration
                    </label>
                    <div className="d-flex gap-2">
                      <input
                        type="number"
                        className="form-control"
                        id="measurementDueDuration"
                        defaultValue="0"
                      />
                      <select
                        className="form-select"
                        id="measurementDueDurationUnit"
                      >
                        <option>days</option>
                        <option>weeks</option>
                        <option>months</option>
                      </select>
                    </div>
                    <small className="form-text text-muted">
                      Duration before member measurement due. Will show on
                      Visitors page. Set to 0 if not required.
                    </small>
                    <p className="small text-muted">
                      <i>Last Changed: Nov 22 2019 10:14 am by Mike Bell</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="">
                  {/* Email Staff on Member Sign-up */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailStaffOnSignUp"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="emailStaffOnSignUp"
                    >
                      Email staff on member sign-up
                    </label>
                    <small className="form-text text-muted">
                      Send an email notification to the company email when staff
                      sign-up a new member or prospect.
                    </small>
                  </div>

                  {/* Enable 'Preferred First Name' Field */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enablePreferredFirstName"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enablePreferredFirstName"
                    >
                      Enable 'Preferred First Name' field
                    </label>
                    <small className="form-text text-muted">
                      Enabling this setting adds a preferred name input as an
                      additional field on the Member Details page. This field
                      can be used in report and templates.
                    </small>
                  </div>

                  {/* Enable Billing Information for Prospects */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enableBillingForProspects"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enableBillingForProspects"
                    >
                      Enable billing information for prospects
                    </label>
                    <small className="form-text text-muted">
                      This determines if the billing section displays on the
                      member profile for prospects.
                    </small>
                  </div>

                  {/* Use Generic Member Avatars */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="useGenericAvatars"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="useGenericAvatars"
                    >
                      Use generic member avatars
                    </label>
                    <small className="form-text text-muted">
                      Use generic members avatars to remove any distinguishing
                      traits or characteristics from randomly allocated avatars.
                    </small>
                  </div>

                  {/* Hide Money Received Graph */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="hideMoneyReceivedGraph"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="hideMoneyReceivedGraph"
                    >
                      Hide money received graph
                    </label>
                    <small className="form-text text-muted">
                      Select to hide the graph from Member page - with button to
                      toggle to show/hide graph.
                    </small>
                  </div>

                  {/* Enable Prospect Funnel */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enableProspectFunnel"
                      defaultChecked={true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enableProspectFunnel"
                    >
                      Enable prospect funnel
                    </label>
                    <small className="form-text text-muted">
                      Enables prospect funnel page and related options.
                    </small>
                    <p className="small text-muted">
                      <i>Last Changed: May 31 2023 12:46 am by Mike Bell</i>
                    </p>
                  </div>

                  {/* Allow Members in Prospect Funnel */}
                  <div className="card p-4 bg-light">
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="allowMembersInProspectFunnel"
                        defaultChecked={false}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="allowMembersInProspectFunnel"
                      >
                        Allow members in prospect funnel
                      </label>
                      <small className="form-text text-muted">
                        Allow members to be added to the funnel via tasks and
                        disable prospect conversion moving members to the final
                        stage.
                      </small>
                    </div>

                    {/* Prospect Funnel Automatic 'Not Interested' Removal Interval */}
                    <div className="mb-4">
                      <label
                        htmlFor="prospectFunnelRemovalInterval"
                        className="form-label"
                      >
                        Prospect funnel automatic 'not interested' removal
                        interval
                      </label>
                      <br />
                      <small>
                        Interval to keep not interested prospects in the
                        prospect funnel before automatic removal
                      </small>
                      <div className="d-flex gap-2">
                        <input
                          type="number"
                          className="form-control"
                          id="prospectFunnelRemovalInterval"
                          defaultValue="0"
                        />
                        <select
                          className="form-select"
                          id="prospectFunnelRemovalIntervalUnit"
                        >
                          <option>days</option>
                          <option>weeks</option>
                          <option>months</option>
                        </select>
                      </div>
                      <small className="form-text text-muted">
                        Set time period before automatic removal.
                      </small>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="prospectFunnelRemovalInterval"
                        className="form-label"
                      >
                        Prospect funnel automatic won prospects removal
                        intervalBeta
                      </label>
                      <br />
                      <small>
                        Interval to keep won prospects in the prospect funnel
                        before automatic removal
                      </small>
                      <div className="d-flex gap-2">
                        <input
                          type="number"
                          className="form-control"
                          id="prospectFunnelRemovalInterval"
                          defaultValue="0"
                        />
                        <select
                          className="form-select"
                          id="prospectFunnelRemovalIntervalUnit"
                        >
                          <option>days</option>
                          <option>weeks</option>
                          <option>months</option>
                          <option>year</option>
                        </select>
                      </div>
                      <small className="form-text text-muted">
                        Set time period before automatic removal.
                      </small>
                    </div>
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

export default MemberSetting;
