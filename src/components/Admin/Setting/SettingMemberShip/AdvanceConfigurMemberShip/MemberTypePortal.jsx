import React, { useState } from 'react'

function MemberTypePortal() {
      const [enableEnrollmentLimit, setEnableEnrollmentLimit] = useState(false);
      const [enableAgeRestrictions, setEnableAgeRestrictions] = useState(false);
      const [enablePrerequisiteMemberships, setEnablePrerequisiteMemberships] =
        useState(false);
      const [enableFollowOnMemberships, setEnableFollowOnMemberships] =
        useState(false);
      const [enableBackgroundColorSelection, setEnableBackgroundColorSelection] =
        useState(false);
      const [enableCancellationAgreements, setEnableCancellationAgreements] =
        useState(true);
      const [enableMembershipQuestionnaires, setEnableMembershipQuestionnaires] =
        useState(false);
      const [sortMembershipTypes, setSortMembershipTypes] = useState(true);
      const [enableHideFromReports, setEnableHideFromReports] = useState(false);
      const [blockUnavailableMemberships, setBlockUnavailableMemberships] =
        useState(true);
      const [applyFeeChanges, setApplyFeeChanges] = useState(true);
      const [enableChargePerVisit, setEnableChargePerVisit] = useState(false);

      const CubeIcon = () => (
        <span className="ms-2 text-secondary">
          <i className="bi bi-box"></i>
        </span>
      );

      const BetaBadge = () => (
        <span className="ms-2 badge bg-warning text-dark">Beta</span>
      );
    
      const DeprecatedBadge = () => (
        <span className="ms-2 badge bg-danger text-white">Deprecated</span>
      );
  return (
    <>
       <h5 className="mb-0">Membership Type</h5>
                <div className="card bg-light mt-3 ">
                  <div className=" bg-light"></div>
                  <div className="card-body">
                    {/* Enable enrollment limit */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableEnrollmentLimit"
                          checked={enableEnrollmentLimit}
                          onChange={() =>
                            setEnableEnrollmentLimit(!enableEnrollmentLimit)
                          }
                        />
                        <label
                          className="form-check-label fw-bold d-flex align-items-center"
                          htmlFor="enableEnrollmentLimit"
                        >
                          Enable enrollment limit
                          <CubeIcon />
                        </label>
                      </div>

                      <div className="ms-4 mt-2">
                        <p className="text-muted">
                          Allow enrollment limit to be set when creating
                          membership type
                        </p>
                      </div>
                    </div>

                    {/* Enable age restrictions */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableAgeRestrictions"
                          checked={enableAgeRestrictions}
                          onChange={() =>
                            setEnableAgeRestrictions(!enableAgeRestrictions)
                          }
                        />
                        <label
                          className="form-check-label fw-bold d-flex align-items-center"
                          htmlFor="enableAgeRestrictions"
                        >
                          Enable age restrictions
                          <CubeIcon />
                        </label>
                      </div>

                      <div className="ms-4 mt-2">
                        <p className="text-muted">
                          Allow age restrictions to be selected when creating
                          membership type
                        </p>
                      </div>
                    </div>

                    {/* Enable prerequisite memberships */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enablePrerequisiteMemberships"
                          checked={enablePrerequisiteMemberships}
                          onChange={() =>
                            setEnablePrerequisiteMemberships(
                              !enablePrerequisiteMemberships
                            )
                          }
                        />
                        <label
                          className="form-check-label fw-bold d-flex align-items-center"
                          htmlFor="enablePrerequisiteMemberships"
                        >
                          Enable prerequisite memberships
                          <CubeIcon />
                        </label>
                      </div>

                      <div className="ms-4 mt-2">
                        <p className="text-muted">
                          Allow selected memberships to be available only to
                          those who have held at least one of the specified
                          'prerequisite' memberships
                        </p>
                      </div>
                    </div>

                    {/* Enable follow-on memberships */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableFollowOnMemberships"
                          checked={enableFollowOnMemberships}
                          onChange={() =>
                            setEnableFollowOnMemberships(
                              !enableFollowOnMemberships
                            )
                          }
                        />
                        <label
                          className="form-check-label fw-bold d-flex align-items-center"
                          htmlFor="enableFollowOnMemberships"
                        >
                          Enable follow-on memberships
                          <CubeIcon />
                        </label>
                      </div>

                      <div className="ms-4 mt-2">
                        <p className="text-muted">
                          Allow 'follow-on' memberships to be created. When
                          initial membership ends, it will automatically
                          roll-over to selected follow-on membership
                        </p>
                      </div>
                    </div>

                    {/* Enable background color selection */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableBackgroundColorSelection"
                          checked={enableBackgroundColorSelection}
                          onChange={() =>
                            setEnableBackgroundColorSelection(
                              !enableBackgroundColorSelection
                            )
                          }
                        />
                        <label
                          className="form-check-label fw-bold d-flex align-items-center"
                          htmlFor="enableBackgroundColorSelection"
                        >
                          Enable background color selection
                          <CubeIcon />
                        </label>
                      </div>

                      <div className="ms-4 mt-2">
                        <p className="text-muted">
                          Allow background color to be selected when creating
                          memberships
                        </p>
                      </div>
                    </div>

                    {/* Enable membership cancellation agreements */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableCancellationAgreements"
                          checked={enableCancellationAgreements}
                          onChange={() =>
                            setEnableCancellationAgreements(
                              !enableCancellationAgreements
                            )
                          }
                        />
                        <label
                          className="form-check-label fw-bold"
                          htmlFor="enableCancellationAgreements"
                        >
                          Enable membership cancellation agreements
                        </label>
                      </div>

                      <div className="ms-4 mt-2">
                        <p className="text-muted">
                          Allow 'cancellation agreements' selection when
                          creating membership type. This agreement will be
                          signed when a member initiates cancellation.
                        </p>
                        <p className="text-muted small fst-italic">
                          Default: Unchecked | Last Changed: Nov 6 2023 6:06 pm
                          by Ashley
                        </p>
                      </div>
                    </div>

                    {/* Enable membership questionnaires */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableMembershipQuestionnaires"
                          checked={enableMembershipQuestionnaires}
                          onChange={() =>
                            setEnableMembershipQuestionnaires(
                              !enableMembershipQuestionnaires
                            )
                          }
                        />
                        <label
                          className="form-check-label fw-bold d-flex align-items-center"
                          htmlFor="enableMembershipQuestionnaires"
                        >
                          Enable membership questionnaires
                          <CubeIcon />
                        </label>
                      </div>

                      <div className="ms-4 mt-2">
                        <p className="text-muted">
                          Allow 'questionnaire' selection when creating
                          membership type
                        </p>
                      </div>
                    </div>

                    {/* Sort memberships types */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="sortMembershipTypes"
                          checked={sortMembershipTypes}
                          onChange={() =>
                            setSortMembershipTypes(!sortMembershipTypes)
                          }
                        />
                        <label
                          className="form-check-label fw-bold d-flex align-items-center"
                          htmlFor="sortMembershipTypes"
                        >
                          Sort memberships types
                          <CubeIcon />
                        </label>
                      </div>

                      <div className="ms-4 mt-2">
                        <p className="text-muted">
                          Enable 'Sort Order' field on Membership Types,
                          allowing display order of memberships online to be
                          selected. Default is alphabetical
                        </p>
                      </div>
                      <div className="">
                        <div className="card-body">
                          {/* Enable Hide from Reports option */}
                          <div className="mb-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="enableHideFromReports"
                                checked={enableHideFromReports}
                                onChange={() =>
                                  setEnableHideFromReports(
                                    !enableHideFromReports
                                  )
                                }
                              />
                              <label
                                className="form-check-label fw-bold d-flex align-items-center"
                                htmlFor="enableHideFromReports"
                              >
                                Enable 'Hide from Reports' option
                                <CubeIcon />
                                <DeprecatedBadge />
                              </label>
                            </div>

                            <div className="ms-4 mt-2">
                              <p className="text-muted">
                                Allows selected membership types to be removed
                                from reports and member counts. Generally used
                                for promotional/free memberships
                              </p>
                            </div>
                          </div>

                          {/* Block purchase of memberships not available at members club */}
                          <div className="mb-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blockUnavailableMemberships"
                                checked={blockUnavailableMemberships}
                                onChange={() =>
                                  setBlockUnavailableMemberships(
                                    !blockUnavailableMemberships
                                  )
                                }
                              />
                              <label
                                className="form-check-label fw-bold"
                                htmlFor="blockUnavailableMemberships"
                              >
                                Block purchase of memberships not available at
                                members club
                              </label>
                            </div>

                            <div className="ms-4 mt-2">
                              <p className="text-muted">
                                Members will not be able to purchase/be granted
                                memberships that are not configured to be
                                available at their assigned club. This also
                                affects membership purchases made in the Member
                                Portal
                              </p>
                              <p className="text-muted small fst-italic">
                                Last Changed: Jul 11 2022 10:03 pm by Mike Bell
                              </p>
                            </div>
                          </div>

                          {/* Apply fee changes to existing memberships */}
                          <div className="mb-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="applyFeeChanges"
                                checked={applyFeeChanges}
                                onChange={() =>
                                  setApplyFeeChanges(!applyFeeChanges)
                                }
                              />
                              <label
                                className="form-check-label fw-bold d-flex align-items-center"
                                htmlFor="applyFeeChanges"
                              >
                                Apply fee changes to existing memberships
                                <BetaBadge />
                              </label>
                            </div>

                            <div className="ms-4 mt-2">
                              <p className="text-muted">
                                Presents the option of applying Membership Type
                                fee changes to all associated Memberships. To
                                use, save a new Membership Fee on the Membership
                                Type configuration page, then follow the
                                prompts.
                              </p>
                              <p className="text-muted small fst-italic">
                                Default: Unchecked | Last Changed: Nov 11 2024
                                11:16 pm by airaftiness
                              </p>
                            </div>
                          </div>

                          {/* Enable charge per visit membership basis */}
                          <div className="mb-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="enableChargePerVisit"
                                checked={enableChargePerVisit}
                                onChange={() =>
                                  setEnableChargePerVisit(!enableChargePerVisit)
                                }
                              />
                              <label
                                className="form-check-label fw-bold d-flex align-items-center"
                                htmlFor="enableChargePerVisit"
                              >
                                Enable charge per visit membership basis
                                <BetaBadge />
                              </label>
                            </div>

                            <div className="ms-4 mt-2">
                              <p className="text-muted">
                                Show charge per visit as an option when editing
                                a membership type
                              </p>
                              <p className="text-muted small fst-italic">
                                Last Changed: Nov 11 2024 11:16 pm by
                                airaftiness
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default MemberTypePortal
