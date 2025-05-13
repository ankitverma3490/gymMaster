import React, { useState } from 'react'

function SettingService() {
     const [activeTab, setActiveTab] = useState('All Settings');
      const [activeSection, setActiveSection] = useState('Advanced Configuration'); 
      const [isChecked, setIsChecked] = useState(true);
      const [selectedOption, setSelectedOption] = useState('email');
      const [selectedTemplate, setSelectedTemplate] = useState('Member Portal Waitlist SMS Update');
      const [emailTemplate, setEmailTemplate] = useState('Class Waitlist Update Email');
      const [enableLateBooking, setEnableLateBooking] = useState(false);
      const [enableWaiverHighlight, setEnableWaiverHighlight] = useState(false);
      const [daysBeforeClass, setDaysBeforeClass] = useState(8);
      const [minutesBeforeClass, setMinutesBeforeClass] = useState(5);
      const [enableEmail, setEnableEmail] = useState(true);
      const [selecteTemplate, setSelecteTemplate] = useState("Member Portal Class Booking");
    
      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    
      const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
      };
    // Track the active section



    const [isPrerequisiteEnabled, setIsPrerequisiteEnabled] = useState(false);

  const handleCheckboxChanges = () => {
    setIsPrerequisiteEnabled(!isPrerequisiteEnabled);
  };
  return (
    <>
       <div className="container-fluid ">
        {/* Row for Header: Advanced Configuration & Member Portal Configuration */}
        {/* <div className="row mb-4">
          <div className="col-md-6 col-lg-4">
            <div
              className={`d-flex align-items-center p-3 cursor-pointer rounded ${activeSection === 'Advanced Configuration' ? 'bg-primary text-white' : 'bg-secondary bg-opacity-10'}`}
              onClick={() => setActiveSection('Advanced Configuration')}
            >
              <i className="bi bi-gear-fill me-2"></i>
              <span className="text-primary">Advanced Configuration</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
              className={`d-flex align-items-center p-3 cursor-pointer rounded ${activeSection === 'Member Portal Configuration' ? 'bg-primary text-white' : 'bg-secondary bg-opacity-10'}`}
              onClick={() => setActiveSection('Member Portal Configuration')}
            >
              <i className="bi bi-person-fill me-2"></i>
              <span>Member Portal Configuration</span>
            </div>
          </div>
        </div> */}
           <div className="d-flex mb-3">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'Advanced' ? 'active bg-secondary bg-opacity-10' : ''}`}
                  onClick={() => setActiveTab('Advanced')}
                >
                  Advanced Configuration
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'All Settings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('All Settings')}
                >
                  <i className="bi bi-box me-1"></i>
                  Member Portal Configuration
                </button>
              </li>
            </ul>
          </div>
        

        <div className="bg-secondary bg-opacity-10 p-3 rounded">
          {/* Search Bar and Save Button */}
          <div className="row mb-3">
            <div className="col-md-8">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button className="btn btn-outline-secondary" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <button className="btn btn-success">Save</button>
            </div>
          </div>

          {/* Tabs for All Settings and Features */}
          <div className="d-flex mb-3">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'All Settings' ? 'active bg-secondary bg-opacity-10' : ''}`}
                  onClick={() => setActiveTab('All Settings')}
                >
                  All Settings
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'Features' ? 'active' : ''}`}
                  onClick={() => setActiveTab('Features')}
                >
                  <i className="bi bi-box me-1"></i>
                  Features
                </button>
              </li>
            </ul>
          </div>

          {/* Content Based on Active Tab */}
          <div className="bg-white p-3 rounded">
            {activeTab === 'All Settings' && (
             <p>No Result</p>
       
            )}

           {activeTab === 'Advanced' && (
              <div>
                <h4 className="mb-4"> Classes</h4>
                <div className='card p-4 bg-light'>
                <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="payLater"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="payLater">
            Disable 'pay later' when class starts soon
          </label>
          <div className="ms-4 text-muted">
            Disable 'pay later' option when the class begins within 15 minutes
          </div>
        </div>

        {/* Dropdown Section */}
        <div className="mb-4">
          <label className="fw-bold mb-2" htmlFor="communicationMethod">
            Class waitlist update communication
          </label>
          <div className="ms-4 text-muted">
            Select notification method when a member is moved from the waitlist into class.
            When SMS is selected, clients with no provided number will be sent an email.
          </div>
          <select
            className="form-select mt-2"
            id="communicationMethod"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="email">Send an email</option>
            <option value="sms">Send an SMS</option>
            <option value="both">Send both</option>
          </select>
        </div>
        <div className='card p-4 bg-light'>
        <div className="mb-4">
          <label className="form-label">Template - class waitlist update SMS</label>
          <div className="d-flex gap-2 align-items-center">
            <select
              className="form-select w-auto"
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
            >
              <option value="Member Portal Waitlist SMS Update">Member Portal Waitlist SMS Update</option>
              <option value="Another Template">Another Template</option>
            </select>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-pencil"></i> Edit
            </button>
          </div>
          <small className="text-muted">
            SMS Template used for class booking waitlist update. This is sent when a member is automatically added to a class from the waitlist.
          </small>
        </div>

        {/* Email Template Section */}
        <div className="mb-4">
          <label className="form-label">Email template used for class waitlist update</label>
          <div className="d-flex gap-2 align-items-center">
            <select
              className="form-select w-auto"
              value={emailTemplate}
              onChange={(e) => setEmailTemplate(e.target.value)}
            >
              <option value="Class Waitlist Update Email">Class Waitlist Update Email</option>
              <option value="Another Email Template">Another Email Template</option>
            </select>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-pencil"></i> Edit
            </button>
          </div>
          <small className="text-muted">
            Select/Edit Class Waitlist Update email template. Sent to member when moved into class from waitlist.
          </small>
        </div>

</div>
<div className="mt-4 mb-4">
          <div className="card-body">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="enableLateBooking"
                checked={enableLateBooking}
                onChange={(e) => setEnableLateBooking(e.target.checked)}
              />
              <label className="form-check-label fw-bold" htmlFor="enableLateBooking">
                Enable late booking
              </label>
              <div className="ms-4 text-muted">
                Allows being able to allow late bookings for a specific class.
                <br />
                <span className="text-muted small">
                  Default: Unchecked | Last Changed: Feb 7 2022 5:27 pm by airafitness
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enable Waiver Highlight Icon Section */}
        <div className=" mb-4">
          <div className="card-body">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="enableWaiverHighlight"
                checked={enableWaiverHighlight}
                onChange={(e) => setEnableWaiverHighlight(e.target.checked)}
              />
              <label className="form-check-label fw-bold" htmlFor="enableWaiverHighlight">
                Enable waiver highlight icon V <span className="badge bg-warning">Beta</span>
              </label>
              <div className="ms-4 text-muted">
                Displays icons for highlight waivers next to members in the Visitors and the Classes sections.
                <br />
                Icons are colored to represent their status, and hovering over them will show the waiver's name.
              </div>
            </div>
          </div>
        </div>

        </div>

        {/* Save Button */}
       
              </div>
            )}

            {activeTab === 'Features' && (
              <div>
                <div className="container-fluid  p-4">
      <div className=" card bg-light p-4">
        <h4 className="mb-4">Bookings</h4>
        
        {/* Checkbox for enabling prerequisite questionnaire */}
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="prerequisiteCheckbox"
            checked={isPrerequisiteEnabled}
            onChange={handleCheckboxChanges}
          />
          <label className="form-check-label fw-bold" htmlFor="prerequisiteCheckbox">
            Enable prerequisite questionnaire
          </label>
          <div className="ms-4 text-muted">
            Allow requirement of prerequisite questionnaire to be completed before service/class can be booked
          </div>
        </div>
      </div>

      <div className=" card bg-light p-4 mt-4">
        <h4 className="mb-4">Service</h4>
        
        {/* Checkbox for enabling prerequisite questionnaire */}
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="prerequisiteCheckbox"
            checked={isPrerequisiteEnabled}
            onChange={handleCheckboxChanges}
          />
          <label className="form-check-label fw-bold" htmlFor="prerequisiteCheckbox">
          Require resource to be compatible with service
          </label>
          <div className="ms-4 text-muted">
          Display resource (facility) compatible with selected service only. Default - all available resources will be shown. Also applies to equipment, when configured
          </div>
        </div>
      </div>
    </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingService
