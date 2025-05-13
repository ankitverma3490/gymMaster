import React, { useState } from 'react';

function CategoryList() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Bootcamp/PT Classes', description: '' },
    { id: 2, name: 'Reserve Golf Simulator', description: 'Reserve a time slot for our private studio.' },
    { id: 3, name: 'Reserve Private Studio', description: 'Reserve a time slot for our private studio.' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addCategory = () => {
    setCategories([
      ...categories,
      { id: categories.length + 1, name: '', description: '' },
    ]);
  };

  const removeCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const updateCategory = (id, field, value) => {
    const updated = categories.map((category) =>
      category.id === id ? { ...category, [field]: value } : category
    );
    setCategories(updated);
  };

  return (
    <>
      <div className="container py-4">
        {/* Header Section */}
        <div className="d-flex justify-content-between mb-4 flex-column flex-md-row">
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
          <button className="btn btn-primary mt-3 mt-md-0" onClick={addCategory}>
            + Add Class Category
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Category Name</th>
                  <th>Category Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center text-muted py-3">
                      No categories found.
                    </td>
                  </tr>
                ) : (
                  filteredCategories.map((category) => (
                    <tr key={category.id}>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={category.name}
                          onChange={(e) => updateCategory(category.id, 'name', e.target.value)}
                        />
                      </td>
                      <td>
                        <textarea
                          className="form-control"
                          rows="2"
                          value={category.description}
                          onChange={(e) => updateCategory(category.id, 'description', e.target.value)}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => alert('Edit clicked for category id: ' + category.id)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm ms-2"
                          onClick={() => removeCategory(category.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryList;
