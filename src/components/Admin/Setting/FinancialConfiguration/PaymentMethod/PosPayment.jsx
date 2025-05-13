import React, { useState } from 'react'

function PosPayment() {
    const [stationName, setStationName] = useState('default station for Aira Fitness Conway, Arkansas');
    const [stationCompany, setStationCompany] = useState('Conway, Arkansas');
    const [gatekeeper, setGatekeeper] = useState('No Gatekeeper');
  
    const handleSaveChanges = () => {
      // Implement save functionality here
      alert('POS Station changes saved!');
    };
  
    const handleRemoveStation = () => {
      // Implement remove functionality here
      alert('POS Station removed!');
    };
  
    const handleAddNewStation = () => {
      // Implement add new station functionality here
      alert('New POS Station added!');
    };
  
  return (
    <>
       <div className="container-fluid p-4 bg-light">
      <div className=" ">
        <h3 className="mb-4">POS Stations</h3>

        <div className="mb-3">
          <label htmlFor="currentStation" className="form-label">Current POS Stations</label>
          <input
            type="text"
            className="form-control"
            id="currentStation"
            value={stationName}
            disabled
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stationName" className="form-label">Station Name</label>
          <input
            type="text"
            className="form-control"
            id="stationName"
            value={stationName}
            onChange={(e) => setStationName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stationCompany" className="form-label">Station Company</label>
          <input
            type="text"
            className="form-control"
            id="stationCompany"
            value={stationCompany}
            onChange={(e) => setStationCompany(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gatekeeper" className="form-label">Gatekeeper</label>
          <select
            className="form-select"
            id="gatekeeper"
            value={gatekeeper}
            onChange={(e) => setGatekeeper(e.target.value)}
          >
            <option>No Gatekeeper</option>
            <option>Gatekeeper GK5.4</option>
            <option>Gatekeeper GK5.3</option>
          </select>
          <small className="form-text text-muted">
            Only applicable when a Receipt Printer or Cash Drawer is being used via a Gatekeeper.
            Only one Gatekeeper can be used per Receipt Printer or Cash Drawer.
          </small>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between mt-4">
          <button className="btn btn-primary mt-2" onClick={handleAddNewStation}>+ Add New POS Station</button>
          <button className="btn btn-danger mt-2" onClick={handleRemoveStation}>Remove Station</button>
          <button className="btn btn-success mt-2" onClick={handleSaveChanges}>Save POS Station Change</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default PosPayment
