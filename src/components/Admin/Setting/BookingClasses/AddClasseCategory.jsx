import React from 'react';
import { Link } from 'react-router-dom';

function AddClasseCategory() {
  return (
    <div className="container py-4">
      <div className="card p-4">
        <div className="d-flex justify-content-between mb-4">
          <h4>Add Category</h4>
          <Link to="/bookingclasses">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>

        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">Category Name</label>
          <input
            type="text"
            className="form-control"
            id="categoryName"
            placeholder="Enter category name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tax" className="form-label">Tax</label>
          <input
            type="text"
            className="form-control"
            id="tax"
            placeholder="Enter tax rate"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="club" className="form-label">Club</label>
          <select className="form-select" id="club">
            <option>All Clubs</option>
            <option>Club Simulator</option>
          </select>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  );
}

export default AddClasseCategory;
