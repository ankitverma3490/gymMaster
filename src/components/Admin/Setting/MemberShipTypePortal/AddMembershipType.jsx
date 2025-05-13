import React, { useState } from "react";
import { Link } from "react-router-dom";


const AddMembershipType = () => {
  const [membershipName, setMembershipName] = useState("");
  const [category, setCategory] = useState("");
  const [club, setClub] = useState("");
  const [membershipBasis, setMembershipBasis] = useState("");
  const [color, setColor] = useState("#00FF00");
  const [paymentFrequency, setPaymentFrequency] = useState("");
  const [membershipFee, setMembershipFee] = useState(50);
  const [isOnlineSignupEnabled, setIsOnlineSignupEnabled] = useState(false);
  const [formsToSign, setFormsToSign] = useState("");
  const [cancellationTerms, setCancellationTerms] = useState("Not Required");

  const handleCheckboxChange = () => {
    setIsOnlineSignupEnabled(!isOnlineSignupEnabled);
  };

  const handleSave = () => {
    console.log("Saved!");
  };


  return (
    <div className="container py-4 border rounde-2 p-4">
        <div className="d-flex justify-content-between mb-3">
        <h4>Add Membership Type</h4>
        <Link to="/typeofmemberportal">
        <button className="btn btn-primary">Back</button>
        </Link>
        </div>
      {/* Membership Type Form */}
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 border rounded-2 p-3">
          <h3> Membership Type</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="membershipName" className="form-label">
                Membership Name
              </label>
              <input
                type="text"
                className="form-control"
                id="membershipName"
                placeholder="Enter membership name"
                value={membershipName}
                onChange={(e) => setMembershipName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Gym Membership">Gym Membership</option>
                <option value="Training">Training</option>
                <option value="Private Studio">Private Studio</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="club" className="form-label">
                Club
              </label>
              <select
                className="form-select"
                id="club"
                value={club}
                onChange={(e) => setClub(e.target.value)}
              >
                <option value="Golf Simulator">Golf Simulator</option>
                <option value="Fitness Club">Fitness Club</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="membershipBasis" className="form-label">
                Membership Basis
              </label>
              <select
                className="form-select"
                id="membershipBasis"
                value={membershipBasis}
                onChange={(e) => setMembershipBasis(e.target.value)}
              >
                <option value="Select...">Select...</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <input
                type="color"
                className="form-control form-control-color"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="nonRenewable"
              />
              <label className="form-check-label" htmlFor="nonRenewable">
                Non Renewable
              </label>
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div className="col-md-6 border rounded-2 p-3">
          <h4>Payment and Fees</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="paymentFrequency" className="form-label">
                Payment Frequency
              </label>
              <select
                className="form-select"
                id="paymentFrequency"
                value={paymentFrequency}
                onChange={(e) => setPaymentFrequency(e.target.value)}
              >
                <option value="Select...">Select...</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="membershipFee" className="form-label">
                Membership Fee
              </label>
              <input
                type="number"
                className="form-control"
                id="membershipFee"
                value={membershipFee}
                onChange={(e) => setMembershipFee(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="membershipFeeInclTax" className="form-label">
                Including Tax
              </label>
              <input
                type="number"
                className="form-control"
                id="membershipFeeInclTax"
                value={membershipFee}
                onChange={(e) => setMembershipFee(e.target.value)}
              />
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="addSignUpFee"
              />
              <label className="form-check-label" htmlFor="addSignUpFee">
                Add Sign-Up Fee
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="addPromoPeriod"
              />
              <label className="form-check-label" htmlFor="addPromoPeriod">
                Add Promotional Period
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="sharedMembership"
              />
              <label className="form-check-label" htmlFor="sharedMembership">
                Shared Membership
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-4">
      <h4>Benefits</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Benefit</th>
              <th>Notes</th>
              <th>Restriction</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>All Doors (except 8 restricted)</td>
              <td>Open Hours of Golf Simulator</td>
              <td>No Limits</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  <i className="bi bi-pencil"></i> 
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="bi bi-trash"></i> 
                </button>
              </td>
            </tr>
            <tr>
              <td>All Classes (Except 8 Restricted)</td>
              <td>No Limits</td>
              <td>Free Classes</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  <i className="bi bi-pencil"></i> 
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="bi bi-trash"></i> 
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

      {/* Buttons Section */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Watch Tutorial</button>
        <button className="btn btn-outline-secondary me-2">Copy Benefits</button>
        <button className="btn btn-primary">Add Benefits</button>
      </div>

      {/* Save Button */}
      <div className="d-flex justify-content-end mt-4">
        <button className="btn btn-success">Save</button>
      </div>
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Sell Membership Online</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="enable-online-signup"
                checked={isOnlineSignupEnabled}
                onChange={handleCheckboxChange}
              />
              <label
                className="form-check-label"
                htmlFor="enable-online-signup"
                data-bs-toggle="tooltip"
                title="Allow existing and/or new Members to sign-up for this membership."
              >
                Enable Online Sign-Up
              </label>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Forms</h5>
            <div className="mb-3">
              <label htmlFor="formsToSign" className="form-label">
                Forms to Sign
              </label>
              <select
                className="form-select"
                id="formsToSign"
                value={formsToSign}
                onChange={(e) => setFormsToSign(e.target.value)}
              >
                <option value="">Select Form</option>
                <option value="Membership Agreement">Membership Agreement</option>
                <option value="Terms and Conditions">Terms and Conditions</option>
                <option value="Privacy Policy">Privacy Policy</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="cancellationTerms" className="form-label">
                Cancellation Terms
              </label>
              <select
                className="form-select"
                id="cancellationTerms"
                value={cancellationTerms}
                onChange={(e) => setCancellationTerms(e.target.value)}
              >
                <option value="Not Required">Not Required</option>
                <option value="Required">Required</option>
              </select>
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-outline-secondary me-2" type="button">
                <i className="bi bi-pencil"></i> Edit
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMembershipType;
