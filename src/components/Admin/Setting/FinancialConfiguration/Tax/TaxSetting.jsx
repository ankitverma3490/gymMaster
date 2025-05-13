import React, { useState } from 'react';

function TaxSettings() {
  const [accountingBasis, setAccountingBasis] = useState('Cash');
  const [taxNumber, setTaxNumber] = useState('');
  const [taxRate, setTaxRate] = useState('Sales Tax');

  const handleAccountingBasisChange = (event) => {
    setAccountingBasis(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="">
        <h3 className="mb-4">Tax Settings</h3>
        <form>
          {/* Accounting Basis */}
          <div className="mb-3">
            <label className="form-label">Accounting Basis for Tax</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="accountingBasis"
                  value="Accrual"
                  checked={accountingBasis === 'Accrual'}
                  onChange={handleAccountingBasisChange}
                />
                <label className="form-check-label">Accrual</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="accountingBasis"
                  value="Cash"
                  checked={accountingBasis === 'Cash'}
                  onChange={handleAccountingBasisChange}
                />
                <label className="form-check-label">Cash</label>
              </div>
            </div>
          </div>

          {/* Prices Shown Tax Exclusive */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="taxExclusive"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="taxExclusive">
              Prices Shown Tax Exclusive
            </label>
            <small className="form-text text-muted">
              Enable this if advertised sale prices do not include Tax. This is most
              common in the US.
            </small>
          </div>

          {/* Tax Number Name */}
          <div className="mb-3">
            <label className="form-label">Tax Number Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tax Number"
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
            />
          </div>

          {/* Tax Rates for Other Revenues */}
          <h4 className="mb-4">Tax rates for Other Revenues</h4>

          {/* General Product Account Revenue */}
          <div className="mb-3">
            <label className="form-label">General Product Account Revenue</label>
            <select
              className="form-select"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
            >
              <option>Sales Tax</option>
            </select>
            <small className="form-text text-muted">
              Revenue from General Sales and any mass updated revenue (charge all function from reports).
            </small>
          </div>

          {/* Maintenance Product Account Revenue */}
          <div className="mb-3">
            <label className="form-label">Maintenance Product Account Revenue</label>
            <select
              className="form-select"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
            >
              <option>Sales Tax</option>
            </select>
            <small className="form-text text-muted">
              Maintenance fees. Also able to be set from Club Details page.
            </small>
          </div>

          {/* Miscellaneous Revenue */}
          <div className="mb-3">
            <label className="form-label">Miscellaneous Revenue</label>
            <select
              className="form-select"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
            >
              <option>Sales Tax</option>
            </select>
            <small className="form-text text-muted">
              Miscellaneous revenue not otherwise categorized.
            </small>
          </div>

          {/* Miscellaneous Dishonour Fee Revenue */}
          <div className="mb-3">
            <label className="form-label">Miscellaneous Dishonour Fee Revenue</label>
            <select
              className="form-select"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
            >
              <option>Sales Tax</option>
            </select>
          </div>

          {/* Save Button */}
          <div className="mt-4 text-end">
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaxSettings;
