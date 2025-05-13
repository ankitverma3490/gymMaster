import React, { useState } from 'react'

import { FaCog, FaUserAlt } from "react-icons/fa";

import AdvancedConfigurPortal from './AdvancedConfigurportal';
import MemberPortal from '../../MemberPortal/MemberPortal';

function MemberPortalTab() {
    const [activeTab, setActiveTab] = useState('advancedconfigur'); 
    const [searchQuery, setSearchQuery] = useState('');

    const handleTabClick = (tab) => {
      setActiveTab(tab); // Update the active tab
    };
  return (
    <>
        <div className="d-flex justify-content-start">
        <ul className="nav nav-pills  ">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'advancedconfigur' ? 'active' : ''}`}
              href="#"
              onClick={() => handleTabClick('advancedconfigur')}
            >
              <FaCog className="me-2" /> Advanced Configuration
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'memberportalconfig' ? 'active' : ''}`}
              href="#"
              onClick={() => handleTabClick('memberportalconfig')}
            >
              <FaUserAlt className="me-2" /> Member Portal Configuration
            </a>
          </li>
        </ul>
       
      </div>



      {/* Tabs Content */}
      <div className="tab-content mt-3">
    

      {/* Tabs for All Settings and Features */}
     
        <div className={`tab-pane fade ${activeTab === 'advancedconfigur' ? 'show active' : ''}`}>
        <div className="row justify-content-between align-items-center mb-4">
        {/* Search Bar */}
        <div className="col-md-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="button">
              <i className="bi bi-search"></i> {/* Search Icon */}
            </button>
          </div>
        </div>

        {/* Tabs for All Settings and Features */}
        <div className="col-md-3 d-flex justify-content-between">
          <button className="btn btn-light active">All Settings</button>
          <button className="btn btn-light">Features</button>
        </div>

        {/* Save Button */}
        <div className="col-md-2">
          <button className="btn btn-success w-100">Save</button>
        </div>
      </div>
         <AdvancedConfigurPortal/>
        </div>
        <div className={`tab-pane fade ${activeTab === 'memberportalconfig' ? 'show active' : ''}`}>
        <div className="row d-flex align-items-center mb-4">
        {/* Search Bar */}
        <div className="col-md-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ height: "45px" }}
            />
            <button className="btn btn-outline-secondary me-2" type="button" style={{ height: "45px" }}>
              <i className="bi bi-search"></i> {/* Search Icon */}
            </button>
          </div>
        </div>

        {/* Tabs for All Settings and Features */}
        <div className="col-md-4 d-flex justify-content-start mb-4 " style={{marginTop:"20px"}}>
          <button className="btn btn-light active me-2">All Settings</button>
          <button className="btn btn-light">Features</button>
        </div>

        {/* Action Buttons */}
        <div className="col-md-3 d-flex justify-content-end" style={{height:"45px"}}>
          <button className="btn btn-primary me-2" >Customize </button>
          <button className="btn btn-primary me-2">Edit </button>
          <button className="btn btn-success">Save</button>
        </div>
      </div>
         <MemberPortal/>
        </div>
      </div>
    </>
  )
}

export default MemberPortalTab
