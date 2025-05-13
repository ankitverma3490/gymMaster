import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddMember() {
  const [image, setImage] = useState(null);

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
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  // Check if both Name and Last Name are filled
  const isFormValid = name !== "" && lastName !== "";

  const handleSaveAndAddMembership = () => {
    // Handle the logic when the button is clicked
    if (isFormValid) {
      // Perform save and add membership functionality
      console.log("Saving and adding membership...");
    } else {
      // Optionally handle case when form is invalid
      console.log("Please fill out the required fields.");
    }
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
            <Link to="/addmember/newmember">
            <button
              className="btn btn-success px-4 py-2"
              onClick={handleSaveAndAddMembership}
              disabled={!isFormValid} // Disable the button if the form is not valid
            >
              Save and Add Membership
            </button>
            </Link>
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
                  <button className="nav-link active">Details</button>
                </li>
              </ul>

              <div className="d-flex align-items-center mb-4">
                <h5 className="me-3">Member</h5>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="memberSwitch"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="memberSwitch">
                    Prospect
                  </label>
                </div>
              </div>

              <div className="row">
                {/* Details Section */}
                <div className="col-12 col-md-6">
                  <h5>Details</h5>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control  required"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control required"
                      placeholder="Enter Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
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
                      <label className="form-label">Sales Representative</label>
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
                      <label className="form-label">Referred by Member</label>
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
          </div>
        </div>

        {/* Save Button */}
        <div className="d-flex justify-content-end mt-4">
          <Link to="/addmember/newmember">
        <button
          className="btn btn-success px-4 py-2"
          onClick={handleSaveAndAddMembership}
          disabled={!isFormValid} // Disable the button if the form is not valid
        >
          Save and Add Membership
        </button>
        </Link>
      </div>
      </div>
    </>
  );
}

export default AddMember;
