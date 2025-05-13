import React, { useState } from 'react';

function AccountingLock() {
  const [lockDate, setLockDate] = useState('');
  const [lockedDates, setLockedDates] = useState([
    'Apr 7 2024', 'Mar 17 2024', 'Dec 14 2023', 'Dec 4 2023', 'Nov 19 2023', 
    'Nov 14 2023', 'Sep 11 2023', 'Aug 4 2023', 'Jul 10 2023', 'Jul 8 2023', 
    'Jun 20 2023', 'Jun 18 2023', 'Jun 7 2023', 'Apr 4 2023', 'Feb 19 2023', 
    'Feb 2 2022', 'Jan 11 2022'
  ]);

  const handleDateChange = (e) => {
    setLockDate(e.target.value);
  };

  const handleLockAccounts = () => {
    alert(`Accounts locked until ${lockDate}`);
  };

  return (
    <div className="container-fluid ">
      <div className="">
        <h3>Accounting Lock</h3>
        <p className="text-muted">
          Accounting locks cannot be undone, please use with caution. You also cannot lock today or future dates.
        </p>

        <div className="mb-4">
          <h5>Previously Locked Accounting Periods</h5>
          <ul>
            {lockedDates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <label htmlFor="lockDate" className="form-label">Lock Accounts To</label>
          <input
            type="date"
            id="lockDate"
            className="form-control"
            value={lockDate}
            onChange={handleDateChange}
          />
        </div>

        <button 
          className="btn btn-success"
          onClick={handleLockAccounts}
        >
          Lock Accounts
        </button>

        <div className="mt-4">
          <small className="text-muted">
            All accounting records up to, and including the date selected below will be locked. Locked records cannot be modified, voided, or adjusted. This will cause issues if you attempt to lock records in a period that are not yet settled.
          </small>
        </div>
      </div>
    </div>
  );
}

export default AccountingLock;
