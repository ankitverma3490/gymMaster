import React from "react";
import "./Stock.css";
import Footer from "../../Layout/Footer";
import { Link } from "react-router-dom";

const TakeStock = () => {
  return (
    <>
      <div className="stock-view-container container card shadow-sm my-4">
        {/* Header Section */}
        <div className="stock-view-header">
          <h1 className="stock-view-title">Stock Take</h1>
          <div className="d-flex justify-content-end">
            <div className="stock-view-actions">
              <button
                className="btn border text-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ backgroundColor: "#337ab7" }}
              >
                <i className="bi bi-plus" />
                New Stocktake
              </button>
              <Link to="/newproductpurchase">
                <button
                  className="btn border text-white"
                  style={{ backgroundColor: "#337ab7" }}
                >
                  <i className="bi bi-plus" /> New Product Purchase
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Search and Filter Section */}
        <div className="stock-view-search-section">
          <div className="row">
            <div className="col-md-6">
              <div className="stock-view-form-group">
                <select className="form-select">
                  <option>Golf Simulator</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Table Section */}
        <div className="table-responsive">
        <div className="stock-view-table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Stocktake Date</th>
                <th>Stocktake Time</th>
                <th>Company Name</th>
                <th>Total Stock Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{/* Empty table with just the summary row */}</tbody>
          </table>
        </div>
        </div>
        {/* Modal */}
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
                  New Stocktake
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
                    <label htmlFor="inputSelect" className="col-form-label">
                      Product Type
                    </label>
                  </div>
                  <div className="col">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="">All Product Types</option>
                      <option value={3} title="">
                        Drink
                      </option>
                      <option value={1} title="">
                        General (1)
                      </option>
                      <option value={10} title="">
                        General (10)
                      </option>
                      <option value={11} title="">
                        General (11)
                      </option>
                      <option value={12} title="">
                        General (12)
                      </option>
                      <option value={13} title="">
                        General (13)
                      </option>
                      <option value={14} title="">
                        General (14)
                      </option>
                      <option value={15} title="">
                        General (15)
                      </option>
                      <option value={16} title="">
                        General (16)
                      </option>
                      <option value={17} title="">
                        General (17)
                      </option>
                      <option value={18} title="">
                        General (18)
                      </option>
                      <option value={19} title="">
                        General (19)
                      </option>
                      <option value={20} title="">
                        General (20)
                      </option>
                      <option value={21} title="">
                        General (21)
                      </option>
                      <option value={22} title="">
                        General (22)
                      </option>
                      <option value={23} title="">
                        General (23)
                      </option>
                      <option value={24} title="">
                        General (24)
                      </option>
                      <option value={25} title="">
                        General (25)
                      </option>
                      <option value={26} title="">
                        General (26)
                      </option>
                      <option value={27} title="">
                        General (27)
                      </option>
                      <option value={28} title="">
                        General (28)
                      </option>
                      <option value={29} title="">
                        General (29)
                      </option>
                      <option value={30} title="">
                        General (30)
                      </option>
                      <option value={7} title="">
                        General (7)
                      </option>
                      <option value={8} title="">
                        General (8)
                      </option>
                      <option value={9} title="">
                        General (9)
                      </option>
                      <option value={6} title="">
                        Guest Pass
                      </option>
                      <option value={5} title="">
                        Other
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row g-3 my-2 align-items-center">
                  <div className="col-auto">
                    <label htmlFor="inputSelect" className="col-form-label">
                      Supplier
                    </label>
                  </div>
                  <div className="col">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="">All Suppliers</option>
                      <option value={0} title="">
                        No Supplier
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row g-3 my-2 align-items-center">
                  <div className="col-auto">
                    <label htmlFor="inputSelect" className="col-form-label">
                      Show counts
                    </label>
                  </div>
                  <div className="col">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
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
                  New Stocktake
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", top: "72px" }}>
        <Footer />
      </div>
    </>
  );
};

export default TakeStock;
