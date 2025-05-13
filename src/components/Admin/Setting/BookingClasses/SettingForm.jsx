import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Note: You'll need to include Bootstrap 5 CSS in your project 
// Either via import or a CDN link in your HTML file:
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

const SettingsForm = () => {
  const [name, setName] = useState('');
  const [facilityType, setFacilityType] = useState('Golf Simulator (Golf Simulator)');
  const [roster, setRoster] = useState('247');
  const [infoLink, setInfoLink] = useState('');
  const [parentFacility, setParentFacility] = useState('N/A');
  const [allowClassBookings, setAllowClassBookings] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      name,
      facilityType,
      roster,
      infoLink,
      parentFacility,
      allowClassBookings
    });
  };

  return (
    <div className="container-fluid bg-light p-4">
      {/* Top Save Button */}
      <div className="d-flex justify-content-end mb-3">
       
    <Link to="/bookingclasses">

        <button className='btn btn-primary'>Back</button>
        </Link>
      </div>
      
      <div className="card">
        <div className="card-body p-4">
          <h2 className="fw-bold mb-4">Settings</h2>
          
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
              <input 
                type="text" 
                className="form-control" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Facility Type</label>
            <div className="col-sm-9">
              <div className="input-group">
                <select 
                  className="form-select" 
                  value={facilityType}
                  onChange={(e) => setFacilityType(e.target.value)}
                >
                  <option>Golf Simulator (Golf Simulator)</option>
                  <option>Tennis Court</option>
                  <option>Swimming Pool</option>
                </select>
                <button className="btn btn-outline-secondary" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </button>
                <button className="btn btn-primary" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Roster</label>
            <div className="col-sm-9">
              <div className="input-group">
                <select 
                  className="form-select" 
                  value={roster}
                  onChange={(e) => setRoster(e.target.value)}
                >
                  <option>247</option>
                  <option>123</option>
                  <option>456</option>
                </select>
                <button className="btn btn-primary" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Allowed Booking Service Categories</label>
            <div className="col-sm-9">
              <div className="dropdown">
                <button 
                  className="form-select dropdown-toggle d-flex justify-content-between align-items-center" 
                  type="button" 
                  id="dropdownCategories" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <span className="badge bg-secondary rounded-pill d-inline-flex align-items-center">
                    All Categories 
                    <span className="ms-1">&times;</span>
                  </span>
                  <span></span>
                </button>
                <ul className="dropdown-menu w-100" aria-labelledby="dropdownCategories">
                  <li><a className="dropdown-item" href="#">All Categories</a></li>
                  <li><a className="dropdown-item" href="#">Category 1</a></li>
                  <li><a className="dropdown-item" href="#">Category 2</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Information Link</label>
            <div className="col-sm-9">
              <input 
                type="text" 
                className="form-control" 
                value={infoLink}
                onChange={(e) => setInfoLink(e.target.value)}
              />
            </div>
          </div>
          
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Parent Facility</label>
            <div className="col-sm-9">
              <div className="input-group">
                <select 
                  className="form-select" 
                  value={parentFacility}
                  onChange={(e) => setParentFacility(e.target.value)}
                >
                  <option>N/A</option>
                  <option>Facility 1</option>
                  <option>Facility 2</option>
                </select>
                <button className="btn btn-primary" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Allow Class Bookings</label>
            <div className="col-sm-9">
              <div className="form-check">
                <input 
                  type="checkbox"
                  className="form-check-input"
                  checked={allowClassBookings}
                  onChange={(e) => setAllowClassBookings(e.target.checked)}
                  style={{ width: '20px', height: '20px', backgroundColor: '#0d6efd' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Save Button */}
      <div className="d-flex justify-content-end mt-3">
        <button 
          type="button" 
          className="btn btn-success" 
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SettingsForm;