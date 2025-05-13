import React from 'react'

function FindMember() {
  return (
    <>
        <div className="row">
                  <h5 className="mb-4">Find Member </h5>
                  <div className="col-md-12">
                    <div className="card p-4 bg-light">
                      {/* Find Member */}
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="concealMembersFromStaff"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="concealMembersFromStaff"
                        >
                          Conceal Members from staff and trainers
                        </label>
                        <p className="small text-muted">
                          Conceals members that staff and trainers do not have
                          access to. Only staff and trainers with member access
                          within the club are able to view the club members.
                        </p>
                        <p className="small text-muted">
                          <i>
                            Default Value: Checked. Last Changed: Mar 6 2022
                            11:43 pm by Joy Kingman
                          </i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default FindMember
