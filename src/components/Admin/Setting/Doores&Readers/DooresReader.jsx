import React from 'react'
import { Link } from 'react-router-dom'

function DooresReader() {
  return (
    <>
     <div className="container-fluid p-4">
      <div className="row mb-4">
        <div className="col-md-6">
          <h3>Door Management</h3>
        </div>
        <div className="col-md-6 text-end">
          <Link to="/adddoorfrom">
          <button className="btn btn-primary">+ New Door</button>
          </Link>
          <button className="btn btn-secondary ms-2">Assigned Key Fobs</button>
          <button className="btn btn-light ms-2">
            <i className="bi bi-gear"></i> Door Reader Settings
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="clubFilter" className="form-label">Filter by Club</label>
        <select id="clubFilter" className="form-select w-auto">
          <option>Golf Simulator</option>
          {/* Add more options here */}
        </select>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Door Number</th>
              <th>Door Name</th>
              <th>Status</th>
              <th>Tailgating</th>
              <th>Gatekeeper Location</th>
              <th>Gatekeeper Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>48</td>
              <td>Golf Simulator</td>
              <td>Unlocked</td>
              <td>No</td>
              <td>Gatekeeper GK5.4</td>
              <td>Connected</td>
              <td>
                <button className="btn btn-info btn-sm">
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button className="btn btn-warning btn-sm ms-2">
                  <i className="bi bi-arrow-clockwise"></i>
                </button>
                <button className="btn btn-success btn-sm ms-2">
                  <i className="bi bi-qr-code"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default DooresReader
