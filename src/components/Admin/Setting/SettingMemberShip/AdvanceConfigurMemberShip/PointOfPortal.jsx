import React, { useState } from 'react'

function PointOfPortal() {
    const [receiptFooter, setReceiptFooter] = useState(
        "Thank you for shopping here!Please retain receipt for proof of purchase"
      );
      const [selectedEmailTemplate, setSelectedEmailTemplate] = useState(
        "POS Purchase Receipt"
      );
    
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
        <h5 className="mb-4">Point Of Sale</h5>

<div className="card mb-3 bg-light">
  <div className="card-body">
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="requireStaffSelection"
      />
      <label
        className="form-check-label fw-bold"
        htmlFor="requireStaffSelection"
      >
        Require staff selection for Point of Sale
      </label>
      <div className="text-muted small ps-4">
        Require staff member to be selected in Point of Sale
        transaction. If unchecked - will use logged in staff
        member as default
        <div className="text-secondary fst-italic small mt-1">
          Default: Checked
        </div>
      </div>
    </div>

    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="specialPosButtons"
      />
      <label
        className="form-check-label fw-bold"
        htmlFor="specialPosButtons"
      >
        Special POS buttons for admin staff only
      </label>
      <div className="text-muted small ps-4">
        Allow only admin staff to perform special actions, such
        as general sale and gift voucher
      </div>
    </div>

    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="useStaticFloat"
      />
      <label
        className="form-check-label fw-bold"
        htmlFor="useStaticFloat"
      >
        Use static float
      </label>
      <div className="text-muted small ps-4">
        Using static float will disable cash count on till take
      </div>
    </div>

    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="productPricesTaxInclusive"
      />
      <label
        className="form-check-label fw-bold"
        htmlFor="productPricesTaxInclusive"
      >
        Product prices tax inclusive
      </label>
      <div className="text-muted small ps-4">
        Enable prices in Point of Sale to be tax inclusive.
        Subtotal pre-tax amount will be visible
      </div>
    </div>

    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="onlyCurrentMembers"
      />
      <label
        className="form-check-label fw-bold"
        htmlFor="onlyCurrentMembers"
      >
        Only current members can 'add to account'
      </label>
      <div className="text-muted small ps-4">
        Enable only current members to add charges to their
        account. When enabled, only current members are able to
        be selected in Point of Sale
      </div>
    </div>

    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="thermalReceiptPrinter"
      />
      <label
        className="form-check-label fw-bold"
        htmlFor="thermalReceiptPrinter"
      >
        Use thermal receipt printer
        <span className="ms-2 badge rounded-pill bg-info">
          🖨
        </span>
      </label>
      <div className="text-muted small ps-4">
        Select when using Thermal Receipt Printer connected to
        Gatekeeper, as opposed to PDF receipt
      </div>
    </div>

    <div className="mb-3 mt-4">
      <label className="fw-bold mb-2">Receipt footer</label>
      <div className="text-muted small mb-2">
        Footer text for PDF and thermal receipts. Leave blank
        for no footer
      </div>
      <input
        type="text"
        className="form-control"
        value={receiptFooter}
        onChange={(e) => setReceiptFooter(e.target.value)}
      />
      <div className="text-secondary fst-italic small mt-1">
        Default Value: Retain receipt as proof of purchase
      </div>
    </div>

    <div className="mb-3 mt-4">
      <label className="fw-bold mb-2">
        Email template used for Point of Sale receipt
      </label>
      <div className="text-muted small mb-2">
        Select/Edit Point of Sale template email - purchase
        receipt attached
      </div>
      <div className="input-group">
        <select
          className="form-select"
          value={selectedEmailTemplate}
          onChange={(e) =>
            setSelectedEmailTemplate(e.target.value)
          }
        >
          <option>POS Purchase Receipt</option>
          <option>Detailed Receipt</option>
          <option>Simple Receipt</option>
        </select>
        <button
          className="btn btn-outline-secondary"
          type="button"
        >
          <i className="bi bi-pencil"></i>
        </button>
      </div>
    </div>

    <div className="form-check mt-4">
      <input
        className="form-check-input"
        type="checkbox"
        id="autoGenerateGiftVoucher"
      />
      <label
        className="form-check-label fw-bold"
        htmlFor="autoGenerateGiftVoucher"
      >
        Auto generate gift voucher code
        <span className="ms-2 badge rounded-pill bg-warning text-dark">
          Beta
        </span>
      </label>
      <div className="text-muted small ps-4">
        Generates a random 15 character voucher code instead of
        requiring a user inputted code
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default PointOfPortal
