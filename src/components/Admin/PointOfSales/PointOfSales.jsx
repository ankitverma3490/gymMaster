import React from "react";
import "./POS.css";

const PointOfSales = () => {
  return (
    <>
      <div className="container">
        <h4 className="my-3">Point Of Sales</h4>
        <div className="pos-container card mt-4 shadow-sm">
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="pos-search-container d-flex">
                  <input
                    type="text"
                    className="form-control pos-search-input"
                    placeholder="Type the product name or scan the bar code to find"
                  />
                  <button className="btn btn-outline-secondary pos-search-button">
                    <i className="fas fa-search" />
                  </button>
                </div>
                <button className="btn pos-settings-btn">
                  <i className="fas fa-cog" /> POS Settings
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="pos-card border"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <div className="pos-tag-icon">
                      <i className="fas fa-tag pos-card-icon" />
                    </div>
                    <div className="pos-card-text">General Sale</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="pos-card border"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <div className="pos-gift-icon">
                      <i className="fas fa-gift pos-card-icon" />
                    </div>
                    <div className="pos-card-text">Gift Voucher</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pos-right-panel">
                <div className="pos-cart-header">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <div className="pos-cart-title">
                        <i className="fas fa-shopping-cart pos-cart-icon" />{" "}
                        Cart
                      </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-start justify-content-md-end">
                      <div className="pos-action-buttons d-flex flex-wrap justify-content-start justify-content-md-end gap-2">
                        <button className="pos-btn btn btn-outline-secondary">
                          Open Till
                        </button>
                        <button className="pos-btn btn btn-outline-secondary">
                          <i className="fas fa-receipt" /> Receipt
                        </button>
                        <button className="pos-btn btn btn-outline-secondary">
                          <i className="fas fa-percent" /> Discount
                        </button>
                        <button className="pos-btn btn btn-outline-secondary">
                          <i className="fas fa-pen" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pos-cart-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th className="text-center">Qty</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                  </table>
                  <div className="pos-cart-content">
                    <p>No Products</p>
                  </div>
                </div>
                <div className="pos-totals">
                  <div className="pos-total-row">
                    <div>Sub-Total</div>
                    <div>$0.00</div>
                  </div>
                  <div className="pos-total-row">
                    <div>Total (Incl Taxes)</div>
                    <div>$0.00</div>
                  </div>
                  <div className="pos-total-row">
                    <div className="pos-total-due">Total Due</div>
                    <div className="pos-total-due">$0.00</div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <button className="pos-payment-btn">Make Payment</button>
                  </div>
                  <div className="col-md-6">
                    <button className="pos-charge-btn">Charge To Member</button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <button className="pos-cancel-btn">Cancel</button>
                  </div>
                  <div className="col-md-6">
                    <button className="pos-complete-btn">Complete Sale</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="pos-select-container">
                      <div className="pos-select-label">Staff</div>
                      <select className="pos-select">
                        <option>Rohan Maher</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="pos-select-container">
                      <div className="pos-select-label">Station</div>
                      <select className="pos-select">
                        <option>default station for FO</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button
                      className="pos-assign-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      Assign Member
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* First Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    General Sale
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="row g-3 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Amount
                      </label>
                    </div>
                    <div className="col-auto" style={{ width: "80%" }}>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={0.0}
                          aria-label="Username"
                        />
                        <span className="input-group-text">⇆</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={0.0}
                          aria-label="Server"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Tax Rate
                      </label>
                    </div>
                    <div className="col-auto">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value={0} title="0%">
                          Sales Tax - Zero Rated Tax
                        </option>
                        <option value={1} title="0%">
                          Sales Tax Membership - programme tax for...
                        </option>
                        <option value={3} title="0.07%">
                          Sales Tax Product - product tax for D...
                        </option>
                        <option value={2} title="0%">
                          Sales Tax Service - booking
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3 mt-2 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Description
                      </label>
                    </div>
                    <div className="col-auto">
                      <div className="form-floating">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                            cols={42}
                            defaultValue={""}
                          />
                          <label htmlFor="floatingTextarea">Comments</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-success">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Second Modal */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Voucher Sale
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="row g-3 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="inputText" className="col-form-label">
                        Amount (Tax Incl)
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputText"
                        className="form-control"
                        aria-describedby="inputText"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="row g-3 mt-2 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="inputText" className="col-form-label">
                        Voucher Code
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputText"
                        className="form-control"
                        aria-describedby="inputText"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mt-2 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="inputDate" className="col-form-label">
                        Voucher Code
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="date"
                        id="inputDate"
                        className="form-control"
                        aria-describedby="inputDate"
                        defaultValue="04-29-2026"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mt-2 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="inputText" className="col-form-label">
                        Comment
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputText"
                        className="form-control"
                        aria-describedby="inputText"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-success">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*Third Modal */}
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Assign to Member
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="pos-search-container d-flex">
                    <input
                      type="text"
                      className="form-control pos-search-input"
                      placeholder="Search Member"
                    />
                    <button className="btn btn-outline-secondary pos-search-button">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PointOfSales;
