import React, { useState } from 'react';

function POSDiscounts() {
  const [discounts, setDiscounts] = useState([
    { reason: 'No Reason', discountRate: '' },
    { reason: 'Repeat Customer', discountRate: '' },
    { reason: 'Birthday', discountRate: '' },
  ]);

  const handleDiscountChange = (index, field, value) => {
    const updatedDiscounts = [...discounts];
    updatedDiscounts[index][field] = value;
    setDiscounts(updatedDiscounts);
  };

  const handleAddDiscount = () => {
    setDiscounts([...discounts, { reason: '', discountRate: '' }]);
  };

  const handleDeleteDiscount = (index) => {
    const updatedDiscounts = discounts.filter((_, i) => i !== index);
    setDiscounts(updatedDiscounts);
  };

  const handleSave = () => {
    // Implement the logic to save the discount changes, e.g., API call or state update
    alert('Discount changes saved!');
  };

  return (
    <div className="container-fluid ">
      <div className="">
        <div className='d-flex flex-column flex-md-row justify-content-between'>
        <h3 className="mb-4">POS Discounts</h3>

        <div className="mb-3 ">
          <button className="btn btn-primary me-2 mt-2" onClick={handleAddDiscount}>
            + Add POS Discount
          </button>
          <button className="btn btn-success mt-2" onClick={handleSave}>
            Save Discount Changes
          </button>
        </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Reason</th>
                <th>Discount Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {discounts.map((discount, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={discount.reason}
                      onChange={(e) => handleDiscountChange(index, 'reason', e.target.value)}
                      placeholder="Enter reason"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={discount.discountRate}
                      onChange={(e) => handleDiscountChange(index, 'discountRate', e.target.value)}
                      placeholder="Enter discount rate"
                    />
                  </td>
                  <td>
                    <button className="btn " onClick={() => handleDeleteDiscount(index)}>
                      <i className="fa fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end mt-4">
         
        </div>
      </div>
    </div>
  );
}

export default POSDiscounts;
