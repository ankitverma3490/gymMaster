import React, { useState } from 'react';

function CashDrawer() {
  const [denominations, setDenominations] = useState([
    0.01, 0.05, 0.1, 0.25, 0.5, 1.0, 5.0, 10.0, 20.0, 50.0
  ]);
  const [amounts, setAmounts] = useState(Array(denominations.length).fill(''));
  
  const handleAmountChange = (index, value) => {
    const newAmounts = [...amounts];
    newAmounts[index] = value;
    setAmounts(newAmounts);
  };

  const handleAddCashValue = () => {
    setDenominations([...denominations, 0.00]);  // Add new denomination
    setAmounts([...amounts, '']);  // Add corresponding amount input field
  };

  const handleSave = () => {
    // Implement save logic here (e.g., save to database or API)
    alert('Cash values saved!');
  };

  const handleDelete = (index) => {
    const newDenominations = [...denominations];
    const newAmounts = [...amounts];
    newDenominations.splice(index, 1);
    newAmounts.splice(index, 1);
    setDenominations(newDenominations);
    setAmounts(newAmounts);
  };

  return (
    <div className="container-fluid ">
      <div className="">
        <div className='d-flex flex-column flex-md-row justify-content-between'>
        <h3 className="mb-4">Cash Drawer</h3>
        <div className="mb-4">
          <button className="btn btn-primary " onClick={handleAddCashValue}>+ Add Cash Value</button>
        </div>
        </div>
        
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Denomination</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {denominations.map((denomination, index) => (
                <tr key={index}>
                  <td>{denomination}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={amounts[index]}
                      onChange={(e) => handleAmountChange(index, e.target.value)}
                      placeholder="Enter amount"
                    />
                  </td>
                  <td>
                    <button className="btn " onClick={() => handleDelete(index)}>
                      <i className="fa fa-trash text-dengar"></i> 
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-success" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default CashDrawer;
