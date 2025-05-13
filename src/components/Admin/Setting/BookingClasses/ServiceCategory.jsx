import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ServiceCategory() {
    const [categories, setCategories] = useState([
        {
          id: 1,
          name: 'Bootcamp Consultation',
          description: '',
        },
        {
          id: 2,
          name: 'Existing member - General Meeting',
          description: '',
        },
        {
          id: 3,
          name: 'Golf Online Pass',
          description: '',
        },
        {
          id: 4,
          name: 'Personal Training Consultation',
          description: '',
        },
        {
          id: 5,
          name: 'Prospect Tour - Non Member',
          description: '',
        },
        {
          id: 6,
          name: 'Pt 30',
          description: '',
        },
        {
          id: 7,
          name: 'Service Group 1',
          description: '',
        },
      ]);
    
      const handleDelete = (id) => {
        setCategories(categories.filter((category) => category.id !== id));
      };
      const handleEdit = (id) => {
        alert(`Edit category with id: ${id}`);
        // Add your edit logic here
      };
  return (
    <>
        <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <h4>Service Categories</h4>
        </div>
        <Link to="/servicecategoryform">
        <button className="btn btn-primary">+ Add Service Category</button>
        </Link>
      </div>
      <div className="table-responsive mt-3">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Category Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm me-2"
                    onClick={() => handleEdit(category.id)}
                  >
                    <i className="bi bi-pencil"></i> 
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(category.id)}
                  >
                    <i className="bi bi-trash"></i> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default ServiceCategory
