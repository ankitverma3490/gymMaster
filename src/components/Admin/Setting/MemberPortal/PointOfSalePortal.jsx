import React, { useState } from 'react'

function PointOfSalePortal() {
    const [allowNonMembers, setAllowNonMembers] = useState(false);
  const [productBenefitBypass, setProductBenefitBypass] = useState(false);
  const [posSaleConfirmation, setPosSaleConfirmation] = useState(
    "Member Portal POS Confirmation"
  );
  return (
    <>
       <div className="container mt-4">
      <h4>Point Of Sale </h4>
      <div className="card p-4 bg-light">
        <form>
          {/* Allow Non-Members to Shop Online */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="allowNonMembers"
              checked={allowNonMembers}
              onChange={(e) => setAllowNonMembers(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="allowNonMembers">
              Allow non-members to shop online
            </label><br/>
            <small>Allow shop functionality by non-members via Member Portal. Required: enable one of the salable items below.
            </small>
          </div>

          {/* POS Sale Confirmation Template */}
          <div className="mb-3">
            <label
              htmlFor="posSaleConfirmation"
              className="form-label"
            >
              POS sale confirmation template
            </label><br/>
            <small>Template used for the Point of Sale confirmation email. A confirmation email will only be sent for purchases that are paid.
            </small>
            <div className="d-flex gap-2">
            <select
              id="posSaleConfirmation"
              className="form-select"
              value={posSaleConfirmation}
              onChange={(e) => setPosSaleConfirmation(e.target.value)}
            >
              <option value="Member Portal POS Confirmation">
                Member Portal POS Confirmation
              </option>
              <option value="Alternative Template">
                Alternative POS Confirmation Template
              </option>
            </select>
            <div>
                <button className='btn btn-secondary'><i class="fa-solid fa-pen"></i></button>
            </div>
            </div>
          </div>

          {/* Product Benefit Bypass Sell Online */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="productBenefitBypass"
              checked={productBenefitBypass}
              onChange={(e) => setProductBenefitBypass(e.target.checked)}
            />
            <label
              className="form-check-label"
              htmlFor="productBenefitBypass"
            >
              Product benefit bypass sell online
            </label><br/>
            <small>Will allow members to see products in the portal that are associated with their membership's benefits, even if Sell Online is not enabled for those products.
            </small>
            <br/>
            <small>Default: UncheckedLast Changed: May 28 2024 9:47 pm by airafitness
            </small>
          </div>

          {/* Save Button */}
        
        </form>
      </div>
    </div>
    </>
  )
}

export default PointOfSalePortal
