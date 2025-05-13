import React from 'react'
import "./Door.css";
import { Link } from 'react-router-dom';

function AddDoorsFrom() {
  return (
    <>
    
      <div className="door-ctrl-container">
  <div className="container-fluid">
    <div className="d-flex justify-content-end mb-3">
      <button className="btn btn-success door-ctrl-save-btn me-2">Save</button>
      <Link to="/doorreader">
      <button className='btn btn-primary'>Back</button>
      </Link>
    </div>
    <div className="row">
      {/* Control Section */}
      <div className="col-md-6 mb-4">
        <div className="door-ctrl-card">
          <h2 className="door-ctrl-title">Control</h2>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Door Number</label>
            <input type="text" className="form-control" placeholder="" />
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Door Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Door Name"
            />
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Club Associated</label>
            <select className="form-select door-ctrl-select">
              <option selected="">Golf Simulator</option>
            </select>
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Installation Date</label>
            <input
              type="text"
              className="form-control"
              placeholder="MM/DD/YYYY"
            />
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Open Status</label>
            <select className="form-select door-ctrl-select">
              <option selected="">Active (Fob required)</option>
            </select>
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Concession Handling</label>
            <select className="form-select door-ctrl-select">
              <option selected="">Count handling</option>
            </select>
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">
              Automatically book into class on resource
            </label>
            <select className="form-select door-ctrl-select">
              <option selected="">N/A</option>
            </select>
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Associated Resources</label>
            <select className="form-select door-ctrl-select">
              <option selected="">Select Some Options</option>
            </select>
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Waiver Restrictions</label>
            <select className="form-select door-ctrl-select">
              <option selected="">Select Some Options</option>
            </select>
            <p className="door-ctrl-hint">
              All selected waivers must be signed for access to be granted at
              this door
            </p>
          </div>
          <div className="door-ctrl-checkbox-container">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="restrictedDoor"
              />
              <label className="form-check-label" htmlFor="restrictedDoor">
                This is a Restricted Door
              </label>
            </div>
          </div>
          <div className="door-ctrl-checkbox-container">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="femaleAccess"
              />
              <label className="form-check-label" htmlFor="femaleAccess">
                Female Access Only
              </label>
            </div>
          </div>
          <div className="door-ctrl-checkbox-container">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="exitCheckout"
              />
              <label className="form-check-label" htmlFor="exitCheckout">
                Exit Checkout Door
              </label>
            </div>
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Notes</label>
            <textarea className="form-control" rows={3} defaultValue={""} />
          </div>
        </div>
      </div>
      {/* Hardware Configuration Section */}
      <div className="col-md-6">
        <div className="door-ctrl-card">
          <h2 className="door-ctrl-title">Hardware Configuration</h2>
          <h4 className="mt-4 mb-3">Reader</h4>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Reader Type</label>
            <select className="form-select door-ctrl-select">
              <option selected="">Not Set</option>
            </select>
            <p className="door-ctrl-hint">Not sure what reader type?</p>
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Optional Arguments</label>
            <input
              type="text"
              className="form-control"
              placeholder="Type Your Optional Arguments here..."
            />
          </div>
          <h4 className="mt-4 mb-3">Gatekeeper</h4>
          <div className="door-ctrl-divider" />
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">Gatekeeper</label>
            <select className="form-select door-ctrl-select">
              <option selected="">No Gatekeeper</option>
            </select>
          </div>
          <div className="door-ctrl-form-group">
            <label className="door-ctrl-label">GK Serial</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mt-3">
            <button className="btn btn-outline-secondary">
              Show Club's GK API Key
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
    </>
  )
}

export default AddDoorsFrom
