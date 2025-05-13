import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddUser() {
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
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className=" d-flex justify-content-end ">
            {" "}
            <Link to="/useadministration">
            <Button variant="primary" className="w-20 mb-3 me-2 ">
              Back
            </Button>
            </Link>
            <Button variant="success" className="w-20 mb-3 ">
              Save
            </Button>
          </div>
        </div>

        <div className="row">
          {/* Left Column for Profile Info */}
          <div className="col-12 col-md-4 text-center mb-4">
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
                <h4>Aira Fitness Foxlake Staff</h4>
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

            <div className="mt-3">
              <Button variant="link">Visit History</Button>
              <Button variant="link">View Staff Timesheet</Button>
            </div>
          </div>

          {/* Right Column for Form Details */}

          <div className="col-12 col-md-8 card">
            {/* Row 1 */}

            <div className="row">
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="card-header">
                    <h5>
                      <i className="fas fa-user"></i> Details
                    </h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3 d-flex align-items-center">
                        <label
                          htmlFor="firstName"
                          className="form-label me-3"
                          style={{ width: "150px" }}
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          defaultValue="Aira Fitness"
                        />
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <label
                          htmlFor="lastName"
                          className="form-label me-3"
                          style={{ width: "150px" }}
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          defaultValue="Foxlake Staff"
                        />
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <label
                          htmlFor="dob"
                          className="form-label me-3"
                          style={{ width: "150px" }}
                        >
                          Date of Birth
                        </label>
                        <input type="date" className="form-control" id="dob" />
                      </div>
                      <div className="mb-3 d-flex align-items-center gap-3">
                        <label className="form-label me-3">Gender</label>
                        <div>
                          <label
                            htmlFor="male"
                            className="form-check-label me-2"
                          >
                            <input
                              type="radio"
                              className="form-check-input"
                              id="male"
                              name="gender"
                              value="Male"
                            />{" "}
                            Male
                          </label>
                          <label
                            htmlFor="female"
                            className="form-check-label ms-3"
                          >
                            <input
                              type="radio"
                              className="form-check-input"
                              id="female"
                              name="gender"
                              value="Female"
                            />{" "}
                            Female
                          </label>
                        </div>
                      </div>
                      <div className="mb-3 d-flex align-items-center gap-3">
                        <label
                          htmlFor="description"
                          className="form-label me-3"
                        >
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="description"
                          rows="3"
                          placeholder="A short description for the staff"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0">
                  <div className="card-header">
                    <h5>
                      <i className="fas fa-phone"></i> Contact
                    </h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3 d-flex align-items-center">
                        <label
                          htmlFor="phone"
                          className="form-label me-3"
                          style={{ width: "150px" }}
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                        />
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <label
                          htmlFor="email"
                          className="form-label me-3"
                          style={{ width: "150px" }}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          defaultValue="foxlake2@airafitness.com"
                        />
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <label
                          htmlFor="emergencyName"
                          className="form-label me-3"
                          style={{ width: "150px" }}
                        >
                          Emergency Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="emergencyName"
                        />
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <label
                          htmlFor="emergencyNumber"
                          className="form-label me-3"
                          style={{ width: "150px" }}
                        >
                          Emergency Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="emergencyNumber"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row">
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="card-header">
                    <h5>
                      <i className="fas fa-cogs"></i> Additional Details
                    </h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3 d-flex align-items-center">
                        <label
                          htmlFor="fobNumber"
                          className="form-label me-3"
                          style={{ width: "150px" }}
                        >
                          Fob Number
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="fobNumber"
                            placeholder="Swipe Key Fob and click button"
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            <i className="fas fa-tag"></i>
                          </button>
                        </div>
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <label
                          htmlFor="accessRosterTime"
                          className="form-label me-3"
                          style={{ width: "150px" }}
                        >
                          Access Roster Time
                        </label>
                        <select className="form-select" id="accessRosterTime">
                          <option>Open Hours of McHenry, IL</option>
                        </select>
                      </div>
                      <small className="form-text text-muted">
                        Club specific rosters will give access at all clubs at
                        the times specified.
                      </small>
                      <div className="mb-3 form-check d-flex gap-2 mt-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="isSalesRep"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="isSalesRep"
                        >
                          Is a Sales Rep
                        </label>
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <label
                          htmlFor="lastLogin"
                          className="form-label me-3"
                          style={{ width: "150px" }}
                        >
                          Last Login
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastLogin"
                          value="May 21 2023 10:35 AM at 76.245.9.160"
                          disabled
                        />
                      </div>
                      <div className="mb-3 d-flex gap-3">
                        <label
                          htmlFor="staffEmailSignature"
                          className="form-label"
                        >
                          Staff Email Signature
                        </label>
                        <button className="btn border" type="button">
                          View/Edit
                        </button>
                      </div>
                      <div className="mb-3 d-flex gap-3 align-items-center">
                        <label
                          htmlFor="qualificationCertificate"
                          className="form-label"
                        >
                          Qualification Certificate
                        </label>
                        <button className="btn  border" type="button">
                          Upload Photo
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0">
                  <div className="card-header">
                    <h5>
                      <i className="fas fa-medkit"></i> First Aid Details
                    </h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3 d-flex gap-3">
                        <label
                          htmlFor="firstAidCertificate"
                          className="form-label "
                        >
                          First Aid Certificate
                        </label>
                        <button className="btn border" type="button">
                          Upload Photo
                        </button>
                      </div>
                      <div className="mb-3 d-flex">
                        <label htmlFor="expiryDate" className="form-label">
                          Expiry Date
                        </label>
                        <div className="input-group">
                          <input
                            type="date"
                            className="form-control"
                            id="expiryDate"
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            <i className="fas fa-calendar-alt"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
