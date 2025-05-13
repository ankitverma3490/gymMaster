import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddFacilitiesForm = () => {
  const [name, setName] = useState('');
  const [facilityType, setFacilityType] = useState('Golf Simulator (Golf Simulator)');
  const [roster, setRoster] = useState('247');
  const [infoLink, setInfoLink] = useState('');
  const [parentFacility, setParentFacility] = useState('N/A');
  const [allowClassBookings, setAllowClassBookings] = useState(true);
  const [categoryType, setCategoryType] = useState('All Categories');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      name,
      facilityType,
      roster,
      infoLink,
      parentFacility,
      allowClassBookings,
      categoryType,
    });
  };

  return (
    <div className="container-fluid bg-light p-4">
      {/* Top Save Button */}
      <div className="d-flex justify-content-end mb-3">
        <Link to="/bookingclasses">
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
      
      <div className="card">
        <div className="card-body p-4">
          <h2 className="fw-bold mb-4">Add Facilities Category</h2>

          {/* Category Name */}
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Category Name</label>
            <div className="col-sm-9">
              <input 
                type="text" 
                className="form-control" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Facility Type (Dropdown) */}
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Period</label>
            <div className="col-sm-9">
              <div className="input-group">
                <select 
                  className="form-select" 
                  value={facilityType}
                  onChange={(e) => setFacilityType(e.target.value)}
                >
                
                  <option>247</option>
                <option>123</option>
                <option>456</option>
                </select>
              </div>
            </div>
          </div>

          {/* Select Club */}
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Select Club</label>
            <div className="col-sm-9">
              <select 
                className="form-select" 
                value={roster}
                onChange={(e) => setRoster(e.target.value)}
              >
                 <option>Golf Simulator (Golf Simulator)</option>
                  <option>Tennis Court</option>
                  <option>Swimming Pool</option>

              </select>
            </div>
          </div>

          {/* Category Type (Dropdown) */}
          <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Category Type</label>
            <div className="col-sm-9">
              <select 
                className="form-select" 
                value={parentFacility}
                onChange={(e) => setParentFacility(e.target.value)}
              >
                <option>N/A</option>
                <option>Facility 1</option>
                <option>Facility 2</option>
              </select>
            </div>
          </div>

          {/* Information Link */}
       

          {/* Parent Facility */}
        
          {/* Allow Class Bookings */}
         
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

export default AddFacilitiesForm;
