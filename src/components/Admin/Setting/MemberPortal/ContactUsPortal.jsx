import React, { useState } from "react";

function ContactUsPortal() {
  const [enableContactUsPage, setEnableContactUsPage] = useState(false);
  const [requestSurname, setRequestSurname] = useState(true);
  const [requestAddress, setRequestAddress] = useState(false);
  const [requestGender, setRequestGender] = useState(false);
  const [requestDob, setRequestDob] = useState(false);
  const [title, setTitle] = useState("Contact Us");
  const [buttonText, setButtonText] = useState("Contact Us");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle your form submission logic
    alert("Changes Saved!");
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <h4>Contact Us Settings</h4>

          {/* Main Content */}
          <div className="col-md-12">
            <div className="card p-4 bg-light">
              <form onSubmit={handleSubmit}>
                {/* Enable Contact Us Page */}
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="enableContactUsPage"
                    checked={enableContactUsPage}
                    onChange={(e) => setEnableContactUsPage(e.target.checked)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="enableContactUsPage"
                  >
                    Enable Contact Us Page
                  </label>
                  <br />
                  <span>
                    Allow members / prospective members to submit inquiries to
                    facility via Contact Us form on Member Portal login page
                  </span>
                  <br />
                  <small>Last Changed: Jul 11 2022 10:08 pm by Mike Bell</small>
                </div>

                {/* Title on Contact Us Page */}
                <div className="card p-4 bg-light">
                  <div className="mb-3">
                    <label htmlFor="contactUsTitle" className="form-label">
                      Title on Contact Us page
                    </label>
                    <br />
                    <small>
                      Choose title for Contact Us page - can be changed
                      depending on intended use
                    </small>
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="contactUsTitle"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <small>
                      Last Changed: Aug 24 2022 10:30 pm by Mike Bell
                    </small>
                  </div>

                  {/* Text on Contact Us Button */}
                  <div className="mb-3">
                    <label htmlFor="contactUsButtonText" className="form-label">
                      Text on Contact Us button
                    </label>
                    <br />
                    <small>
                      Choose text for Contact Us button on Login page
                    </small>
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="contactUsButtonText"
                      value={buttonText}
                      onChange={(e) => setButtonText(e.target.value)}
                    />
                    <small>
                      Last Changed: Aug 24 2022 10:30 pm by Mike Bell
                    </small>
                  </div>

                  {/* Request Surname */}
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestSurname"
                      checked={requestSurname}
                      onChange={(e) => setRequestSurname(e.target.checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="requestSurname"
                    >
                      Request surname on Contact Us form
                    </label>
                    <br />
                    <small>Enable surname field on Contact Us form</small>
                  </div>

                  {/* Request Address */}
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestAddress"
                      checked={requestAddress}
                      onChange={(e) => setRequestAddress(e.target.checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="requestAddress"
                    >
                      Request address details on Contact Us form
                    </label>
                    <br />
                    <small>Enable address fields on Contact Us form</small>
                    <br />
                    <small>Last Changed: Sep 1 2021 3:54 pm by Mike Bell</small>
                  </div>

                  {/* Request Gender */}
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestGender"
                      checked={requestGender}
                      onChange={(e) => setRequestGender(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestGender">
                      Request gender on Contact Us form
                    </label>
                    <br />
                    <small>Enable gender field on Contact us form</small>
                    <br />
                    <small
                      className="btn "
                      style={{ backgroundColor: "#b0b3b7" }}
                    >
                      Default: Unchecked
                    </small>
                  </div>

                  {/* Request Date of Birth */}
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                      Request and require date of birth on Contact Us
                      formDeprecated
                    </label>
                    <br />
                    <small>
                      Enable date of birth field on Contact Us form, field is
                      required if enabled
                    </small>
                    <br />
                    <small
                      className="btn "
                      style={{ backgroundColor: "#b0b3b7" }}
                    >
                      Default: Unchecked
                    </small>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                      Request phone number on Contact Us form
                    </label>
                    <br />
                    <small>
                      Enable contact phone number field on Contact Us form{" "}
                    </small>
                    <br />

                    <div
                      className="card p-4 "
                      style={{ backgroundColor: "light" }}
                    >
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="requestDob"
                          checked={requestDob}
                          onChange={(e) => setRequestDob(e.target.checked)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="requestDob"
                        >
                          Require phone field on Contact Us page
                        </label>
                        <br />
                        <small>Makes phone number field required.</small>
                        <br />
                      </div>
                    </div>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                      Request emergency contact details on Contact Us form
                    </label>
                    <br />
                    <small>
                      Enable emergency details field on Contact Us form
                    </small>
                    <br />
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                      Enable source promotion field on Contact Us page
                    </label>
                    <br />
                    <small>
                      Show "How did you hear about us" drop-down to sign-up
                      page.
                    </small>
                    <br />
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                      Show member photo on Contact Us pageBeta
                    </label>
                    <br />
                    <small>
                      Members will be able to upload their profile photo on the
                      Contact Us page.
                    </small>
                    <br />
                    <small
                      className="btn "
                      style={{ backgroundColor: "#b0b3b7" }}
                    >
                      Default: Unchecked
                    </small>
                    <span>Last Changed: Jul 11 2022 10:08 pm by Mike Bell</span>
                    <div className="card p-4 bg-light mt-3">
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="requestDob"
                          checked={requestDob}
                          onChange={(e) => setRequestDob(e.target.checked)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="requestDob"
                        >
                          Require member photo on Contact Us pageBeta
                        </label>
                        <br />
                        <small>
                          Members will be required to upload their profile photo
                          on the Contact Us page.
                        </small>
                        <br />
                        <small>
                          Last Changed: Jun 14 2023 9:19 pm by airafitness
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                      Enable questionnaire after Contact Us form
                    </label>
                    <br />
                    <small>
                      Redirect member/prospective member to fill out
                      questionnaire, after completion of Contact Us form .
                    </small>
                    <br />

                    <div className="card p-4 bg-light mt-3">
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="requestDob"
                          checked={requestDob}
                          onChange={(e) => setRequestDob(e.target.checked)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="requestDob"
                        >
                          Questionnaire used after Contact Us form
                        </label>
                        <br />
                        <small>
                          This questionnaire will be filled out after completion
                          of Contact Us form
                        </small>
                        <br />
                        <div className="mt-2">
                          <select className="form-select w-100">
                            <option>None Select</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                    Enable waiver after Contact Us form
                    </label>
                    <br />
                    <small>
                    Redirect member/prospective member to sign default waiver, after completion of Contact Us form
                    </small>
                    <br />
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                    URL redirect after completion of Contact Us form
                    </label>
                    <br />
                    <small>
                    Provide URL member/prospective member is redirected to after completion of Contact Us form
                    </small>
                    <div className="mt-3">
                        <input type="text" className="form-control" style={{border:"none"}}/>
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                    Contact Us confirmation message
                    </label>
                    <br />
                    <small>
                    Text displayed to a member/prospect after completion of the Contact Us form
                    </small>
                    <div className="mt-3">
                        <input type="text" className="form-control" placeholder="Thank you for your inquiry." style={{border:"none"}}/>
                    </div>
                    <small>Default Value: Thank you for your inquiry. You will be contacted within 1-2 business days.Last Changed: Feb 4 2025 9:59 pm by airafitness
                    </small>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                    Show photo ID upload on Contact US pageBeta
                    </label>
                    <br />
                    <small>
                    Members will be able to upload their photo ID on the Contact Us page.
                    </small>
                   
                  </div>
                </div>
              </form>
              <div className="form-check mb-3 mt-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="requestDob"
                      checked={requestDob}
                      onChange={(e) => setRequestDob(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="requestDob">
                    Request preferred name on Contact Us form
                     </label>
                    <br />
                    <small>
                    Enable preferred name field on Contact Us form
                    </small>
                  
                  </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPortal;
