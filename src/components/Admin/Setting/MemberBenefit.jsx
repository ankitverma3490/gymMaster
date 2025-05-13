import React from 'react'

function MemberBenefit() {
  return (
    <>
        <div className="row">
                  <h5 className="mb-4">Member Benefits</h5>
                  <div className="col-md-12">
                    <div className="card p-4 bg-light">
                      {/* Benefits Grace Period */}
                      <div className="mb-4">
                        <label
                          htmlFor="benefitsGracePeriod"
                          className="form-label"
                        >
                          Benefits grace period
                        </label>
                        <br />
                        <small className="form-text text-muted">
                          If benefits are not used within their valid period,
                          they can be carried over to the next period by
                          adjusting this setting. Set it to 0 (default) for no
                          grace period, or 1 to allow benefits to be used in the
                          next period. Setting it to a value higher than 1 lets
                          benefits accumulate over multiple cycles. The period
                          length is defined by the benefit allocation (e.g. 1
                          month).
                        </small>
                        <input
                          type="number"
                          className="form-control mt-2"
                          id="benefitsGracePeriod"
                          defaultValue="0"
                          min="0"
                        />
                      </div>

                      {/* Enable Benefit Rollover */}
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="enableBenefitRollover"
                          defaultChecked={false}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="enableBenefitRollover"
                        >
                          Enable benefit rollover
                        </label>
                        <br />
                        <small className="form-text text-muted">
                          Select to enable accumulation of unused member
                          benefits.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default MemberBenefit
