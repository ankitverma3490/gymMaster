import React, { useState } from "react";
import { Link } from "react-router-dom";

function FacilitieCategory() {
  const [facilities, setFacilities] = useState([
    {
      id: 1,
      name: "Golf Simulator",
      category: "Golf Simulator",
      club: "Golf Simulator",
    },
    // Add more facilities if needed
  ]);

  const handleEdit = (id) => {
    console.log("Editing facility with ID:", id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log("Deleting facility with ID:", id);
    // Implement delete functionality
  };
  return (
    <>
      <div className="container-fluid ">
        <div className="">
          {/* Search and Add Facility Section */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
            <div className="mb-2 mb-md-0">
              <input
                type="text"
                className="form-control"
                placeholder="Search facilities"
              />
            </div>
            <Link to="/addFacilitiesform">
            <button className="btn btn-primary mt-2 mt-md-0 ms-md-3">
              <i className="bi bi-plus-circle me-2"></i> Add Facility
            </button>
            </Link>
          </div>

          {/* Table of Facilities */}
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="thead-light">
                <tr>
                  <th>Category Name</th>
                  <th>Type</th>
                  <th>Club</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {facilities.map((facility) => (
                  <tr key={facility.id}>
                    <td>{facility.name}</td>
                    <td>{facility.category}</td>
                    <td>{facility.club}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleEdit(facility.id)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="btn btn-danger btn-sm ms-2"
                        onClick={() => handleDelete(facility.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacilitieCategory;
