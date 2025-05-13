import React, { useState } from 'react'

function FinancialPaymentMethod() {
    const [paymentMethods, setPaymentMethods] = useState([
        { name: '3rd Party Reconciliation', reportable: true, showInPOS: false, refundable: true },
        { name: 'Bad Debtor', reportable: true, showInPOS: false, refundable: false },
        { name: 'Bank Deposit', reportable: true, showInPOS: false, refundable: true },
        { name: 'Billing', reportable: false, showInPOS: false, refundable: false },
        { name: 'Cash', reportable: true, showInPOS: true, refundable: true },
        { name: 'Charge to Member', reportable: false, showInPOS: false, refundable: true },
        { name: 'Check', reportable: true, showInPOS: true, refundable: false },
        { name: 'Clover Connect Swiper', reportable: false, showInPOS: true, refundable: false },
        { name: 'Discount', reportable: true, showInPOS: false, refundable: false },
        { name: 'Eftpos', reportable: true, showInPOS: true, refundable: true },
        { name: 'Gift Voucher', reportable: true, showInPOS: false, refundable: false },
        { name: 'Internet Banking', reportable: true, showInPOS: true, refundable: false },
        { name: 'No Payment', reportable: false, showInPOS: false, refundable: false },
      ]);
    
  return (
    <div>
        <div className="container-fluid ">
      <div className="">
        <h3>Payment Methods</h3>

        <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
          <div className="input-group" style={{ maxWidth: '400px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search payment methods"
            />
            <button className="btn btn-outline-secondary">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button className="btn btn-primary">+ Add Additional Payment Method</button>
        </div>
<div className='table-responsive'>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Reportable</th>
              <th>Show In POS</th>
              <th>Refundable</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paymentMethods.map((method, index) => (
              <tr key={index}>
                <td>{method.name}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={method.reportable}
                    onChange={() => {
                      const updatedMethods = [...paymentMethods];
                      updatedMethods[index].reportable = !updatedMethods[index].reportable;
                      setPaymentMethods(updatedMethods);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={method.showInPOS}
                    onChange={() => {
                      const updatedMethods = [...paymentMethods];
                      updatedMethods[index].showInPOS = !updatedMethods[index].showInPOS;
                      setPaymentMethods(updatedMethods);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={method.refundable}
                    onChange={() => {
                      const updatedMethods = [...paymentMethods];
                      updatedMethods[index].refundable = !updatedMethods[index].refundable;
                      setPaymentMethods(updatedMethods);
                    }}
                  />
                </td>
                <td>
                  <button className="btn  btn-sm">
                    <i className="fas fa-pen-to-square"></i>
                  </button>
                  <button className="btn  btn-sm">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <button className="btn btn-success">Save</button>
      </div>
    </div>
    </div>
  )
}

export default FinancialPaymentMethod
