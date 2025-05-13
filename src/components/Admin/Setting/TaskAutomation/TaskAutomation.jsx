import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TaskAutomation() {
  const initialTaskTypes = [
    { name: "70 days since joined", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: false },
    { name: "Birthday Greeting", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: false },
    { name: "Booking Reminder", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: false },
    { name: "Contact 30 days no visit member", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: false },
    { name: "Failed Integrated Billing Payment", email: "Failed Billing Attempt", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: false },
    { name: "General Stop at Gate Task", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: true },
    { name: "General task", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: true, stop: false },
    { name: "Golf Simulator Welcome", email: "Welcome to Golf Simulator", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: false },
    { name: "Happiness Drop 10 days", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: false },
    { name: "Joining Member Checkup", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: false },
    { name: "Joining Member Welcome", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: false },
    { name: "Member Coming up Booking Reminder", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: true, stop: false },
    { name: "Member Expiry", email: "", sms: false, tag: false, appNotification: false, staffAction: false, warn: false, stop: false }
  ];

  const [taskTypes, setTaskTypes] = useState(initialTaskTypes);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCheckboxChange = (index, key) => {
    const updatedTaskTypes = [...taskTypes];
    updatedTaskTypes[index][key] = !updatedTaskTypes[index][key];
    setTaskTypes(updatedTaskTypes);
  };

  const filteredTaskTypes = taskTypes.filter(task => 
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="container mt-4">
        {/* Header Row */}
        <div className="row mb-3 align-items-center">
          <div className="col-md-6">
            <form className=" d-flex form-inline" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control "
                type="search"
                placeholder="Search Task Types"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{height:"50px"}}
              />
              <button className="btn btn-outline-secondary" type="submit"style={{height:"50px",width:"120px"}}>
                <i className="fas fa-search" /> Search
              </button>
            </form>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-light me-2">
              Separate Overlapping Actions
            </button>
            <Link to="/addtasksetting">
            <button className="btn btn-primary">
              <i className="fas fa-plus" /> Add Task Type
            </button>
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th style={{ width: "25%" }}>Task Name</th>
                <th style={{ width: "20%" }}>Email</th>
                <th style={{ width: "7%" }}>SMS</th>
                <th style={{ width: "7%" }}>Tag</th>
                <th style={{ width: "15%" }}>App Notification</th>
                <th style={{ width: "10%" }}>Staff Action</th>
                <th style={{ width: "7%" }}>Warn</th>
                <th style={{ width: "7%" }}>Stop</th>
                <th style={{ width: "7%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTaskTypes.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.email}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.sms}
                      onChange={() => handleCheckboxChange(index, "sms")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.tag}
                      onChange={() => handleCheckboxChange(index, "tag")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.appNotification}
                      onChange={() => handleCheckboxChange(index, "appNotification")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.staffAction}
                      onChange={() => handleCheckboxChange(index, "staffAction")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.warn}
                      onChange={() => handleCheckboxChange(index, "warn")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.stop}
                      onChange={() => handleCheckboxChange(index, "stop")}
                    />
                  </td>
                  <td className='d-flex'>
                    <button className="btn btn-primary btn-sm me-1">
                      <i className="fas fa-edit" />
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i className="fas fa-trash" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredTaskTypes.length === 0 && (
                <tr>
                  <td colSpan="9" className="text-center text-muted">
                    No task types found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TaskAutomation;
