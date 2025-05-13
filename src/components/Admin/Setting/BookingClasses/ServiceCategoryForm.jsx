import { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const [selectedClub, setSelectedClub] = useState('All Clubs');
  const [selectedResources, setSelectedResources] = useState('All Resources');
  const [selectedTax, setSelectedTax] = useState('Zero Rated Tax - 0%');
  const [requireRoom, setRequireRoom] = useState(false);
  const [requireEquipment, setRequireEquipment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      categoryName,
      selectedClub,
      selectedResources,
      selectedTax,
      requireRoom,
      requireEquipment
    });
  };

  return (
    <div className="container bg-light p-4 rounded-lg">
      <div className="d-flex justify-content-between mb-4">
        <h2>Create Service Category</h2>
        <Link to="/bookingclasses">
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className='card p-4 '>
        <div className="mb-3 row">
          <label className="col-md-3 col-form-label">Category Name</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-3 col-form-label">Club</label>
          <div className="col-md-9">
            <select
              className="form-select"
              value={selectedClub}
              onChange={(e) => setSelectedClub(e.target.value)}
            >
              <option>All Clubs</option>
              <option>Club 1</option>
              <option>Club 2</option>
              <option>Club 3</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-3 col-form-label">Allowed Resources</label>
          <div className="col-md-9">
            <select
              className="form-select"
              value={selectedResources}
              onChange={(e) => setSelectedResources(e.target.value)}
            >
              <option>All Resources</option>
              <option>Resource 1</option>
              <option>Resource 2</option>
              <option>Resource 3</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-3 col-form-label">Tax</label>
          <div className="col-md-9">
            <select
              className="form-select"
              value={selectedTax}
              onChange={(e) => setSelectedTax(e.target.value)}
            >
              <option>Zero Rated Tax - 0%</option>
              <option>GST - 5%</option>
              <option>HST - 13%</option>
              <option>VAT - 20%</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-3 col-form-label">Require Room</label>
          <div className="col-md-9">
            <input
              type="checkbox"
              className="form-check-input"
              checked={requireRoom}
              onChange={(e) => setRequireRoom(e.target.checked)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-3 col-form-label">Require Equipment</label>
          <div className="col-md-9">
            <input
              type="checkbox"
              className="form-check-input"
              checked={requireEquipment}
              onChange={(e) => setRequireEquipment(e.target.checked)}
            />
            <small className="form-text text-muted">
              Set up Equipment facilities first to enable
            </small>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceCategoryForm;
