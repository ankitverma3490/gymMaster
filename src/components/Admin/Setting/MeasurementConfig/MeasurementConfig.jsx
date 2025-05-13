import React, { useState } from 'react';

function MeasurementConfig() {
  const [measurements, setMeasurements] = useState([
    { id: 1, enabled: true, name: 'Height', unit: 'Height' },
    { id: 2, enabled: true, name: 'Weight', unit: 'Weight' },
    { id: 3, enabled: true, name: 'Blood Pressure - Systolic', unit: 'Other' },
    { id: 4, enabled: true, name: 'Blood Pressure - Diastolic', unit: 'Other' },
    { id: 5, enabled: true, name: 'Seated Heart Rate', unit: 'Other' },
    { id: 6, enabled: true, name: 'VO2Max', unit: 'Other' }
  ]);

  const [categoryName, setCategoryName] = useState('Basic Measurements');

  const handleCheckboxChange = (id) => {
    setMeasurements(
      measurements.map((measurement) =>
        measurement.id === id ? { ...measurement, enabled: !measurement.enabled } : measurement
      )
    );
  };

  const handleAddRow = () => {
    const newId = Math.max(...measurements.map(m => m.id)) + 1;
    setMeasurements([...measurements, { id: newId, enabled: true, name: '', unit: 'Other' }]);
  };

  const handleDeleteRow = (id) => {
    setMeasurements(measurements.filter(measurement => measurement.id !== id));
  };

  const handleNameChange = (id, value) => {
    setMeasurements(
      measurements.map((measurement) =>
        measurement.id === id ? { ...measurement, name: value } : measurement
      )
    );
  };

  const handleUnitChange = (id, value) => {
    setMeasurements(
      measurements.map((measurement) =>
        measurement.id === id ? { ...measurement, unit: value } : measurement
      )
    );
  };

  return (
    <div className="container-fluid p-4">
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="dropdown">
            <button 
              className="btn btn-light border dropdown-toggle w-100 text-start" 
              type="button" 
              id="measurementCategoryDropdown" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              {categoryName}
            </button>
            <ul className="dropdown-menu w-100" aria-labelledby="measurementCategoryDropdown">
              <li><a className="dropdown-item" href="#" onClick={() => setCategoryName('Basic Measurements')}>Basic Measurements</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => setCategoryName('Advanced Measurements')}>Advanced Measurements</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => setCategoryName('Custom Measurements')}>Custom Measurements</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <button className="btn btn-primary me-2">
            <i className="bi bi-plus"></i> Add Measurement Type
          </button>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-gear"></i> Measurement Units Configuration
          </button>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-light">
          <div className="mb-3">Measurement Category</div>
          <div className="bg-white p-2 rounded">{categoryName}</div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-outline-danger me-2">Delete Category</button>
            <button className="btn btn-outline-primary me-2" onClick={handleAddRow}>
              <i className="bi bi-plus"></i> Add Row
            </button>
            <button className="btn btn-success">Save</button>
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Enabled</th>
                  <th>Name</th>
                  <th>Unit</th>
                  <th style={{ width: '120px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {measurements.map((measurement) => (
                  <tr key={measurement.id} className={measurement.id % 2 === 0 ? '' : 'bg-light'}>
                    <td className="text-center">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={measurement.enabled}
                        onChange={() => handleCheckboxChange(measurement.id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={measurement.name}
                        onChange={(e) => handleNameChange(measurement.id, e.target.value)}
                      />
                    </td>
                    <td>
                      <div className="dropdown">
                        <button 
                          className="btn btn-light border dropdown-toggle w-100 text-start" 
                          type="button" 
                          data-bs-toggle="dropdown" 
                          aria-expanded="false"
                        >
                          {measurement.unit}
                        </button>
                        <ul className="dropdown-menu w-100">
                          <li><a className="dropdown-item" href="#" onClick={() => handleUnitChange(measurement.id, 'Height')}>Height</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => handleUnitChange(measurement.id, 'Weight')}>Weight</a></li>
                          <li><a className="dropdown-item" href="#" onClick={() => handleUnitChange(measurement.id, 'Other')}>Other</a></li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
                        <button className="btn btn-primary btn-sm me-1">
                          <i className="bi bi-arrow-up"></i>
                        </button>
                        <button className="btn btn-primary btn-sm me-1">
                          <i className="bi bi-arrow-down"></i>
                        </button>
                        {measurement.id > 2 && (
                          <button className="btn btn-danger btn-sm" onClick={() => handleDeleteRow(measurement.id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementConfig;