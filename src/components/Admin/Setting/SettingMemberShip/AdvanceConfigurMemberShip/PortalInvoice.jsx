import React from "react";

function PortalInvoice() {
  return (
    <>
      <div className="row">
        <h5 className="mt-4 mb-4">Invoice </h5>
        <div className="col-md-12">
          <div className="card p-4 bg-light">
            {/* Invoice Settings */}

            {/* Display Invoice Number Prefix */}
            <div className="mb-4">
              <label htmlFor="invoiceNumberPrefix" className="form-label">
                Display invoice number prefix
              </label>
              <input
                type="text"
                className="form-control"
                id="invoiceNumberPrefix"
                placeholder="Enter invoice number prefix"
              />
              <small className="form-text text-muted">
                Create prefix for all invoice numbers. Will display prefix
                followed directly by invoice number. E.g. (Prefix12345).
              </small>
            </div>

            {/* Display Bank Account on Invoice */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="displayBankAccountOnInvoice"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="displayBankAccountOnInvoice"
              >
                Display bank account on invoice
              </label>
              <small className="form-text text-muted">
                Display company bank account on invoice.
              </small>
            </div>

            {/* Display $0.00 Payments on Statements */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="displayZeroPaymentsOnStatements"
                defaultChecked
              />
              <label
                className="form-check-label"
                htmlFor="displayZeroPaymentsOnStatements"
              >
                Display $0.00 payments on statements
              </label>
              <small className="form-text text-muted">
                Show $0.00 payments on member statements.
              </small>
            </div>

            {/* Email Template for Member Account Invoice */}
            <div className="mb-4">
              <label htmlFor="emailTemplateForInvoice" className="form-label">
                Email template used for member account invoice
              </label>
              <select className="form-select" id="emailTemplateForInvoice">
                <option>Select a template</option>
                <option>Member Account Invoice</option>
                <option>Custom Template</option>
              </select>
              <small className="form-text text-muted">
                Select/Edit Member Account Invoice email template - invoice
                attached.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortalInvoice;
