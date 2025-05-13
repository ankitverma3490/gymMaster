import React from "react";
import "./Integration.css"

const Integration = () => {
  return (
    <>
      <div className="container api-dash-container">
        <div className="card api-dash-card">
          <div className="card-header api-dash-card-header">
            <h4 className="mb-0 api-dash-card-title">Member Portal API</h4>
            <div className="api-dash-header-buttons">
              <button className="btn api-dash-btn">
                <i className="bi bi-file-text me-1" /> API Documentation
              </button>
              <button className="btn api-dash-btn">
                <i className="bi bi-gear me-1" /> Member Portal Online
                Integration
              </button>
            </div>
          </div>
          <div className="card-body api-dash-card-body">
            <p className="api-dash-form-description">
              Direct API access to the features and functionality offered by the
              Member Portal. This API allows you to develop custom your own
              implementation of GymMaster's Member Portal.
            </p>
            <div className="mb-3 row api-dash-row">
              <label className="col-sm-2 col-form-label api-dash-col-form-label">
                Base URL
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly=""
                  className="form-control-plaintext api-dash-form-control-plaintext"
                  defaultValue="https://airafitness.gymmasteronline.com/portal/"
                />
              </div>
            </div>
            <div className="mb-3 row api-dash-row">
              <label className="col-sm-2 col-form-label api-dash-col-form-label">
                API Key for Members
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly=""
                  className="form-control api-dash-form-control api-dash-bg-light"
                  defaultValue="5ce0082f585bf833910a0c128b96ba29"
                />
              </div>
            </div>
            <div className="mb-3 row api-dash-row">
              <label className="col-sm-2 col-form-label api-dash-col-form-label">
                API Key for Staff
              </label>
              <div className="col-sm-10">
                <div className="input-group api-dash-input-group">
                  <input
                    type="password"
                    readOnly=""
                    className="form-control api-dash-form-control api-dash-bg-light"
                    defaultValue=""
                  />
                  <button
                    className="btn api-dash-btn api-dash-toggle-btn"
                    type="button"
                    title="Toggle visibility"
                  >
                    <i className="bi bi-eye" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card api-dash-card">
          <div className="card-header api-dash-card-header">
            <h4 className="mb-0 api-dash-card-title">Gatekeeper API</h4>
            <div className="api-dash-header-buttons">
              <button className="btn api-dash-btn">
                <i className="bi bi-file-text me-1" /> Gatekeeper API
                documentation
              </button>
              <button className="btn api-dash-btn">
                <i className="bi bi-door-closed me-1" /> Door reader settings
              </button>
            </div>
          </div>
          <div className="card-body api-dash-card-body">
            <p className="api-dash-form-description">
              The Gatekeeper API allows for third-party access control
              integrations with a GymMaster database. Member, Membership, and
              Configuration settings can be pulled from this API and used by a
              third-party system for identifying which GymMaster members are
              allowed access to the facility.
            </p>
            <div className="mb-3 row api-dash-row">
              <label className="col-sm-2 col-form-label api-dash-col-form-label">
                GM site name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly=""
                  className="form-control-plaintext api-dash-form-control-plaintext"
                  defaultValue="airafitness"
                />
              </div>
            </div>
            <div className="mb-3 row api-dash-row">
              <label className="col-sm-2 col-form-label api-dash-col-form-label">
                API Key
              </label>
              <div className="col-sm-10">
                <div className="input-group api-dash-input-group">
                  <input
                    type="text"
                    readOnly=""
                    className="form-control api-dash-form-control api-dash-bg-light"
                    defaultValue="2a064NK0nWLnsDjEyTfuKkBEh"
                  />
                  <select
                    className="form-select api-dash-form-select"
                    style={{ maxWidth: 200 }}
                  >
                    <option selected="">Golf Simulator</option>
                    <option>Main Entrance</option>
                    <option>Staff Access</option>
                    <option>Emergency Exit</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="api-dash-form-description mt-4">
              Please note that all Gatekeeper API calls require a door for the
              action to take place on. The door id can be found on the door
              readers settings page
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integration;
