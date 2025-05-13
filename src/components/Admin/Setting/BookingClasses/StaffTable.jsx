import React, { useState } from 'react';

function StaffTable() {
  const staffData = [
    { name: 'Samantha Ricardo', category: 'Trainer', club: 'Golf Simulator', timeAvailable: 'No Time Set' },
    { name: 'Jasmine Crago', category: 'Trainer', club: 'Golf Simulator', timeAvailable: 'No Time Set' },
    { name: 'Mike Bell', category: 'Trainer', club: 'Golf Simulator', timeAvailable: 'No Time Set' },
    { name: 'Ashley', category: 'Trainer', club: 'Golf Simulator', timeAvailable: 'No Time Set' },
    { name: 'Alyssa Kathan', category: 'Trainer', club: 'Golf Simulator', timeAvailable: 'No Time Set' },
  ];


  const [showModal, setShowModal] = useState(false); // To manage modal visibility
  const [selectedClub, setSelectedClub] = useState('Golf Simulator');
  const [trainers, setTrainers] = useState([
    { id: 1, fullName: 'Aira Fitness Foxlake Staff', club: 'Golf Simulator' },
    { id: 2, fullName: 'Rohan Maher', club: 'Golf Simulator' },
  ]);
  const [selectedTrainers, setSelectedTrainers] = useState({});

  const handleCheckboxChange = (id) => {
    setSelectedTrainers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSave = () => {
    // Handle saving the selected trainers
    console.log('Selected Trainers:', selectedTrainers);
    setShowModal(false);
  };
  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-md-6">
          <h3>Staff List</h3>
        </div>
        <div className="col-md-6 text-end">
        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)} // Show the modal on button click
        >
          + Add Staff
        </button>
      </div>
  {/* Modal */}
  {showModal && (
        <div
          className="modal fade show modal-lg"
          id="addTrainerModal"
          tabIndex="-1"
          style={{ display: 'block' }}
          aria-labelledby="addTrainerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addTrainerModalLabel">
                  Add Trainer
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)} // Close the modal
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <label htmlFor="clubSelect">Select Club</label>
                  <select
                    className="form-select"
                    id="clubSelect"
                    value={selectedClub}
                    onChange={(e) => setSelectedClub(e.target.value)}
                  >
                    <option>Golf Simulator</option>
                    <option>Tennis Court</option>
                    <option>Swimming Pool</option>
                  </select>
                </div>
                <table className="table mt-3">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Club</th>
                      <th>Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainers.map((trainer) => (
                      <tr key={trainer.id}>
                        <td>{trainer.fullName}</td>
                        <td>{trainer.club}</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedTrainers[trainer.id] || false}
                            onChange={() => handleCheckboxChange(trainer.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Staff Category</th>
              <th>Club</th>
              <th>Time Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff, index) => (
              <tr key={index}>
                <td>{staff.name}</td>
                <td>{staff.category}</td>
                <td>{staff.club}</td>
                <td>{staff.timeAvailable}</td>
                <td>
                <button className="btn  btn-sm me-1">
                <i class="fa-solid fa-user"></i>
                  </button>
                  <button className="btn  btn-sm me-1">
                    <i className="bi bi-pencil-square"></i> 
                  </button>
                  <button className="btn text-danger btn-sm">
                    <i className="bi bi-trash"></i> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffTable;
