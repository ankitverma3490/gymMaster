import React, { useState } from 'react'

function VouchersPortal() {
    const [giftVoucherCodeLength, setGiftVoucherCodeLength] = useState(15);
    const [giftVoucherExpiry, setGiftVoucherExpiry] = useState(1);
    const [allowVoucherPaymentMethod, setAllowVoucherPaymentMethod] = useState(false);
    const [emailTemplateForVoucherPurchase, setEmailTemplateForVoucherPurchase] = useState("Online Gift Voucher purchase");
  return (
    <>
        <div className="container mt-4">
      <h4>Vouchers Settings</h4>
      <div className="card p-4 bg-light">
        <form>
          {/* Gift Voucher Code Length */}
          <div className="mb-3">
            <label htmlFor="giftVoucherCodeLength" className="form-label">
              Gift voucher code length
            </label><br/>
            <small>How long are gift voucher codes? If this is too short, it will run out of unique codes sooner.
            </small>
            <input
              type="number"
              className="form-control"
              id="giftVoucherCodeLength"
              value={giftVoucherCodeLength}
              onChange={(e) => setGiftVoucherCodeLength(e.target.value)}
            />
          
          </div>

          {/* Gift Voucher Expiry */}
          <div className="mb-3">
            <label htmlFor="giftVoucherExpiry" className="form-label">
              Gift voucher expiry
            </label>
            <br/>
            <small>How long do gift vouchers purchased online last for? Leave this unset for them to never expire.
            </small>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="giftVoucherExpiry"
                value={giftVoucherExpiry}
                onChange={(e) => setGiftVoucherExpiry(e.target.value)}
              />
              <select
                className="form-select"
                id="giftVoucherExpiryUnit"
                defaultValue="years"
              >
                <option value="days">days</option>
                <option value="months">months</option>
                <option value="years">years</option>
              </select>
            </div>
            <small className="form-text text-muted">
            Last Changed: Sep 24 2024 12:17 am by airafitness

            </small>
          </div>

          {/* Allow Vouchers as Payment Method */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="allowVoucherPaymentMethod"
              checked={allowVoucherPaymentMethod}
              onChange={(e) => setAllowVoucherPaymentMethod(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="allowVoucherPaymentMethod">
              Allow vouchers as a payment method in the Member Portal
            </label>
            <br/>
            <small className='form-text text-muted'>Vouchers can be used as a payment method while making an online purchase.Currently only available for product purchasing.

            </small>
          </div>

          {/* Email Template for Voucher Purchase */}
          <div className="mb-3">
            <label htmlFor="emailTemplateForVoucherPurchase" className="form-label">
              Email template for purchasing a gift voucher
            </label><br/>
            <small className='form-text text-muted'>The email template sent to a member when they purchase a gift voucher online.
            </small>
            <div className="d-flex gap-2">
            <select
              className="form-select"
              id="emailTemplateForVoucherPurchase"
              value={emailTemplateForVoucherPurchase}
              onChange={(e) => setEmailTemplateForVoucherPurchase(e.target.value)}
            >
              <option value="Online Gift Voucher purchase">Online Gift Voucher purchase</option>
              {/* Add more options if needed */}
            </select>
            <div>
                <button className='btn btn-secondary'><i class="fa-solid fa-pen"></i></button>
            </div>
            </div>
          </div>

          {/* Submit Button */}
         
        </form>
      </div>
    </div>
    </>
  )
}

export default VouchersPortal
