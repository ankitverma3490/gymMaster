import React from "react";
import "./StartUp.css";
import Footer from "../../Layout/Footer";

const StartUp = () => {
  return (
    <>
      <div className="container">
        <h4 className="my-4">Start Up</h4>
        <div className="gm-container card my-4 shadow-sm">
          <div className="row">
            <div className="col-md-4">
              <div className="gm-left-panel">
                <div className="gm-section-title">Tasks Completion</div>
                <div className="gm-progress-container">
                  <div className="gm-progress-circle">
                    <div className="gm-progress-ring" />
                    <div className="gm-progress-center">
                      <div className="gm-progress-value">0%</div>
                    </div>
                  </div>
                </div>
                <div className="gm-doors-section">
                  <div className="gm-doors-title">Doors</div>
                  <div className="table-responsive">
                  <table className="gm-door-table">
                    <thead>
                      <tr>
                        <th>Door Name</th>
                        <th>Door Status</th>
                        <th>Gatekeeper Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>golf simulator</td>
                        <td className="gm-status-unlocked">Unlocked</td>
                        <td className="gm-status-connected">Connected</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="gm-right-panel">
                <div className="gm-tutorial-title">Start Up Tutorial</div>
                <div className="gm-tutorial-desc">
                  GymMaster's Tutorial system is a great place to get started
                  and learn your way around.
                </div>
                <div className="gm-onboarding-section">
                  <p>
                    Follow the below quick guides to start your GymMaster
                    set-up.
                  </p>
                </div>
                <div className="accordion">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Club Details Part 1
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Allows you to configure a range of basic contact and
                            business related fields to ensure various GymMaster
                            functions display correctly.
                          </p>
                          <div className="d-flex justify-content-center">
                            <button
                              className="my-4 border-0 px-3 py-2 rounded"
                              style={{
                                backgroundColor: "#3177b3",
                                color: "white",
                              }}
                            >
                              Set up
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item my-1 border rounded">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Tax Rates
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Configuring Tax rates ensures GymMaster can accurately
                          report on transactions.
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            className="my-4 border-0 px-3 py-2 rounded"
                            style={{
                              backgroundColor: "#3177b3",
                              color: "white",
                            }}
                          >
                            Set up
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          User Admin
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          User Admin: Allows for a range of staff settings.
                          Chief among this the ability to configure unique
                          usernames and passwords for staff as well as
                          customizable levels of access to the software. This
                          ensures that front line staff don’t have access to
                          more sensitive data, but also simplifies the interface
                          for them.
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            className="my-4 border-0 px-3 py-2 rounded"
                            style={{
                              backgroundColor: "#3177b3",
                              color: "white",
                            }}
                          >
                            Set up
                          </button>
                        </div>
                        <div className="mx-4">
                          Staff Access rights allow you to configure the level
                          of access a staff member has within the GymMaster
                          software as well as the features within those areas
                          they can use. The role drop down in each role group
                          allows you to dictate whether the staff member has
                          access to this area and to what degree. Suggestions
                          for the role and details of the limitations are found
                          in the Description field. There are also quick roles
                          at the bottom of the page for zero access, full access
                          and basic access.
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            className="my-4 border-0 px-3 py-2 rounded"
                            style={{
                              backgroundColor: "#3177b3",
                              color: "white",
                            }}
                          >
                            Set up
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          Rosters and Open Hours
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This allows you to configure default availability for
                          both scheduling and access control.
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            className="my-4 border-0 px-3 py-2 rounded"
                            style={{
                              backgroundColor: "#3177b3",
                              color: "white",
                            }}
                          >
                            Set up
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default StartUp;
