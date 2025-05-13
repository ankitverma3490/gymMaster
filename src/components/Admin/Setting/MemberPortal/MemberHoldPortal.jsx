import React, { useState } from 'react'

function MemberHoldPortal() {
  const [noticeValue, setNoticeValue] = useState(1);
  const [noticeUnit, setNoticeUnit] = useState('days');
  const [minTimeValue, setMinTimeValue] = useState(2);
  const [minTimeUnit, setMinTimeUnit] = useState('seconds');
  const [maxTimeValue, setMaxTimeValue] = useState('');
  const [maxTimeUnit, setMaxTimeUnit] = useState('seconds');
  const [holdChargeType, setHoldChargeType] = useState('Free');
  const [enableStatus, setEnableStatus] = useState('N/A');

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <h4>Member Hold</h4>
          <div className="col-md-12">
            <div className="card p-4 bg-light">
              {/* Enable Membership Hold */}
              <div className="mb-4">
                <label className="text-lg font-medium text-gray-800 mb-1">
                  Enable membership hold via Member Portal
                </label>
                <p className="text-sm text-gray-600">
                  Allow members to add hold / request hold to membership online
                </p>
                <div className="mt-2">
                  <select
                    value={enableStatus}
                    onChange={(e) => setEnableStatus(e.target.value)}
                    className="form-select w-100"
                  >
                    <option value="N/A">N/A</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {/* Minimum Hold Notice Period */}
              <div className="mb-4">
                <label className="text-lg font-medium text-gray-800 mb-1">
                  Minimum hold notice period
                </label>
                <p className="text-sm text-gray-600">
                  Select required notice period before membership hold can begin
                </p>
                <div className="d-flex">
                  <input
                    type="number"
                    value={noticeValue}
                    onChange={(e) => setNoticeValue(e.target.value)}
                    className="form-control w-50"
                  />
                  <select
                    value={noticeUnit}
                    onChange={(e) => setNoticeUnit(e.target.value)}
                    className="form-select w-50 ms-2"
                  >
                    <option value="days">days</option>
                    <option value="weeks">weeks</option>
                    <option value="months">months</option>
                  </select>
                </div>
              </div>

              {/* Minimum Time on Member-Added Hold */}
              <div className="mb-4">
                <label className="text-lg font-medium text-gray-800 mb-1">
                  Minimum time on member-added hold
                </label>
                <p className="text-sm text-gray-600">
                  Select minimum time allowed per hold
                </p>
                <div className="d-flex">
                  <input
                    type="number"
                    value={minTimeValue}
                    onChange={(e) => setMinTimeValue(e.target.value)}
                    className="form-control w-50"
                  />
                  <select
                    value={minTimeUnit}
                    onChange={(e) => setMinTimeUnit(e.target.value)}
                    className="form-select w-50 ms-2"
                  >
                    <option value="seconds">seconds</option>
                    <option value="minutes">minutes</option>
                    <option value="hours">hours</option>
                    <option value="days">days</option>
                    <option value="weeks">weeks</option>
                  </select>
                </div>
              </div>

              {/* Maximum Time on Member-Added Hold */}
              <div className="mb-4">
                <label className="text-lg font-medium text-gray-800 mb-1">
                  Maximum time on member-added hold
                </label>
                <p className="text-sm text-gray-600">
                  Select maximum time allowed per hold
                </p>
                <div className="d-flex">
                  <input
                    type="number"
                    value={maxTimeValue}
                    onChange={(e) => setMaxTimeValue(e.target.value)}
                    className="form-control w-50"
                  />
                  <select
                    value={maxTimeUnit}
                    onChange={(e) => setMaxTimeUnit(e.target.value)}
                    className="form-select w-50 ms-2"
                  >
                    <option value="seconds">seconds</option>
                    <option value="minutes">minutes</option>
                    <option value="hours">hours</option>
                    <option value="days">days</option>
                    <option value="weeks">weeks</option>
                  </select>
                </div>
              </div>

              {/* Hold Charge Type */}
              <div className="mb-4">
                <label className="text-lg font-medium text-gray-800 mb-1">
                  Hold charge type
                </label>
                <p className="text-sm text-gray-600">
                  Select charge-type for member-added hold; free, a once-off setup fee charge or an ongoing fee
                </p>
                <select
                  value={holdChargeType}
                  onChange={(e) => setHoldChargeType(e.target.value)}
                  className="form-select w-100"
                >
                  <option value="Free">Free</option>
                  <option value="Setup Cost">Setup Cost</option>
                  <option value="Ongoing Fee">Ongoing Fee</option>
                </select>
              </div>

              <p className="text-xs text-gray-500 italic">
                Default Value: Setup Cost. Last Changed: Aug 22, 2021, 8:09 pm by airafitness
              </p>

              {/* Save Button */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberHoldPortal;
