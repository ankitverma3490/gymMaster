import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewAddMember() {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Gym Membership");
  const [membership, setMembership] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const [showAddMeasurement, setShowAddMeasurement] = useState(false); // State to toggle between fields

  // Function to handle the click of the "Add Measurement" button
  const handleAddMeasurementClick = () => {
    setShowAddMeasurement(true); // Show the add measurement fields
  };
  const [workoutProgram, setWorkoutProgram] = useState(
    "Vishal's Workout Program"
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [selectedDateFilter, setSelectedDateFilter] = useState(
    "Upcoming & Past Bookings"
  );
  const [selectedMembershipFilter, setSelectedMembershipFilter] =
    useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [thisModalOpen, setThisModalOpen] = useState(false);
  // State to store the form data
  const [formData, setFormData] = useState({
    dateFrom: "05-07-2025",
    dateTo: "05-07-2025",
    paymentsOnly: false,
    emailMember: false,
  });

  // Function to handle modal open
  const openModals = () => {
    setThisModalOpen(true);
  };

  // Function to handle modal close
  const closeModals = () => {
    setThisModalOpen(false);
  };

  // Function to handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleOk = () => {
    // Handle the form submission or logic here
    console.log("Form Submitted:", formData);
    closeModals();
  };

  return (
    <>
      <div
        className="container-fluid p-4"
        style={{ backgroundColor: "#f5f6fa", minHeight: "100vh" }}
      >
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
          <h4 className="mb-3 mb-md-0">#100053074</h4>
          <div className="d-flex flex-column flex-md-row gap-2">
            <button className="btn btn-outline-dark">QR Quick Add</button>
            <button className="btn btn-success">Save and Add Membership</button>
          </div>
        </div>

        <div className="row g-4">
          {/* Left Side - Profile Image */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <div
              style={{
                width: "100%",
                background: "#fff",
                borderRadius: "10px",
                padding: "20px",
                border: "1px solid #ddd",
              }}
            >
              <div className="text-center">
                <img
                  src={image || "https://i.ibb.co/Q3DM5Gdd/srn-pecky.png"}
                  alt="Profile"
                  className="img-fluid rounded-circle mb-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                />
              </div>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <button
                className="btn btn-light w-100"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <i className="fas fa-camera"></i> Add
              </button>
            </div>
          </div>

          {/* Right Side - Details and Contact */}
          <div className="col-12 col-md-9">
            <div
              className="bg-white p-4 rounded shadow-sm"
              style={{ border: "1px solid #ddd" }}
            >
              <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "details" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("details")}
                    style={{ color: "black" }}
                  >
                    Details
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "membership" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("membership")}
                    style={{ color: "black" }}
                  >
                    MemberShip
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "account&billing" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("account&billing")}
                    style={{ color: "black" }}
                  >
                    Account & Billings
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "communication" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("communication")}
                    style={{ color: "black" }}
                  >
                    Communication
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "bookings" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("bookings")}
                    style={{ color: "black" }}
                  >
                    Bookings
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "training" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("training")}
                    style={{ color: "black" }}
                  >
                    Training
                  </button>
                </li>
              </ul>

              {activeTab === "details" && (
                <div className="tab-content">
                  <div className="d-flex align-items-center mb-4">
                    <h5 className="me-3">Member</h5>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="memberSwitch"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="memberSwitch"
                      >
                        Prospect
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    {/* Details Section */}
                    <div className="col-12 col-md-6">
                      <h5>Details</h5>
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Adam"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Smith"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label d-block">Gender</label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                          />
                          <label className="form-check-label" htmlFor="male">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                          />
                          <label className="form-check-label" htmlFor="female">
                            Female
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Key Fob</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Click to assign Key Fob"
                          />
                          <span className="input-group-text">
                            <i className="fas fa-tag"></i>
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Tags</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Note</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="You may also use the communication tab to add notes."
                        ></textarea>
                      </div>

                      <div className="bg-white" style={{ border: "" }}>
                        <h5 className="mb-4">Additional Details</h5>

                        <div className="mb-3">
                          <label className="form-label">Club</label>
                          <select className="form-select">
                            <option>Golf Simulator</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Trainer</label>
                          <select className="form-select">
                            <option>N/A</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Joining Date</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Sales Representative
                          </label>
                          <select className="form-select">
                            <option>N/A</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Source Promotion</label>
                          <select className="form-select">
                            <option>Unknown</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Referred by Member
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Type Member name here..."
                            />
                            <span className="input-group-text">
                              <i className="fas fa-search"></i>
                            </span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Occupation</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Student"
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Organization</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="A Company"
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Involvement Type</label>
                          <select className="form-select">
                            <option>Member</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Contact Section */}
                    <div className="col-12 col-md-6">
                      <h5>Contact</h5>

                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="email@example.com"
                          />
                          <span className="input-group-text">
                            <i className="fas fa-envelope"></i>
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Cell</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                          />
                          <span className="input-group-text">
                            <i className="fas fa-phone"></i>
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Work</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="038 232 119"
                          />
                          <span className="input-group-text">
                            <i className="fas fa-briefcase"></i>
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Address Search</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="123 Main Street"
                          />
                          <span className="input-group-text">
                            <i className="fas fa-search"></i>
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Street</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your address"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">State</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="California"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="81204"
                        />
                      </div>
                      <div className="bg-white " style={{ border: "" }}>
                        <h5 className="mb-4">Emergency Contact</h5>

                        <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Adam Smith"
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Relationship</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Father"
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Cell</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="021 452 3872"
                            />
                            <span className="input-group-text">
                              <i className="fas fa-phone"></i>
                            </span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="email@example.com"
                          />
                        </div>

                        <div className="mb-3">
                          <button
                            type="button"
                            className="btn btn-outline-dark w-100"
                          >
                            <i className="fas fa-plus me-2"></i>Add Contact
                          </button>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Medical Information (if applicable)
                          </label>
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter any medical information here..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "membership" && (
                <div className="tab-content">
                  <div
                    className="container-fluid p-4"
                    style={{ backgroundColor: "#f5f6fa" }}
                  >
                    <div className="row mb-4">
                      {/* Title Section */}
                      <div className="col-12 d-flex justify-content-between align-items-center">
                        <h3 className="m-0">Add a Membership</h3>
                        <div className="d-flex align-items-center">
                          <button className="btn btn-outline-secondary me-3">
                            <i className="bi bi-person-x"></i> Hold Membership
                          </button>
                          <button className="btn btn-outline-secondary me-3">
                            <i className="bi bi-gift"></i> Gift Time
                          </button>
                          <button className="btn btn-primary">
                            <i className="bi bi-plus-circle"></i> Add Membership
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white p-4 rounded shadow-sm">
                      <div className="row">
                        <div className="col-md-6">
                          {/* Category Field */}
                          <div className="mb-3">
                            <label htmlFor="category" className="form-label">
                              Category
                            </label>
                            <select
                              className="form-select"
                              id="membership"
                              value={membership}
                              onChange={(e) => setMembership(e.target.value)}
                            >
                              <option value="">Select Category</option>
                              <option value="Basic">Golf Simulator</option>
                            </select>
                          </div>

                          {/* Membership Field */}
                          <div className="mb-3">
                            <label htmlFor="membership" className="form-label">
                              Membership
                            </label>
                            <select
                              className="form-select"
                              id="membership"
                              value={membership}
                              onChange={(e) => setMembership(e.target.value)}
                            >
                              <option value="">Select Membership</option>
                              <option value="Basic">Basic</option>
                              <option value="Premium">Premium</option>
                              <option value="VIP">VIP</option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="membership" className="form-label">
                              Start Date
                            </label>
                            <input type="date" class="form-control" id="date" aria-describedby="date" />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="membership" className="form-label">
                              First Payment Date
                            </label>
                            <input type="date" class="form-control" id="date" aria-describedby="date" />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="membership" className="form-label">
                              Min Term
                            </label>
                            <div className="d-flex">
                            <input type="text" class="form-control" id="text" aria-describedby="text" placeholder="0" />
                            <select
                              className="form-select"
                              id="membership"
                              value={membership}
                              onChange={(e) => setMembership(e.target.value)}
                            >
                              <option value="">months</option>
                              <option value="Basic">years</option>
                              <option value="Basic">week</option>
                            </select>
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="membership" className="form-label">
                              Referral / Discount Code
                            </label>
                            <div className="d-flex">

                            <select
                              className="form-select"
                              id="membership"
                              value={membership}
                              onChange={(e) => setMembership(e.target.value)}
                            >
                              <option value="">No Code Selected</option>
                            </select>
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="membership" className="form-label">
                              Price
                            </label>
                            <div className="d-flex">
                            <input type="text" class="form-control" id="text" aria-describedby="text" placeholder="$97.00" />
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="membership" className="form-label">
                              Up Front Fee
                            </label>
                            <div className="d-flex">
                            <input type="text" class="form-control" id="text" aria-describedby="text" placeholder="$0.00" />
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="membership" className="form-label">
                              Sign-Up Fee
                            </label>
                            <div className="d-flex">
                            <input type="text" class="form-control" id="text" aria-describedby="text" placeholder="$97.00" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "account&billing" && (
                <div className="tab-content">
                  <div className="billing-container container my-4">
                    {/* Top Action Buttons */}
                    <div className="billing-action-buttons">
                      <button className="btn billing-prepay-btn border">
                        <i className="bi bi-fast-forward-fill" /> Prepay
                      </button>
                      <button
                        className="btn billing-adjustment-btn border"
                        onClick={openModal} // Open modal on click
                      >
                        <i className="bi bi-sliders" /> Adjustment
                      </button>
                      <button
                        className="btn billing-statement-btn border"
                        onClick={openModals} // Open modal on click
                      >
                        <i className="bi bi-list-ul" /> Statement
                      </button>
                      <Link to="/pointOfSales">
                        <button
                          className="btn text-white"
                          style={{ backgroundColor: "#2175b5" }}
                        >
                          <i className="bi bi-plus" /> Add Payment
                        </button>
                      </Link>
                    </div>

                    {/* Modal Structure */}
                    {isModalOpen && (
                      <div
                        className="modal fade show modal-lg"
                        tabIndex="-1"
                        style={{
                          display: "block",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="false"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Adjust Members Account
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                onClick={closeModal} // Close modal on click
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="alert alert-danger">
                                No charges available to add Credit Notes for. To
                                add credit to this member's account, go to the
                                POS and make a deposit instead.
                              </div>

                              <div>
                                <label className="form-label">
                                  If you need to add a charge, please use the
                                  Point of Sale.
                                </label>
                                <div>
                                  <input
                                    type="radio"
                                    id="creditNote"
                                    name="noteType"
                                  />
                                  <label htmlFor="creditNote">
                                    Credit Note - (For reversing a sale)
                                  </label>
                                </div>
                                <div>
                                  <input
                                    type="radio"
                                    id="debitNote"
                                    name="noteType"
                                  />
                                  <label htmlFor="debitNote">
                                    Debit Note - (For reversing or refunding a
                                    payment)
                                  </label>
                                </div>
                              </div>

                              <div className="mb-3">
                                <label className="form-label">Payment</label>
                                <select className="form-select">
                                  <option>Please Select One</option>
                                </select>
                              </div>

                              <div className="mb-3">
                                <label className="form-label">
                                  Refund Payment Method
                                </label>
                                <select className="form-select">
                                  <option>PayPal</option>
                                  {/* Add other options here */}
                                </select>
                              </div>

                              <div className="mb-3">
                                <label className="form-label">
                                  Debit Note Reason
                                </label>
                                <input type="text" className="form-control" />
                              </div>

                              <div className="mb-3">
                                <label className="form-label">Amount</label>
                                <input type="number" className="form-control" />
                              </div>
                            </div>

                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={closeModal}
                              >
                                Cancel
                              </button>
                              <button type="button" className="btn btn-primary">
                                Ok
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Modal Structure */}
                    {thisModalOpen && (
                      <div
                        className="modal fade show"
                        tabIndex="-1"
                        style={{
                          display: "block",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="false"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Account Statement
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                onClick={closeModals} // Close modal on click
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="mb-3">
                                <label className="form-label">Date From</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  name="dateFrom"
                                  value={formData.dateFrom}
                                  onChange={handleChange}
                                />
                              </div>

                              <div className="mb-3">
                                <label className="form-label">Date To</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  name="dateTo"
                                  value={formData.dateTo}
                                  onChange={handleChange}
                                />
                              </div>

                              <div className="mb-3">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="paymentsOnly"
                                    name="paymentsOnly"
                                    checked={formData.paymentsOnly}
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="paymentsOnly"
                                  >
                                    Payments Only
                                  </label>
                                </div>
                              </div>

                              <div className="mb-3">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="emailMember"
                                    name="emailMember"
                                    checked={formData.emailMember}
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="emailMember"
                                  >
                                    Email Member
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={closeModals}
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleOk}
                              >
                                Ok
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Main Billing Card */}
                    <div className="billing-card">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h2 className="billing-heading">Billing Provider</h2>
                        <div>
                          <button className="btn billing-preview-btn me-2 border">
                            Preview
                          </button>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn billing-manage-btn dropdown-toggle billing-dropdown-toggle border"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Manage Billing{" "}
                              <i className="bi bi-chevron-down" />
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Option 1
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Option 2
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="billing-alert">NO BILLING SETUP</div>
                      <div className="billing-warning-text">
                        This member will not be able to be billed until this
                        section is completed. Reason:{" "}
                        <span className="billing-highlight">
                          No Default Billing Method Selected
                        </span>
                      </div>
                      <div className="billing-radio-group">
                        <div className="billing-radio-item">
                          <input
                            type="radio"
                            id="billAuto"
                            name="billingOption"
                            className="form-check-input"
                            defaultChecked=""
                          />
                          <label
                            htmlFor="billAuto"
                            className="form-check-label"
                          >
                            Bill Member Automatically
                          </label>
                        </div>
                        <div className="billing-radio-item">
                          <input
                            type="radio"
                            id="dontBillAuto"
                            name="billingOption"
                            className="form-check-input"
                          />
                          <label
                            htmlFor="dontBillAuto"
                            className="form-check-label"
                          >
                            Don't Bill Automatically
                          </label>
                        </div>
                        <div className="billing-radio-item">
                          <input
                            type="radio"
                            id="neverBill"
                            name="billingOption"
                            className="form-check-input"
                          />
                          <label
                            htmlFor="neverBill"
                            className="form-check-label"
                          >
                            Never Bill
                          </label>
                        </div>
                      </div>
                      <div className="billing-form-group">
                        <label className="billing-label">
                          Billing Provider
                        </label>
                        <div className="input-group">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected="">Clover Connect</option>
                          </select>
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            <i className="bi bi-pencil" />
                          </button>
                        </div>
                      </div>
                      <h3 className="billing-subheading">
                        Clover Connect Billing
                      </h3>
                      <h3 className="billing-subheading">
                        Add New Payment Details
                      </h3>
                      <div className="billing-form-group">
                        <label className="billing-label">
                          Payment Method Type
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected="">Select Payment Type</option>
                        </select>
                      </div>
                      <h3 className="billing-subheading">Other Information</h3>
                      <div className="billing-form-group">
                        <label className="billing-label">
                          Max Amount to Bill
                        </label>
                        <input
                          type="text"
                          className="form-control billing-form-control"
                          placeholder="Optional, leave blank for default billing"
                        />
                        <div className="billing-helper-text">
                          Max Amount to Bill Members on their Billing Day. This
                          is if the member has agreed to pay back their debts
                          slowly, and are paying a large sum every month until
                          debts cleared.
                        </div>
                      </div>
                      <div className="billing-form-group">
                        <label className="billing-label">
                          Deadline for Owing
                        </label>
                        <div className="billing-input-with-icon">
                          <input
                            type="date"
                            className="form-control billing-form-control"
                          />
                        </div>
                      </div>
                      <div className="billing-form-group">
                        <label className="billing-label">
                          Billing Comments
                        </label>
                        <textarea
                          className="form-control billing-form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <div className="mb-4">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="badDebtor"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="badDebtor"
                          >
                            Bad Debtor
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="blacklisted"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="blacklisted"
                          >
                            Blacklisted
                          </label>
                        </div>
                      </div>
                      <div className="text-end">
                        <button className="btn btn-success">
                          Save Billing
                        </button>
                      </div>
                    </div>
                    <div className="card bg-light p-3 rounded">
                      <h4 className="my-4">Vishau Account History</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected="">All</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3 form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleCheck1"
                            >
                              Show Future Transactions
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 my-4 d-flex align-items-center ">
                          <div className="form-check ms-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Overview
                            </label>
                          </div>
                          <div className="form-check ms-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Charges
                            </label>
                          </div>
                          <div className="form-check ms-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Payments
                            </label>
                          </div>
                          <div className="form-check ms-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Show Voided
                            </label>
                          </div>
                        </div>
                        <span className="ms-5">No Transactions</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "communication" && (
                <div className="tab-content">
                  <div className="container-fluid">
                    <div className="row py-3">
                      {/* Search and Filter Section */}
                      <div className="col-12 col-md-6 d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control me-2"
                          placeholder="Search"
                        />
                        <select className="form-select ms-2">
                          <option>Filters</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </div>

                      {/* Add Button */}
                      <div className="col-12 col-md-6 d-flex justify-content-end">
                        <button
                          className="btn"
                          style={{ backgroundColor: "#2b689c", color: "white" }}
                          onClick={openModal}
                        >
                          <i className="bi bi-plus-circle"></i> Add
                        </button>

                        {/* Modal */}
                        {isModalOpen && (
                          <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">Add New Data</h5>
                                  <button type="button" className="btn-close" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                  <div className="row mb-4">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label className="form-label">Upload Image</label>
                                        <input type="file" className="form-control" accept="image/*" onChange={handleImageUpload} />
                                      </div>
                                      {image && (
                                        <div className="text-center mb-3">
                                          <img src={image} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
                                        </div>
                                      )}
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label className="form-label">Add Note</label>
                                        <textarea className="form-control" rows="3" placeholder="Enter note..."></textarea>
                                      </div>
                                      <div className="mb-3">
                                        <label className="form-label">Add Task</label>
                                        <input type="text" className="form-control" placeholder="Enter task..." />
                                        <div className="mt-2">
                                          <label className="form-label">Due Date</label>
                                          <input type="date" className="form-control" />
                                        </div>
                                      </div>
                                      <div className="mb-3">
                                        <label className="form-label">Add Call Log</label>
                                        <input type="text" className="form-control mb-2" placeholder="Phone number" />
                                        <textarea className="form-control" rows="2" placeholder="Call notes..."></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-outline-dark" onClick={closeModal}>Cancel</button>
                                  <button type="button" className="btn" style={{ backgroundColor: '#2b689c', color: 'white' }}>
                                     Add
                                  </button>                                
                                  </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tabs Section */}
                    <div className="row py-2">
                      <div className="col-12 d-flex">
                        <Link to="/addmember/memberquestionnaires">
                          <button
                            className={`btn me-2 ${
                              activeTab === "questionnaires"
                                ? "btn-primary"
                                : "btn-outline-primary"
                            }`}
                          >
                            Questionnaires
                          </button>
                        </Link>
                        <button
                          className={`btn me-2 ${
                            activeTab === "completeTasks"
                              ? "btn-primary"
                              : "btn-outline-primary"
                          }`}
                          onClick={() => handleTabClick("completeTasks")}
                        >
                          Complete Tasks
                        </button>
                        <button
                          className={`btn me-2 ${
                            activeTab === "contracts"
                              ? "btn-primary"
                              : "btn-outline-primary"
                          }`}
                          onClick={() => handleTabClick("contracts")}
                        >
                          Contracts
                        </button>
                      </div>
                    </div>

                    {/* Table Section */}
                    <div className="row">
                      <div className="col-12">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Subject</th>
                              <th>Sender/Assignee</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Example Row */}
                            <tr>
                              <td>01/01/2022</td>
                              <td>Subject 1</td>
                              <td>John Doe</td>
                              <td>Completed</td>
                              <td>
                                <button className="btn btn-info btn-sm">
                                  View
                                </button>
                              </td>
                            </tr>
                            {/* Add more rows as needed */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "bookings" && (
                <div className="tab-content">
                  <div className="container-fluid p-4">
                    <div className="row mb-4">
                      {/* Title Section */}
                      <div className="col-12 d-flex justify-content-between align-items-center">
                        <h3 className="m-0">Member Bookings</h3>
                        <div className="d-flex align-items-center">
                          <button className="btn btn-outline-danger me-3">
                            <i className="bi bi-person-x"></i> Block Online
                            Bookings
                          </button>
                          <button className="btn btn-outline-secondary me-3">
                            <i className="bi bi-printer"></i> Print Booking List
                          </button>
                          <Link to="/schedulecalender">
                            <button className="btn btn-primary">
                              <i className="bi bi-plus-circle"></i> New Booking
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Filter Section */}
                    <div className="row mb-3">
                      <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
                        <label htmlFor="dateFilter" className="form-label me-2">
                          Filter by Date
                        </label>
                        <select
                          id="dateFilter"
                          className="form-select"
                          value={selectedDateFilter}
                          onChange={(e) =>
                            setSelectedDateFilter(e.target.value)
                          }
                        >
                          <option>Upcoming & Past Bookings</option>
                          <option>Upcoming Bookings</option>
                          <option>Past Bookings</option>
                        </select>
                      </div>

                      <div className="col-md-6 d-flex align-items-center">
                        <label
                          htmlFor="membershipFilter"
                          className="form-label me-2"
                        >
                          Filter by Membership
                        </label>
                        <select
                          id="membershipFilter"
                          className="form-select"
                          value={selectedMembershipFilter}
                          onChange={(e) =>
                            setSelectedMembershipFilter(e.target.value)
                          }
                        >
                          <option>All</option>
                          <option>Silver</option>
                          <option>Gold</option>
                          <option>Platinum</option>
                        </select>
                      </div>
                    </div>

                    {/* Table Section */}
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Resource</th>
                            <th>Status</th>
                            <th>Membership Used</th>
                            <th>Price</th>
                            <th>Notes</th>
                            <th>Paid</th>
                            <th>Check-in</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Example Row */}
                          <tr>
                            <td>01/01/2022</td>
                            <td>10:00 AM</td>
                            <td>Room 1</td>
                            <td>Confirmed</td>
                            <td>Gold</td>
                            <td>$50</td>
                            <td>No additional notes</td>
                            <td>Yes</td>
                            <td>
                              <button className="btn btn-info btn-sm">
                                Check-in
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-warning btn-sm">
                                Edit
                              </button>
                              <button className="btn btn-danger btn-sm ms-2">
                                Delete
                              </button>
                            </td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "training" && (
                <div className="tab-content">
                  <div
                    className="container-fluid p-4"
                    style={{ backgroundColor: "#f5f6fa" }}
                  >
                    <div className="row mb-4">
                      {/* Workouts Section */}
                      <div className="col-12 card p-4">
                        <h3>Workouts</h3>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="viewArchived"
                              checked={showArchived}
                              onChange={() => setShowArchived(!showArchived)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="viewArchived"
                            >
                              View Archived
                            </label>
                          </div>
                          <div className="d-flex gap-2">
                            <button className="btn btn-primary">
                              Add New Program
                            </button>
                            <button className="btn btn-outline-primary">
                              Add Program From Template
                            </button>
                          </div>
                        </div>

                        <div
                          className="mt-3 p-4 bg-white rounded shadow-sm"
                          style={{ border: "1px solid #ddd" }}
                        >
                          <h5>{workoutProgram}</h5>
                          <div className="d-flex justify-content-between">
                            <button className="btn btn-danger">Remove</button>
                            <button className="btn btn-secondary">
                              Results
                            </button>
                            <button className="btn btn-success">
                              Add Workout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      {/* Measurements & Progress Summary Section */}
                      <div className="col-12 card p-4">
                        <h3>Measurements & Progress Summary</h3>
                        <div className="d-flex gap-2">
                          <Link to="/measurementconfig">
                            <button className="btn btn-outline-primary">
                              Configure Measurement
                            </button>
                          </Link>
                          {/* Add Measurement button */}
                          <button
                            className="btn btn-primary"
                            onClick={handleAddMeasurementClick}
                          >
                            Add Measurement
                          </button>
                        </div>

                        <div className="d-flex justify-content-between card p-4 mt-2">
                          <div className="d-flex gap-3">
                            {/* Conditionally render "Date of Comparison Measurement" or the "Add Measurement" form */}
                            {showAddMeasurement ? (
                              <div className="fit-container">
                                <div className="fit-card">
                                  {/* Top Section */}
                                  <div className="row mb-4">
                                    {/* Left Column - Photo Upload */}
                                    <div className="col-md-6">
                                      <div className="fit-section">
                                        <div className="fit-upload-section mb-3">
                                          <span className="fit-upload-label">
                                            Upload Photos
                                          </span>
                                          <div className="fit-divider flex-grow-1" />
                                        </div>
                                        <div className="d-flex justify-content-center mb-3">
                                          <button className="fit-select-btn">
                                            Select
                                          </button>
                                        </div>
                                        <div className="fit-upload-section">
                                          <span className="fit-upload-label">
                                            Default?
                                          </span>
                                          <div className="fit-divider flex-grow-1" />
                                        </div>
                                      </div>
                                    </div>
                                    {/* Right Column - Personal Details */}
                                    <div className="col-md-6">
                                      <div className="fit-personal-details">
                                        <label className="fit-label">Age</label>
                                        <input
                                          type="number"
                                          className="form-control"
                                          defaultValue={0}
                                        />
                                        <label className="fit-label">
                                          Gender
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                        <label className="fit-label">
                                          Date
                                        </label>
                                        <div className="fit-date-input w-100">
                                          <input
                                            type="date"
                                            className="form-control"
                                          />
                                        </div>
                                        <label className="fit-label">
                                          Notes
                                        </label>
                                        <textarea
                                          className="form-control"
                                          rows={4}
                                          defaultValue={""}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  {/* Measurements Grid */}
                                  <div className="fit-measurements-grid">
                                    {/* Basic Measurements Column */}
                                    <div className="fit-measurement-column">
                                      <h3>Basic Measurements</h3>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Height (cm)
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Weight (kg)
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Blood Pressure - Systolic
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Blood Pressure - Diastolic
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Seated Heart Rate
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          VO2Max
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    {/* General Measurements Column */}
                                    <div className="fit-measurement-column">
                                      <h3>General Measurements</h3>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Weight
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Shoulders
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Bust
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">Arm</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Chest
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Waist
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Hips
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Gluteals
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Mid Thigh
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Calf
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Bicep
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Tricep
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Subscapular
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Iliac Crest
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Body Fat
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Fat Mass
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Lean Mass
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Body Mass Index
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                        <label className="fit-label">
                                          Max Oxygen Uptake
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    {/* Girth Measurements Column */}
                                    <div className="fit-measurement-column">
                                      <div>
                                        <h3>Girth Measurements</h3>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Shoulders (mm)
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Chest (mm)
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Waist (mm)
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Hips (mm)
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Mid Thigh (mm)
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Calf (mm)
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Bicep Flexed (mm)
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Bicep Relaxed (mm)
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="mt-4">
                                        <div className="d-flex align-items-center justify-content-between ">
                                          <h3>undefined</h3>
                                          <div className="d-flex">
                                            <h3 className="ms-5">1st</h3>
                                            <h3 className="ms-5">2nd</h3>
                                            <h3 className="ms-5">3rd</h3>
                                          </div>
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Tricep
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                          <input
                                            type="text"
                                            className="form-control mx-2"
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Bicep
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                          <input
                                            type="text"
                                            className="form-control mx-2"
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Subscapular
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                          <input
                                            type="text"
                                            className="form-control mx-2"
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Chest
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                          <input
                                            type="text"
                                            className="form-control mx-2"
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Suprailiac
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                          <input
                                            type="text"
                                            className="form-control mx-2"
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Abdominal
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                          <input
                                            type="text"
                                            className="form-control mx-2"
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Thigh
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                          <input
                                            type="text"
                                            className="form-control mx-2"
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Calf
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                          <input
                                            type="text"
                                            className="form-control mx-2"
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Supraspinale
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                          <input
                                            type="text"
                                            className="form-control mx-2"
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="fit-form-row border-bottom d-flex align-items-center mb-2 pb-2">
                                          <label className="fit-label">
                                            Mid Axilla
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                          <input
                                            type="text"
                                            className="form-control mx-2"
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="d-flex gap-3">
                                <div className="mb-3 ">
                                  <label
                                    htmlFor="comparisonDate"
                                    className="form-label"
                                  >
                                    Date of Comparison Measurement
                                  </label>
                                  <select
                                    className="form-select"
                                    id="comparisonDate"
                                  >
                                    <option>Select Date</option>
                                    <option>2023-04-01</option>
                                    <option>2023-05-01</option>
                                    <option>2023-06-01</option>
                                  </select>
                                </div>

                                <div className="mb-3 ">
                                  <label
                                    htmlFor="lastMeasurement"
                                    className="form-label"
                                  >
                                    Date of Last Measurement
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="lastMeasurement"
                                    value="N/A"
                                    readOnly
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conditionally show the measurement form if the "Add Measurement" button was clicked */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-success px-4 py-2">
            Save and Add Membership
          </button>
        </div>
      </div>
    </>
  );
}

export default NewAddMember;
