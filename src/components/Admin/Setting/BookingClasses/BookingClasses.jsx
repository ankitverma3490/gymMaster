import React, { useState } from 'react';

import GymScheduleCalendar from './GymScheduleCalendar';
import ClassSetting from './ClassSetting';
import ServiceSetting from './ServiceSetting';
import ServiceCategory from './ServiceCategory';
import SettingService from './SettingService';
import Facilities from './Facilities';
import FacilitieCategory from './FacilitieCategory';
import StaffTable from './StaffTable';
import StaffCategoryTable from './StaffCategoryTable';
import { Link } from 'react-router-dom';

function BookingClasses() {
  const [activeMenu, setActiveMenu] = useState('Classes');
  const [activeSubMenu, setActiveSubMenu] = useState('');
   const [searchTerm, setSearchTerm] = useState('');

  const classData = [
    {
      id: 1,
      name: 'Bootcamp - Horizon City',
      category: 'Bootcamp/PT Classes',
      pricing: 'Members: Benefit',
      sessions: 'Mon 28th: 5:00-6:00am, 6:30-7:30pm Tue 29th: 5:00-6:00am, 6:30-7:30pm Wed 30th: ...',
      attendance: 1
    },
    {
      id: 2,
      name: 'Bootcamp - Naples',
      category: 'Bootcamp/PT Classes',
      pricing: 'Members: Benefit',
      sessions: '',
      attendance: null
    },
    {
      id: 3,
      name: 'Reserve Golf Simulator',
      category: 'Reserve Golf Simulator',
      pricing: 'Members: Benefit',
      sessions: 'Mon 28th: 12:00-12:30am, 12:30-1:00am, 1:00-1:30am, 1:30-2:00am',
      attendance: 1
    }
  ];

  const categoryListData = [
    {
      id: 1,
      name: 'Bootcamp/PT Classes',
      description: ''
    },
    {
      id: 2,
      name: 'Reserve Golf Simulator',
      description: ''
    },
    {
      id: 3,
      name: 'Reserve Private Studio',
      description: 'Karate classes for all ages and skill levels.'
    }
  ];

  const sideMenuItems = [
    { id: 'Classes', subItems: ['Category List', 'Timetable', 'Class Settings'] },
    { id: 'Services', subItems: ['Category List', 'Service Setting'] },
    { id: 'Facilities', subItems: ['Category List'] },
    { id: 'Staff', subItems: ['Category List'] }
  ];

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setActiveSubMenu('');
  };

  const handleSubMenuClick = (subMenu) => {
    setActiveSubMenu(subMenu);
  };

  const addCategory = () => {
    setCategories([
      ...categories,
      { id: categories.length + 1, name: '', description: '' },
    ]);
  };

  const renderContent = () => {
    if (activeMenu === 'Classes') {
      if (activeSubMenu === 'Category List') {
        return (
          <div>
             <div className="d-flex justify-content-between mb-4">
          <div className="input-group" style={{ maxWidth: '400px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search class categories"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-secondary">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <Link to="/addclasscategories">
          <button className="btn btn-primary" >
            + Add Class Category
          </button>
          </Link>
        </div>
             <h3>Category List</h3>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Category Description</th>
                  <th>Action</th>
                 
                </tr>
              </thead>
              <tbody>
                {categoryListData.map((classItem) => (
                  <tr key={classItem.id}>
                    <td>{classItem.name}</td>
                    <td>{classItem.description}</td>
                    <td><i class="fa-solid fa-pen-to-square me-2 "></i> <i class="fa-solid fa-trash text-danger"></i></td>
                   
                  </tr>
                ))}
              </tbody>
            </table> 
          
          </div>
        );
      } else if (activeSubMenu === 'Timetable') {
        return <div><GymScheduleCalendar/></div>;
      } else if (activeSubMenu === 'Class Settings') {
        return <div><ClassSetting/></div>;
      } else {
        return (
          <div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-6">
            <div className="d-flex mb-4 mb-md-0">
              <select className="form-control w-auto mr-2 me-2">
                <option>All Categories</option>
              </select>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search classes"
                />
                <button className="btn btn-outline-secondary ml-2">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
              
            <Link to="/addclasses">
            <button className="btn btn-primary d-flex align-items-center">
              <span className="mr-2">+</span> Add Class
            </button>
            </Link>
          </div>
            <h3>Classes</h3>
            <div className='table-responsive'>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Class Name</th>
                  <th>Category</th>
                  <th>Pricing</th>
                  <th>Sessions</th>
                  <th>Attendance</th>
                  <th>Active</th>

                </tr>
              </thead>
              <tbody>
                {classData.map((classItem) => (
                  <tr key={classItem.id}>
                    <td>{classItem.name}</td>
                    <td>{classItem.category}</td>
                    <td>{classItem.pricing}</td>
                    <td>{classItem.sessions}</td>
                    <td>{classItem.attendance}</td>
                    <td><i class="fa-solid fa-pen-to-square text-info"></i></td>

                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        );
      }
    }

    if (activeMenu === 'Services') {
      if (activeSubMenu === 'Category List') {
        return <div><ServiceCategory/></div>;
      } else if (activeSubMenu === 'Service Setting') {
        return <div><SettingService/></div>;
      }else {
        return<div><ServiceSetting/></div>
      }
    }


    if (activeMenu === 'Facilities') {
      if (activeSubMenu === 'Category List') {
        return <div><FacilitieCategory/></div>;
      } else if (activeSubMenu === 'Service Setting') {
        return <div><Setting/></div>;
      }
       else {
        return<div><Facilities/></div>
      }
    }

    if (activeMenu === 'Staff') {
      if (activeSubMenu === 'Category List') {
        return <div><StaffCategoryTable/></div>;
      } else if (activeSubMenu === 'Service Setting') {
        return <div><Setting/></div>;
      }else {
        return<div><StaffTable/></div>
      }
    }
   

    return <div>Default Content</div>;
  };

  return (
    <div className="d-flex flex-column flex-md-row min-vh-100 bg-light">
      {/* Sidebar */}
      <div className="col-md-2 bg-white border-md-end p-3">
        {sideMenuItems.map(menuItem => (
          <div key={menuItem.id}>
            <div
              className={`${
                menuItem.id === activeMenu ? 'bg-primary text-white' : 'bg-secondary text-white'
              } p-3 font-weight-bold`}
              onClick={() => handleMenuClick(menuItem.id)}
              style={{cursor:"pointer"}}
            >
              {menuItem.id}
            </div>

            {menuItem.id === activeMenu && menuItem.subItems.length > 0 && (
              <div className="pl-3">
                {menuItem.subItems.map((subItem, index) => (
                  <div
                    key={index}
                    className="py-2 text-black "
                    onClick={() => handleSubMenuClick(subItem)}
                    style={{cursor:"pointer"}}
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="col-md-10 p-4">
        <div className="bg-white border rounded shadow-sm p-4">
        

          {/* Dynamic Content Rendering */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default BookingClasses;
