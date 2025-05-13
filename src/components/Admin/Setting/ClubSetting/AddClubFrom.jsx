import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AddClubFrom() {
   const [formData, setFormData] = useState({
          clubName: 'Golf Simulator',
          legalName: 'Golf Simulator',
          gymMasterOwnership: 'Mike Bell',
          addressSearch: '',
          address: '600 rt 59',
          city: 'Ingleside',
          state: 'Illinois',
          postCode: '60073',
          country: 'United States',
          defaultCurrency: 'USD',
          emailAddress: 'golf@airafitness.com',
          phoneNumber: '423 572 1854',
          websiteUrl: 'www.airafitness.com',
          billingCurrency: 'USD',
          billingProvider: 'Clover Connect',
          cloverConnectAccountId: '101069248455',
          cloverConnectSecretKey: 'ID.WHLHHX2AQFYN96DLPG3KKSARQJEI2',
          isAutomaticBilling: true,
        });
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prevState => ({
            ...prevState,
            [name]: value
          }));
        };
  return (
    <>
      <div className="container">
        <div className='d-flex justify-content-between'>
      <h1 className="text-2xl font-medium text-gray-800 mb-4">Club Name</h1>
      <Link to="/clubsetting">
      <button className='btn btn-primary'>Back</button>
      </Link>
      </div>

{/* Form section */}
<div className="row">
  <div className="col-12">
    <div className="card p-4 bg-light">
      <div className="row g-4">
        {/* Left Column */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Club Name</label>
            <input
              type="text"
              name="clubName"
              value={formData.clubName}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Legal Name</label>
            <input
              type="text"
              name="legalName"
              value={formData.legalName}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">GymMaster Ownership</label>
            <div className="form-control-plaintext">{formData.gymMasterOwnership}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Address Search</label>
            <input
              type="text"
              name="addressSearch"
              value={formData.addressSearch}
              onChange={handleChange}
              placeholder="Enter company address"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Post Code</label>
            <input
              type="text"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="form-select"
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Default Currency</label>
            <div className="form-control-plaintext">{formData.defaultCurrency}</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Website URL</label>
            <input
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='card p-4 mt-4 bg-light '>
  <h4>Additional</h4>
  <div className="row">
  <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Account Name</label>
            <input
              type="text"
              name="clubName"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Account Bank</label>
            <input
              type="text"
              name="legalName"
              className="form-control"
            />
          </div>

         

          <div className="mb-3">
            <label className="form-label">Account Number</label>
            <input
              type="text"
              name="addressSearch"
              placeholder="Enter company address"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Tax Number</label>
            <input
              type="text"
              name="address"
              className="form-control"
            />
            <small>Tax Number will appear in invioce & receipts under the name * This can be Updated in Setting -> financial Confiuguration  -> Tax rate </small>
          </div>

         

         

         

         

        
        </div>
  </div>
</div>
      </div>
    </>
  )
}

export default AddClubFrom
