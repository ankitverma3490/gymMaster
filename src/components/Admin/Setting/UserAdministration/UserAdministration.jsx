import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function UserAdministration() {
  const [activeTab, setActiveTab] = useState("Current Users");
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      name: "Aira Fitness Foxlake Staff",
      email: "foxlake2@airafitness.com",
      twoFA: "Enabled",
      roles: ["Chat Basic", "Dashboard Intermediate", "Doors & Readers Basic"],
    },
    {
      name: "Alyssa Nathan",
      email: "acruz24@me.com",
      twoFA: "Enabled",
      roles: ["Full Administrator"],
    },
    {
      name: "Ashley .",
      email: "ashleyairafitness@gmail.com",
      twoFA: "Enabled",
      roles: ["Club Administrator"],
    },
    {
      name: "Jasmine Crago",
      email: "jmcrago1003@gmail.com",
      twoFA: "Enabled",
      roles: ["Chat Basic", "Dashboard Intermediate", "Doors & Readers Basic"],
    },
    {
      name: "Mike Bell",
      email: "mikebell@airafitness.com",
      twoFA: "Enabled",
      roles: ["Club Administrator"],
    },
    {
      name: "Rohan Maher",
      email: "rohanmaher97@gmail.com",
      twoFA: "Enabled",
      roles: ["Full Administrator"],
    },
    {
      name: "Samantha Ricardo",
      email: "samantha.ricardo02@gmail.com",
      twoFA: "Enabled",
      roles: [
        "Chat Basic",
        "Dashboard Admin",
        "Doors & Readers Basic",
        "Member Admin",
        "POS Admin",
        "Portal Admin",
        "Schedule Admin",
      ],
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle user click
  const handleUserClick = (userId) => {
    navigate(`/adduseradminister`); // Navigate to the user's detail page
  };

  return (
    <div className="container-fluid p-4">
      {/* Add New User Button */}
      <div className="d-flex justify-content-end">
        
          <button
            className="btn btn-primary btn-sm mt-2"
            style={{
              fontSize: "1rem",
              padding: "0.3rem 0.6rem",
              height: "40px",
            }}
          >
            Invite New User
          </button>
        
      </div>

      {/* Filter and Search */}
      <div className="d-flex justify-content-between">
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-3 d-flex align-items-center">
            <label className="me-2">Filter by Club</label>
            <Form.Select className="w-100 me-3" aria-label="Filter by Club">
              <option>Filter by Club</option>
              <option value="Golf Simulator">Golf Simulator</option>
            </Form.Select>
          </div>

          <div className="col-12 col-md-6 mb-3 d-flex align-items-center">
            <label className="me-3">Search</label>
            <Form.Control
              type="text"
              placeholder="Search"
              className="w-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* User Status Filter (Radio Buttons) */}
      <div className="d-flex justify-content-start mb-3 gap-3">
        <Form.Check
          type="radio"
          label="Current Users"
          name="userStatus"
          checked={activeTab === "Current Users"}
          onChange={() => setActiveTab("Current Users")}
        />
        <Form.Check
          type="radio"
          label="Deleted Users"
          name="userStatus"
          checked={activeTab === "Deleted Users"}
          onChange={() => setActiveTab("Deleted Users")}
        />
        <Form.Check
          type="radio"
          label="Online Users"
          name="userStatus"
          checked={activeTab === "Online Users"}
          onChange={() => setActiveTab("Online Users")}
        />
      </div>

      {/* User Table */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>2FA</th>
              <th>Roles</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td className="" onClick={() => handleUserClick(user.id)}>
                  <i className="fas fa-user me-2"></i> {user.name}
                </td>
                <td>{user.email}</td>
                <td>{user.twoFA}</td>
                <td>{user.roles.join(", ")}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-info">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end mt-4 gap-2">
        <button className="btn btn-primary">Previous</button>
        <span className="align-self-center">1</span>
        <button className="btn btn-primary">Next</button>
      </div>
    </div>
  );
}

export default UserAdministration;
