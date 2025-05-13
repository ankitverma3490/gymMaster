import React from 'react';

function StaffCategoryTable() {
  const staffCategories = [
    { categoryName: 'Trainer', type: 'Trainer', club: 'Golf Simulator' },
  ];

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-md-6">
          <h3>Staff Categories</h3>
        </div>
       
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Type</th>
              <th>Club</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffCategories.map((category, index) => (
              <tr key={index}>
                <td>{category.categoryName}</td>
                <td>{category.type}</td>
                <td>{category.club}</td>
                <td>
                  <button className="btn btn-info btn-sm">
                    <i className="bi bi-pencil-square"></i> Edit
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

export default StaffCategoryTable;
