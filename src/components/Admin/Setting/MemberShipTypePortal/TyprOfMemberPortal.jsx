import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClassSetting from '../BookingClasses/ClassSetting';


function TypeOfMemberPortal() {
  const [activeMenu, setActiveMenu] = useState('Classes');
  const [activeSubMenu, setActiveSubMenu] = useState('');
   const [searchTerm, setSearchTerm] = useState('');

 

  const categoryListData = [
    {
      id: 1,
      name: 'Bootcamp/PT Classes',
     
    },
    {
      id: 2,
      name: 'Reserve Golf Simulator',
      
    },
    {
      id: 3,
      name: 'Reserve Private Studio',
     
    }
  ];

  const sideMenuItems = [
    { id: 'MemberShip Type', subItems: ['MemberShip Type Setting'] },
    { id: 'Categories', subItems: [] },
   
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
    if (activeMenu === 'MemberShip Type') {
      if (activeSubMenu === 'MemberShip Type Setting') {
        return (
        <div><ClassSetting/></div>
        );
      }  else {
        return (
            <div className="container-fluid py-4">
            {/* Filter Section */}
            <div className="d-flex justify-content-between mb-4">
              <div className="d-flex gap-2">
                <select className="form-select">
                  <option>All Categories</option>
                  <option>Gym Membership</option>
                  <option>Training</option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Membership Types"
                />
              </div>
              <Link to="/addmemebershiptype">
                <button className="btn btn-primary">
                  <i className="bi bi-plus-circle me-2"></i> Add Membership Type
                </button>
              </Link>
            </div>
      
            {/* Membership Table */}
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Price (Excl. Tax)</th>
                    <th>Paying</th>
                    <th>Members</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Data Rows */}
                  <tr>
                    <td>3x week</td>
                    <td>Gym Membership</td>
                    <td>$59.00</td>
                    <td>$59.00</td>
                    <td>Monthly by Billing</td>
                    <td>1</td>
                    <td>Active</td>
                    <td className='d-flex'>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>5x week</td>
                    <td>Gym Membership</td>
                    <td>$89.00</td>
                    <td>$89.00</td>
                    <td>Monthly by Billing</td>
                    <td>1</td>
                    <td>Active</td>
                    <td>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>12 Month Personal Training Program</td>
                    <td>Training</td>
                    <td>$660.00</td>
                    <td>$660.00</td>
                    <td>Monthly by Billing</td>
                    <td>7</td>
                    <td>Active</td>
                    <td>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3x week</td>
                    <td>Gym Membership</td>
                    <td>$59.00</td>
                    <td>$59.00</td>
                    <td>Monthly by Billing</td>
                    <td>1</td>
                    <td>Active</td>
                    <td className='d-flex'>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>5x week</td>
                    <td>Gym Membership</td>
                    <td>$89.00</td>
                    <td>$89.00</td>
                    <td>Monthly by Billing</td>
                    <td>1</td>
                    <td>Active</td>
                    <td>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>12 Month Personal Training Program</td>
                    <td>Training</td>
                    <td>$660.00</td>
                    <td>$660.00</td>
                    <td>Monthly by Billing</td>
                    <td>7</td>
                    <td>Active</td>
                    <td>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3x week</td>
                    <td>Gym Membership</td>
                    <td>$59.00</td>
                    <td>$59.00</td>
                    <td>Monthly by Billing</td>
                    <td>1</td>
                    <td>Active</td>
                    <td className='d-flex'>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>5x week</td>
                    <td>Gym Membership</td>
                    <td>$89.00</td>
                    <td>$89.00</td>
                    <td>Monthly by Billing</td>
                    <td>1</td>
                    <td>Active</td>
                    <td>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>12 Month Personal Training Program</td>
                    <td>Training</td>
                    <td>$660.00</td>
                    <td>$660.00</td>
                    <td>Monthly by Billing</td>
                    <td>7</td>
                    <td>Active</td>
                    <td>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3x week</td>
                    <td>Gym Membership</td>
                    <td>$59.00</td>
                    <td>$59.00</td>
                    <td>Monthly by Billing</td>
                    <td>1</td>
                    <td>Active</td>
                    <td className='d-flex'>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>5x week</td>
                    <td>Gym Membership</td>
                    <td>$89.00</td>
                    <td>$89.00</td>
                    <td>Monthly by Billing</td>
                    <td>1</td>
                    <td>Active</td>
                    <td>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>12 Month Personal Training Program</td>
                    <td>Training</td>
                    <td>$660.00</td>
                    <td>$660.00</td>
                    <td>Monthly by Billing</td>
                    <td>7</td>
                    <td>Active</td>
                    <td>
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm ms-2">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        );
      }
    }

    if (activeMenu === 'Categories') {
     {
        return  <div>
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
     <Link to="/addnewcategory">
     <button className="btn btn-primary" >
       + Add Class Category
     </button>
     </Link>
   </div>
        <h3>Category List</h3>
       <table className="table table-bordered table-striped">
         <thead>
           <tr>
             <th> Name</th>
            
             <th>Action</th>
            
           </tr>
         </thead>
         <tbody>
           {categoryListData.map((classItem) => (
             <tr key={classItem.id}>
               <td>{classItem.name}</td>
               <td><i class="fa-solid fa-pen-to-square me-2 "></i> <i class="fa-solid fa-trash text-danger"></i></td>
              
             </tr>
           ))}
         </tbody>
       </table> 
     
     </div>
      }
    }   
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

export default TypeOfMemberPortal;
