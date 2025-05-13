import React from "react";
import "./Stock.css"
import Footer from "../../Layout/Footer";

const NewProductPuechase = () => {
  return (
    <>
      <div className="purchase-info-container container card shadow-sm rounded my-4">
        <div className="text-end">
          <button type="button" className="btn btn-success">
            Save
          </button>
        </div>
        {/* Purchase Info Section */}
        <div className="purchase-info-section">
          <h2 className="purchase-info-heading">Purchase Info</h2>
          <div className="purchase-info-form-section">
            <div className="row mb-3">
              <div className="col-md-2">
                <label className="purchase-info-label">Purchased at</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="04-29-2025 06:35 am"
                />
              </div>
              <div className="col-md-2">
                <label className="purchase-info-label">Invoice No</label>
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-2">
                <label className="purchase-info-label">
                  Purchased for Club
                </label>
              </div>
              <div className="col-md-4">
                <select className="form-select">
                  <option>Golf Simulator</option>
                </select>
              </div>
              <div className="col-md-2">
                <label className="purchase-info-label">Supplier</label>
              </div>
              <div className="col-md-4">
                <select className="form-select">
                  <option>No Supplier</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label className="purchase-info-label">Delivered At</label>
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-2">
                <label className="purchase-info-label">Shipping</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="$20"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Filters Section */}
        <div className="purchase-info-section">
          <h2 className="purchase-info-heading">Filters</h2>
          <div className="purchase-info-form-section">
            <button className="purchase-info-clear-btn">Clear Filters</button>
            <div className="row mb-3">
              <div className="col-md-2">
                <label className="purchase-info-label">Supplier</label>
              </div>
              <div className="col-md-4">
                <select className="form-select">
                  <option>All Suppliers</option>
                </select>
              </div>
              <div className="col-md-2">
                <label className="purchase-info-label">Product Types</label>
              </div>
              <div className="col-md-4">
                <select className="form-select">
                  <option>All</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label className="purchase-info-label">Search Product</label>
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type product name here"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Products Section */}
        <div className="purchase-info-section">
          <h2 className="purchase-info-heading">Products</h2>
          <div className="purchase-info-products-section">
            <table className="purchase-info-table">
              <thead>
                <tr>
                  <th>Product Type</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Unit Cost (Excl. Tax)</th>
                  <th>Unit Cost (Incl. Tax)</th>
                  <th>Sub Total Cost (Excl. Tax)</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty rows, just showing totals */}
                <tr className="purchase-info-totals-row">
                  <td colSpan={5} className="text-end">
                    Sub Total
                  </td>
                  <td className="purchase-info-amount">$0.00</td>
                </tr>
                <tr className="purchase-info-totals-row">
                  <td colSpan={5} className="text-end">
                    Tax
                  </td>
                  <td className="purchase-info-amount">$0.00</td>
                </tr>
                <tr className="purchase-info-totals-row">
                  <td colSpan={5} className="text-end">
                    Total
                  </td>
                  <td className="purchase-info-amount">$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-end">
          <button type="button" className="btn btn-success">
            Save
          </button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default NewProductPuechase;
