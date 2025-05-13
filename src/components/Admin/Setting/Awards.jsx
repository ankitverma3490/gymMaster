import React from 'react'

function Awards() {
  return (
    <>
       <h4>Awards</h4>
              <div className="card p-2 bg-light">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="use24HourFormat"
                  />
                  <label className="form-check-label" htmlFor="use24HourFormat">
                    Awards enabled
                  </label>
                  <p className="small text-muted">
                    Set whether member award functionality is turned on or off.
                    Note: if you want members to be able to see their own
                    awards, the 'Show awards on portal and app' Member Portal
                    configuration option will also need to be enabled.
                  </p>
                  <span>Last Changed: Nov 3 2021 9:43 pm by airafitness</span>
                </div>
              </div>
    </>
  )
}

export default Awards
