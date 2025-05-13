import React from "react";
import "./Stock.css"

const ViewStock = () => {
  return (
    <>
      <div className="stock-view-container container card shadow-sm my-4">
        {/* Header Section */}
        <div className="stock-view-header">
          <h1 className="stock-view-title">Stock View</h1>
          <div className="stock-view-actions">
            <button className="btn border bg-light">Export To CSV</button>
            <button className="btn border bg-light">
              <i className="bi bi-printer" /> Print
            </button>
          </div>
        </div>
        {/* Search and Filter Section */}
        <div className="stock-view-search-section">
          <div className="row">
            <div className="col-md-6">
              <div className="stock-view-form-group">
                <label className="stock-view-form-label">
                  Scan or Search Product
                </label>
                <div className="stock-view-search-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the product's name or scan its bar code to find it"
                  />
                  <span className="stock-view-barcode-icon">
                    <i className="bi bi-upc-scan" />
                  </span>
                </div>
              </div>
              <div className="stock-view-form-group">
                <select className="form-select">
                  <option>Golf Simulator</option>
                </select>
              </div>
              <div className="stock-view-form-group">
                <select className="form-select">
                  <option>All Suppliers</option>
                  <option>No Suppliers</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="stock-view-form-group">
                <label className="stock-view-form-label">Date</label>
                <div className="stock-view-search-input">
                  <input
                    type="date"
                    className="form-control"
                    defaultValue="04-29-2025"
                  />
                </div>
              </div>
              <div className="stock-view-form-group">
                <select className="form-select">
                  <option value={-1}>All Product Types</option>
                  <option value={6}>Guest Pass</option>
                  <option value={3}>Drink</option>
                  <option value={5}>Other</option>
                  <option value={11}>General (11)</option>
                  <option value={12}>General (12)</option>
                  <option value={1}>General (1)</option>
                  <option value={7}>General (7)</option>
                  <option value={8}>General (8)</option>
                  <option value={9}>General (9)</option>
                  <option value={10}>General (10)</option>
                  <option value={13}>General (13)</option>
                  <option value={14}>General (14)</option>
                  <option value={15}>General (15)</option>
                  <option value={16}>General (16)</option>
                  <option value={17}>General (17)</option>
                  <option value={18}>General (18)</option>
                  <option value={19}>General (19)</option>
                  <option value={20}>General (20)</option>
                  <option value={21}>General (21)</option>
                  <option value={22}>General (22)</option>
                  <option value={23}>General (23)</option>
                  <option value={24}>General (24)</option>
                  <option value={25}>General (25)</option>
                  <option value={26}>General (26)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Table Section */}
        <div className="table-responsive">
        <div className=" stock-view-table ">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                  Product Type <i className="bi bi-arrow-down" />
                </th>
                <th>
                  Product Name <i className="bi bi-arrow-down" />
                </th>
                <th>
                  Sold since last stocktake <i className="bi bi-arrow-down" />
                </th>
                <th>
                  Adjusted <i className="bi bi-arrow-down" />
                </th>
                <th>
                  Purchased <i className="bi bi-arrow-down" />
                </th>
                <th>
                  Quantity <i className="bi bi-arrow-down" />
                </th>
                <th>
                  Stock Value (Incl. Tax) <i className="bi bi-arrow-down" />
                </th>
                <th>
                  Stock Value (Excl. Tax) <i className="bi bi-arrow-down" />
                </th>
              </tr>
            </thead>
            <tbody>{/* Empty table with just the summary row */}</tbody>
          </table>
        </div>
        </div>
        <div className="mt-4">
          <div className="d-flex justify-content-end">
            Stock Value
            <br />
            (Purchase value
            <br />
            Excl. Tax)
          </div>
          <div className="d-flex justify-content-end mt-2">
            <input
              type="password"
              className="form-control w-auto d-flex text-end bg-light"
              id="exampleInputPassword1"
              placeholder={0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewStock;
