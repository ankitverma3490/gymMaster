import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ServiceSetting() {
    const [services, setServices] = useState([
        {
          id: 1,
          name: '30 Min PT',
          category: 'Pt 30',
          price: 'Free',
          nonMemberPrice: 'Free',
        },
        {
          id: 2,
          name: 'Bootcamp Consultation',
          category: 'Bootcamp Consultation',
          price: 'Free',
          nonMemberPrice: 'Free',
        },
        {
          id: 3,
          name: 'Existing Member - General Meeting',
          category: 'Existing member - General Meeting',
          price: 'Free',
          nonMemberPrice: 'Free',
        },
        {
          id: 4,
          name: 'Golf Online Pass',
          category: 'Golf Online Pass',
          price: '$50.00',
          nonMemberPrice: '$50.00',
        },
        {
          id: 5,
          name: 'Personal Training Consultation',
          category: 'Personal Training Consultation',
          price: 'Free',
          nonMemberPrice: 'Free',
        },
        {
          id: 6,
          name: 'Prospect Tour - Non Member',
          category: 'Prospect Tour - Non Member',
          price: 'Free',
          nonMemberPrice: 'Free',
        },
      ]);
  return (
    <>
        <div className="container-fluid">
      <div className="">
        <div className="row mb-3">
          <div className="col-md-6">
            <select className="form-select">
              <option>All Categories</option>
              {/* Additional category options can go here */}
            </select>
          </div>
          <div className="col-md-6 text-end">
            <input
              type="text"
              className="form-control"
              placeholder="Search services"
            />
          </div>
        </div>

        <div className="table-responsive mt-4">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Non-Member Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>{service.category}</td>
                  <td>{service.price}</td>
                  <td>{service.nonMemberPrice}</td>
                  <td className='d-flex'>
                    <button className="btn btn-primary btn-sm me-2">
                      <i className="bi bi-pencil"></i> 
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i className="bi bi-trash"></i> 
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-end">
          <Link to="/addservicefrom">
          <button className="btn btn-success">
            <i className="bi bi-plus-circle"></i> Add Service
          </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default ServiceSetting
