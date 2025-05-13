import React, { useState } from 'react';

function BillingDays() {
  const [weeklyDays, setWeeklyDays] = useState([
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ]);
  const [monthlyDays, setMonthlyDays] = useState([
    '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', 
    '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', 
    '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'
  ]);

  const removeSelected = (arr, setArr, item) => {
    setArr(arr.filter(day => day !== item));
  }

  const handleSave = () => {
    alert("Billing Days Configuration Saved!");
  };

  return (
    <div className="container-fluid ">
      <div className="">
        <h3>Billing Days</h3>
        <p>Days of the week and month that recurring memberships can be set up for automatic billing.</p>

        {/* Weekly Billing Days */}
        <div className="mb-4">
          <h5>Weekly Billing Days</h5>
          <div className="d-flex flex-wrap gap-2">
            {weeklyDays.map((day, index) => (
              <span key={index} className="badge bg-primary text-white">
                {day} 
                <button 
                  className="btn-close btn-close-white ms-2"
                  onClick={() => removeSelected(weeklyDays, setWeeklyDays, day)}
                  aria-label="Remove"
                ></button>
              </span>
            ))}
          </div>
          <button className="btn btn-outline-primary mt-2">Select all weekly billing days</button>
        </div>

        {/* Monthly Billing Days */}
        <div className="mb-4">
          <h5>Monthly Billing Days</h5>
          <div className="d-flex flex-wrap gap-2">
            {monthlyDays.map((day, index) => (
              <span key={index} className="badge bg-primary text-white">
                {day} 
                <button 
                  className="btn-close btn-close-white ms-2"
                  onClick={() => removeSelected(monthlyDays, setMonthlyDays, day)}
                  aria-label="Remove"
                ></button>
              </span>
            ))}
          </div>
          <button className="btn btn-outline-primary mt-2">Select all monthly billing days</button>
        </div>

        <button className="btn btn-success mt-4" onClick={handleSave}>
          Save Billing Day Configuration
        </button>
      </div>
    </div>
  );
}

export default BillingDays;
