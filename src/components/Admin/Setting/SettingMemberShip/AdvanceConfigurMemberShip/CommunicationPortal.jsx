import React from "react";

function CommunicationPortal() {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Communication </h5>
        <div className="col-md-12">
          <div className=" card p-4 bg-light">
            {/* Auto Email */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoEmail"
                defaultChecked={false}
              />
              <label className="form-check-label" htmlFor="autoEmail">
                Auto email
              </label>
              <p className="small text-muted">
                Send emails to members automatically. When disabled, prevents
                automated task emails only.
              </p>
              <p className="small text-muted">
                <i>Default Value: Unchecked</i>
              </p>
            </div>

            {/* Auto SMS */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSMS"
                defaultChecked={false}
              />
              <label className="form-check-label" htmlFor="autoSMS">
                Auto SMS
              </label>
              <p className="small text-muted">
                Send SMS messages to members automatically when in queue.
              </p>
              <p className="small text-muted">
                <i>Default Value: Unchecked</i>
              </p>
            </div>

            {/* Club Email First */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="clubEmailFirst"
                defaultChecked={false}
              />
              <label className="form-check-label" htmlFor="clubEmailFirst">
                Club email first
              </label>
              <p className="small text-muted">
                Place club email address first in sender dropdown, instead of
                staff email.
              </p>
              <p className="small text-muted">
                <i>Default Value: Unchecked</i>
              </p>
            </div>

            {/* Send Duplicate Emails */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="sendDuplicateEmails"
                defaultChecked={false}
              />
              <label className="form-check-label" htmlFor="sendDuplicateEmails">
                Send duplicate emails
              </label>
              <p className="small text-muted">
                Allow multiple emails to be sent to same address when using
                report 'Email All' feature.
              </p>
            </div>

            {/* Subscribe Members By Default */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="subscribeMembersByDefault"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="subscribeMembersByDefault"
              >
                Subscribe members by default
              </label>
              <p className="small text-muted">
                Subscribe new members to email and SMS/App communication
                automatically.
              </p>
            </div>

            {/* Add Opt-out Option - SMS */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="addOptOutOptionSMS"
                defaultChecked={true}
              />
              <label className="form-check-label" htmlFor="addOptOutOptionSMS">
                Add opt-out option - SMS
              </label>
              <p className="small text-muted">
                Add opt-out message to footer of SMS notifications. Uses minimum
                21 characters.
              </p>
              <p className="small text-muted">
                <i>Default Value: Checked</i>
              </p>
            </div>

            <div className="row mt-2">
              <div className="col-md-12">
                <div className="">
                  {/* Hide Tasks */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="hideTasks"
                      defaultChecked={false}
                    />
                    <label className="form-check-label" htmlFor="hideTasks">
                      Hide tasks
                    </label>
                    <p className="small text-muted">
                      Hide tasks from member communication "All" selection.
                    </p>
                  </div>

                  {/* Email Members on Check-in */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailMembersOnCheckin"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="emailMembersOnCheckin"
                    >
                      Email members on check-in
                    </label>
                    <p className="small text-muted">
                      Send email notification to members when they check into
                      service or class.
                    </p>
                  </div>

                  {/* Email Members When Hold Added */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailMembersWhenHoldAdded"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="emailMembersWhenHoldAdded"
                    >
                      Email members when hold added
                    </label>
                    <p className="small text-muted">
                      Send email notification to members when a hold is applied
                      to their membership by staff.
                    </p>
                  </div>

                  {/* Email Template for Credit Note */}
                  <div className="mb-4">
                    <label htmlFor="creditNoteTemplate" className="form-label">
                      Email template used for credit note
                    </label>
                    <select className="form-select" id="creditNoteTemplate">
                      <option>Select a template</option>
                      <option>Template 1</option>
                      <option>Template 2</option>
                    </select>
                    <small className="form-text text-muted">
                      Select/Edit Credit Note email template - use when sending
                      credit note to member.
                    </small>
                    <p className="small text-muted">
                      <i>Last Changed: Nov 22 2019 10:14 am by Mike Bell</i>
                    </p>
                  </div>

                  {/* External SMTP Server */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="externalSMTPServer"
                      defaultChecked={false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="externalSMTPServer"
                    >
                      External SMTP server
                    </label>
                    <p className="small text-muted">
                      Enables the use of external SMTP server to send emails
                      from instead of no-reply@gymmasteronline.com. Must have
                      username and password set, or will fall back to localhost
                      (which in turn will send from no-reply@gymmasteronline.com
                      through smtp2go).
                    </p>
                    <p className="small text-muted">
                      <i>Last Changed: Jun 14 2023 9:19 pm by airafitness</i>
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

export default CommunicationPortal;
