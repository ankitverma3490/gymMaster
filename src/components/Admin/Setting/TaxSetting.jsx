import React from 'react'

function TaxSetting() {
  return (
    <>
       <div className="row">
                  <h5 className="mb-4">Tax </h5>
                  <div className="col-lg-12">
                    <div className="card p-4 bg-light">
                      {/* Accounting basis for tax */}
                      <div className="mb-4">
                        <label htmlFor="accountingBasis" className="form-label">
                          Accounting basis for tax
                        </label>
                        <select
                          id="accountingBasis"
                          className="form-select"
                          defaultValue="Cash"
                        >
                          <option value="Cash">Cash</option>
                          <option value="Credit">Credit</option>
                          {/* Add more options if necessary */}
                        </select>
                        <small className="form-text text-muted">
                          Accounting Rules/Basis used for calculating Tax.
                        </small>
                      </div>

                      {/* Invoice header label */}
                      <div className="mb-4">
                        <label
                          htmlFor="invoiceHeaderLabel"
                          className="form-label"
                        >
                          Invoice header label
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="invoiceHeaderLabel"
                          defaultValue="TAX INVOICE"
                        />
                        <small className="form-text text-muted">
                          The label appearing on the top of invoices.
                        </small>
                      </div>

                      {/* Post add tax */}
                      <div className="mb-4 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="postAddTax"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="postAddTax"
                        >
                          Post add tax
                        </label>
                        <br />
                        <small className="form-text text-muted">
                          This means the prices EXCLUDE TAX. And tax is added to
                          prices stored in the system. This affects all taxes on
                          memberships, bookings, and products.
                        </small>
                      </div>

                      {/* Tax label */}
                      <div className="mb-4">
                        <label htmlFor="taxLabel" className="form-label">
                          Tax label
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="taxLabel"
                          defaultValue="Tax Number"
                        />
                        <small className="form-text text-muted">
                          The label describing the Tax number (e.g., GST, VAT).
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default TaxSetting
