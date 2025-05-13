import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function FindMember() {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Hook to navigate programmatically

  const members = [
    {
      name: "Jeff Morello",
      id: "1000409094",
      date: "Dec 15 2024",
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Daniel Alfaro",
      id: "100021631",
      date: "Oct 20 2021",
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Greg Clauser",
      id: "100049660",
      date: "Pay As You Go",
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Christina Flores",
      id: "100023953",
      date: "Mar 21 2022",
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Brian Jordan",
      id: "100023422",
      date: "Mar 3 2022",
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Jalen Dennis",
      id: "100049084",
      date: "24x Month + Gym Membership",
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Angie Vestal",
      id: "100019749",
      date: "Apr 28 2021",
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Jeff Morello",
      id: "1000409094",
      date: "Dec 15 2024",
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      name: "Daniel Alfaro",
      id: "100021631",
      date: "Oct 20 2021",
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Greg Clauser",
      id: "100049660",
      date: "Pay As You Go",
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      name: "Christina Flores",
      id: "100023953",
      date: "Mar 21 2022",
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Brian Jordan",
      id: "100023422",
      date: "Mar 3 2022",
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Jalen Dennis",
      id: "100049084",
      date: "24x Month + Gym Membership",
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Angie Vestal",
      id: "100019749",
      date: "Apr 28 2021",
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMembers = selectedOption
    ? members
        .filter((member) => {
          if (selectedOption === "Everyone") {
            return true; // Display all members
          } else if (selectedOption === "Current Members") {
            return member.status === "Active";
          } else if (selectedOption === "Recent Visitors") {
            return member.date === "Pay As You Go"; // Example condition for Recent Visitors
          } else if (selectedOption === "Expired Members") {
            return member.status === "Inactive";
          } else if (selectedOption === "Prospects") {
            return member.status === "Inactive"; // Assuming Prospects are inactive members
          }
          return false;
        })
        .filter((member) =>
          member.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : members.filter((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <>
      <div
        className="container-fluid p-4"
        style={{ backgroundColor: "#f4f4f4" }}
      >
        {/* Search Bar and Filters */}
        <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
          <div className="d-flex align-items-center mb-3 mb-md-0">
            {/* Search Bar */}
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search members..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Filter</span>
                </button>
                <ul
                  className="dropdown-menu p-3"
                  style={{ width: "100%", minWidth: "300px" }}
                >
                  {/* Club Filter */}
                  <div>
                    <label htmlFor="club-selection" className="form-label">
                      Club
                    </label>
                    <select id="club-selection" className="form-select">
                      <option value="">All clubs</option>
                      <option value="11">Aira Fitness</option>
                      <option value="24">Aira Fitness Horizon City, Tx</option>
                      <option value="26">Aira Fitness Round Rock</option>
                      <option value="17">Algonquin, IL Private Studio</option>
                      <option value="13">Antioch, IL</option>
                      {/* Add other options */}
                    </select>
                  </div>

                  {/* Category Filter */}
                  <div className="mt-2">
                    <label className="mb-1">Category</label>
                    <select id="category-selection" className="form-select">
                      <option value="">All Categories</option>
                      <option value="8">ONLINE TRAINING</option>
                      <option value="1">Gym Membership</option>
                      <option value="6">Training</option>
                      {/* Add other options */}
                    </select>
                  </div>

                  {/* Membership Filter */}
                  <div className="mt-3">
                    <label className="mb-1">Membership</label>
                    <select id="membership-selection" className="form-select">
                      <option value="">All Membership</option>
                      <option value="8">No Membership</option>
                      <option value="1">Gym Membership</option>
                      {/* Add other options */}
                    </select>
                  </div>

                  {/* Tags Filter */}
                  <div className="mt-3">
                    <label className="mb-1">Tags</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter tags"
                        aria-label="Enter tags"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div>
                    <input type="checkbox" className="me-2" />
                    <label>Assigned to me only</label>
                    <br />
                    <input type="checkbox" className="me-2" />
                    <label>Unassigned members only</label>
                    <br />
                    <input type="checkbox" className="me-2" />
                    <label>Membership on hold</label>
                    <br />
                    <input type="checkbox" className="me-2" />
                    <label>Membership incomplete</label>
                    <br />
                    <input type="checkbox" className="me-2" />
                    <label>Referred Member</label>
                    <br />
                  </div>
                </ul>
              </div>
            </div>
            <button type="button" className="btn btn-outline-secondary">
              Search
            </button>
          </div>

          {/* Sorting Dropdown */}
          <div className="mt-2 mt-md-0">
            <select className="form-select w-100 w-md-auto">
              <option>Last Updated</option>
              <option>Alphabetical First Name (A-Z)</option>
              <option>Alphabetical First Name (Z-A)</option>
              <option>Alphabetical Last Name (A-Z)</option>
              <option>Alphabetical Last Name (Z-A)</option>
              <option>Joining Date Ascending</option>
              <option>Joining Date Descending</option>
            </select>
          </div>
        </div>

        {/* Radio Button Section */}
        <div className="mb-4">
          <input
            type="radio"
            id="everyone"
            name="memberFilter"
            value="Everyone"
            checked={selectedOption === "Everyone"}
            onChange={handleRadioChange}
          />
          <label htmlFor="everyone" className="me-3">
            Everyone
          </label>

          <input
            type="radio"
            id="currentMembers"
            name="memberFilter"
            value="Current Members"
            checked={selectedOption === "Current Members"}
            onChange={handleRadioChange}
          />
          <label htmlFor="currentMembers" className="me-3">
            Current Members
          </label>

          <input
            type="radio"
            id="recentVisitors"
            name="memberFilter"
            value="Recent Visitors"
            checked={selectedOption === "Recent Visitors"}
            onChange={handleRadioChange}
          />
          <label htmlFor="recentVisitors" className="me-3">
            Recent Visitors
          </label>

          <input
            type="radio"
            id="expiredMembers"
            name="memberFilter"
            value="Expired Members"
            checked={selectedOption === "Expired Members"}
            onChange={handleRadioChange}
          />
          <label htmlFor="expiredMembers" className="me-3">
            Expired Members
          </label>

          <input
            type="radio"
            id="prospects"
            name="memberFilter"
            value="Prospects"
            checked={selectedOption === "Prospects"}
            onChange={handleRadioChange}
          />
          <label htmlFor="prospects" className="me-3">
            Prospects
          </label>

          {selectedOption && (
            <div className="mt-3">
              <h5>Selected Option: {selectedOption}</h5>
            </div>
          )}
        </div>

        {/* Member Cards */}
         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {filteredMembers.map((member, index) => (
        <div key={index} className="col">
          <div
            className="card shadow-sm"
            style={{ cursor: "pointer" }} // Change cursor to indicate clickable area
            onClick={() => navigate("/addmember/newmember")} // Navigate on click
          >
            <img
              src={member.image} // Use unique image for each member
              alt={`${member.name}'s profile`}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
              onError={(e) => {
                // Fallback image if the main image fails to load
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  member.name
                )}&size=200&background=random`;
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{member.name}</h5>
              <p className="card-text">#{member.id}</p>
              <p className="card-text">Created on {member.date}</p>
              <button className="btn btn-outline-secondary w-100">
                {member.status === "Inactive" ? "Activate" : "View Member"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </>
  );
}

export default FindMember;
