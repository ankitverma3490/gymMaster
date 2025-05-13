import React from 'react'

function AwardsConfigur() {
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
                  Show awards on portal and app

                  </label><span className="rounded p-1"style={{background:"#FDEADC" , color:"red"}}>Beta</span>
                  <p className="small text-muted">
                  If enabled, members that have earned any awards will be able to view them on the their account via the portal or Member App. This setting will have no effect if the 'Awards Enabled' advanced configuration setting is not enabled. Additionally, visibility of awards in the portal and app can be refined further via the 'Edit Portal Buttons' and 'Customize Member App' pages.

                  </p>
                
                </div>
              </div>
    </>
  )
}

export default AwardsConfigur
