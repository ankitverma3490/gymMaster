import React, { useState , useRef  } from 'react'
import { Link } from 'react-router-dom';

function ClubSetting() {
    const [paidInFullProvider, setPaidInFullProvider] = useState('Clover Connect');
    const [recurringProvider, setRecurringProvider] = useState('Clover Connect');
    const [onlineSignUpUrl, setOnlineSignUpUrl] = useState("www.airafitness.com/golfsignup");
    const [notificationSounds, setNotificationSounds] = useState({
        granted: "Chirp",
        warning: "Chirp",
        denied: "Descending",
        newFob: "Marimba",
      });
    
      const [maintenanceFee, setMaintenanceFee] = useState(false);
    
      const handleSave = () => {
        // Add your save logic here
        alert("Settings saved!");
      };

    const handleEditClick = () => {
      // Handle the logic for editing the URL
      const newUrl = prompt("Enter the new URL:", onlineSignUpUrl);
      if (newUrl) {
        setOnlineSignUpUrl(newUrl);
      }
    };
  
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

      const handleSwitchChange = () => {
        setFormData({
          ...formData,
          isAutomaticBilling: !formData.isAutomaticBilling,
        });
      };

      const [logo, setLogo] = useState(null);
      const [invoiceLogo, setInvoiceLogo] = useState(null);
      const logoInputRef = useRef(null);
      const invoiceLogoInputRef = useRef(null);
    
      const handleLogoChange = (e) => {
        if (e.target.files[0]) {
          setLogo(URL.createObjectURL(e.target.files[0]));
        }
      };
    
      const handleInvoiceLogoChange = (e) => {
        if (e.target.files[0]) {
          setInvoiceLogo(URL.createObjectURL(e.target.files[0]));
        }
      };
    
      const clearLogo = () => {
        setLogo(null);
        if (logoInputRef.current) {
          logoInputRef.current.value = "";
        }
      };
    
      const clearInvoiceLogo = () => {
        setInvoiceLogo(null);
        if (invoiceLogoInputRef.current) {
          invoiceLogoInputRef.current.value = "";
        }
      };


      const [viewData, setViewData] = useState({
        language: 'English (US)',
        timeZone: 'US/Central (GMT -05:00)',
        dateStyle: 'MDY',
        accountName: '',
        accountBank: '12',
        accountNumber: '1234567',
        taxNumber: '234567',
        tillFloat: '$0.00',
        clubOpeningDate: '',
        clubBillingStartDate: '04-06-2021',
        defaultCheckInDoor: 'golf simulator'
      });
    
      const handleChanges = (e) => {
        const { name, value } = e.target;
        setViewData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
  return (
    <>
       <div className="bg-light p-4 min-h-screen">
      {/* Header section */}
      <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
  {/* Empty div for spacing */}
  <div></div>

  <div className="d-flex gap-2 flex-column flex-md-row">
    {/* GymMaster Account Button */}
    <div className="relative">
      <button className="btn btn-outline-secondary rounded px-3 py-2 d-flex align-items-center text-sm">
        GymMaster Account <i className="fa-solid fa-chevron-down"></i>
      </button>
    </div>

    {/* Envelope Button */}
    <button className="btn btn-outline-secondary px-3 py-2">
      <i className="fa-solid fa-envelope"></i>
    </button>

    {/* Add Club Button */}
    <Link to="/addclubfrom">
    <button className="text-white rounded px-3 py-2 d-flex align-items-center text-sm" style={{ backgroundColor: "#2b689c" }}>
      <i className="fa-solid fa-plus"></i> Add Club
    </button>
    </Link>

    {/* Save Button */}
    <button className="btn btn-success text-white rounded px-4 py-2 text-sm">
      Save
    </button>
  </div>
</div>


      {/* Main heading */}
      <h1 className="text-2xl font-medium text-gray-800 mb-4">Club Name</h1>

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

      <div className="container py-5">
      <h1 className="h3 mb-4">Logos and Graphics</h1>

      {/* Logo Section */}
      <div className="card p-4 bg-light">
      <div className=" ">
        <div className="row">
          <div className="col-md-3 d-flex align-items-center">
            <label className="form-label">Logo</label>
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-column">
              <i className="fas fa-info-circle text-info mb-2"></i>
              <small className="text-muted mb-3">Recommended Size: 800 X 100px (Ratio 8:1)</small>

              <div className="d-flex align-items-center mb-3">
                <input
                  type="file"
                  ref={logoInputRef}
                  onChange={handleLogoChange}
                  className="form-control d-none"
                  id="logo-upload"
                  accept="image/*"
                />
                <label htmlFor="logo-upload" className="btn btn-outline-secondary">
                  Choose File
                </label>
                <span className="ms-3">{logo ? 'File selected' : 'No file chosen'}</span>
                <button onClick={clearLogo} className="btn btn-link ms-1">Clear</button>
              </div>

              {logo ? (
                <img src={logo} alt="Logo" className="img-fluid max-height-200" />
              ) : (
                <img
                  src="https://i.ibb.co/S4kcrKYQ/golo.png"
                  alt="Placeholder Logo"
                  className="img-fluid"
                
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Invoice/Receipt Logo Section */}
      <div className="mt-5">
        <div className="row">
          <div className="col-md-3 d-flex align-items-center">
            <label className="form-label">Invoice/Receipt Logo</label>
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-column">
              <i className="fas fa-info-circle text-info mb-2"></i>
              <small className="text-muted mb-3">Recommended Size: 960 X 480px (Ratio 2:1)</small>

              <div className="d-flex align-items-center mb-3">
                <input
                  type="file"
                  ref={invoiceLogoInputRef}
                  onChange={handleInvoiceLogoChange}
                  className="form-control d-none"
                  id="invoice-logo-upload"
                  accept="image/*"
                />
                <label htmlFor="invoice-logo-upload" className="btn btn-outline-secondary">
                  Choose File
                </label>
                <span className="ms-3">{invoiceLogo ? 'File selected' : 'No file chosen'}</span>
                <button onClick={clearInvoiceLogo} className="btn btn-link ms-1">Clear</button>
              </div>

              {invoiceLogo ? (
                <img src={invoiceLogo} alt="Invoice Logo" className="img-fluid max-height-200" />
              ) :  <img
              src="https://i.ibb.co/S4kcrKYQ/golo.png"
              alt="Placeholder Logo"
              className="img-fluid"
              
            />}
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5">
        <div className="row">
          <div className="col-md-3 d-flex align-items-center">
            <label className="form-label">Club Signature</label>
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-column">
              <i className="fas fa-info-circle text-info mb-2"></i>
              <small className="text-muted mb-3">Recommended Size: 800 X 100px (Ratio 8:1)</small>

              <div className="d-flex align-items-center mb-3">
                <input
                  type="file"
                  ref={logoInputRef}
                  onChange={handleLogoChange}
                  className="form-control d-none"
                  id="logo-upload"
                  accept="image/*"
                />
                <label htmlFor="logo-upload" className="btn btn-outline-secondary">
                  Choose File
                </label>
                <span className="ms-3">{logo ? 'File selected' : 'No file chosen'}</span>
                <button onClick={clearLogo} className="btn btn-link ms-1">Clear</button>
              </div>

              {logo ? (
                <img src={logo} alt="Logo" className="img-fluid max-height-200" />
              ) : (
                <img
                src="https://i.ibb.co/S4kcrKYQ/golo.png"
                alt="Placeholder Logo"
                className="img-fluid"
                
              />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Invoice/Receipt Logo Section */}
      <div className="mt-5">
        <div className="row">
          <div className="col-md-3 d-flex align-items-center">
            <label className="form-label">Site Favicon</label>
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-column">
              <i className="fas fa-info-circle text-info mb-2"></i>
              <small className="text-muted mb-3">Recommended Size: 960 X 480px (Ratio 2:1)</small>

              <div className="d-flex align-items-center mb-3">
                <input
                  type="file"
                  ref={invoiceLogoInputRef}
                  onChange={handleInvoiceLogoChange}
                  className="form-control d-none"
                  id="invoice-logo-upload"
                  accept="image/*"
                />
                <label htmlFor="invoice-logo-upload" className="btn btn-outline-secondary">
                  Choose File
                </label>
                <span className="ms-3">{invoiceLogo ? 'File selected' : 'No file chosen'}</span>
                <button onClick={clearInvoiceLogo} className="btn btn-link ms-1">Clear</button>
              </div>

              {invoiceLogo ? (
                <img src={invoiceLogo} alt="Invoice Logo" className="img-fluid max-height-200" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <div className="row">
        <div className='col-md-3 d-flex align-item-center'>
            <label>Email Template</label>
        </div>
        <div className="col-md-9">
            <button className='btn text-white' style={{backgroundColor:"#2b689c"}}><i class="fa-solid fa-pencil me-2"></i>Club Email Template</button>
        </div>
        </div>
      </div>
      </div>
    </div>
    <div className="container ">
      {/* Common Details Section */}
      <h1 className="h3 mb-4">Common Details</h1>

      <div className="bg-light rounded border p-4 mb-8">
        <div className="row">
          {/* Left Column Labels */}
          <div className="col-md-3">
            <div className="mb-4">
              <label className="form-label">Language Setting</label>
            </div>
            <div className="mb-4">
              <label className="form-label">Time Zone</label>
            </div>
            <div className="mb-4">
              <label className="form-label">Date Style</label>
            </div>
          </div>

          {/* Middle Column Dropdowns */}
          <div className="col-md-4">
            <div className="mb-4">
              <select
                name="language"
                value={viewData.language}
                onChange={handleChanges}
                className="form-select"
              >
                <option value="English (US)">English (US)</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>

            <div className="mb-4">
              <select
                name="timeZone"
                value={viewData.timeZone}
                onChange={handleChanges}
                className="form-select"
              >
                <option value="US/Central (GMT -05:00)">US/Central (GMT -05:00)</option>
                <option value="US/Eastern (GMT -04:00)">US/Eastern (GMT -04:00)</option>
                <option value="US/Pacific (GMT -07:00)">US/Pacific (GMT -07:00)</option>
              </select>
            </div>

            <div className="mb-4">
              <select
                name="dateStyle"
                value={viewData.dateStyle}
                onChange={handleChanges}
                className="form-select"
              >
                <option value="MDY">MDY</option>
                <option value="DMY">DMY</option>
                <option value="YMD">YMD</option>
              </select>
            </div>
          </div>

          {/* Right Column Notification */}
          <div className="col-md-5">
            <div className="mb-4">
              <p className="text-muted">
                The measurement configuration has now been moved to the Measurement Configuration page.
                Navigate to Settings → Measurement Configuration and click on the button named
                "Measurement Units Configuration", or just click the button below
              </p>
              <button className="btn btn-link">Measurement Units Configuration</button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <h1 className="h3 mb-4 mt-3">Additional Details</h1>

      <div className="bg-light rounded border p-4">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="mb-4">
              <label className="form-label">Account Name</label>
              <input
                type="text"
                name="accountName"
                value={viewData.accountName}
                onChange={handleChanges}
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Account Bank</label>
              <input
                type="text"
                name="accountBank"
                value={viewData.accountBank}
                onChange={handleChanges}
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={viewData.accountNumber}
                onChange={handleChanges}
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Tax Number</label>
              <input
                type="text"
                name="taxNumber"
                value={viewData.taxNumber}
                onChange={handleChanges}
                className="form-control"
              />
              <small className="form-text text-muted">
                Tax Number will appear in invoices & receipts under the name 'Tax Number'.
              </small>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="mb-4">
              <label className="form-label">Till Float</label>
              <input
                type="text"
                name="tillFloat"
                value={viewData.tillFloat}
                onChange={handleChanges}
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Club Opening Date</label>
              <div className="input-group">
                <input
                  type="text"
                  name="clubOpeningDate"
                  value={viewData.clubOpeningDate}
                  onChange={handleChanges}
                  className="form-control"
                  placeholder="mm-dd-yyyy"
                />
                <button className="btn btn-outline-secondary">
                <i class="fa-solid fa-calendar-days"></i>
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Club Billing Start Date</label>
              <div className="input-group">
                <input
                  type="text"
                  name="clubBillingStartDate"
                  value={viewData.clubBillingStartDate}
                  onChange={handleChanges}
                  className="form-control"
                />
                <button className="btn btn-outline-secondary">
                <i class="fa-solid fa-calendar-days"></i>
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Default Check-In Door</label>
              <select
                name="defaultCheckInDoor"
                value={viewData.defaultCheckInDoor}
                onChange={handleChanges}
                className="form-select"
              >
                <option value="golf simulator">Golf Simulator</option>
                <option value="main entrance">Main Entrance</option>
                <option value="side door">Side Door</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container py-5">
      <h1 className="h3 mb-4">Billing Details</h1>

      <div className="bg-light rounded border p-4 mb-5">
        <div className="row">
          {/* Left Column Labels */}
          <div className="col-md-5">
          <div className="mb-3">
              <label className="form-label"> Billing Currency</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Select new Billing Currency</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Manual Billing</label>
          
            </div>
            <div className="mb-3">
              <label className="form-label">Billing Provider</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Clover Connect Account ID</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Clover Connect Secret Key</label>
            </div>
          </div>

          {/* Right Column Inputs */}
          <div className="col-md-7">
          <div className="mb-3">
            <p>USD</p>
            </div>
            <div className="mb-3">
              <select
                name="billingCurrency"
                value={formData.billingCurrency}
                onChange={handleChange}
                className="form-select"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                {/* Add more currencies as required */}
              </select>
            </div>

            <div className="mb-3">
              <div className="form-check form-switch">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={formData.isAutomaticBilling}
                  onChange={handleSwitchChange}
                />
                <label className="form-check-label">
                  {formData.isAutomaticBilling ? 'Automatic Billing' : 'Manual Billing'}
                </label>
              </div>
            </div>

            <div className="mb-3">
              <select
                name="billingProvider"
                value={formData.billingProvider}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Clover Connect">Clover Connect</option>
                <option value="Stripe">Stripe</option>
                {/* Add more billing providers as needed */}
              </select>
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="cloverConnectAccountId"
                value={formData.cloverConnectAccountId}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="cloverConnectSecretKey"
                value={formData.cloverConnectSecretKey}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          </div>

          {/* Information Section */}
          <div className="row mt-4" >
          <div className="col-md-12">
            <div className="mb-3">
              <p className="text-sm text-gray-700">
                Members will be automatically billed after midnight for charges owed.
              </p>
            </div>

            <div className="mb-3">
              <label className="form-label">Clover Connect Onboarding</label>
              <p className="text-sm text-gray-700">
                These are the fields which we need:
                <ul>
                  <li>Account ID - it normally starts with (100, 101 or 200) and can be found in Admin - Accounts - List</li>
                  <li>Secret Key - Admin - Accounts - List and then click the view icon.</li>
                </ul>
              </p>
            </div>
            <div className="row">
          {/* Left Column Labels */}
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Paid-in-full Billing Provider</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Recurring Billing Provider</label>
            </div>
          </div>

          {/* Right Column Inputs */}
          <div className="col-md-8">
            <div className="mb-3">
              <select
                value={paidInFullProvider}
                onChange={(e) => setPaidInFullProvider(e.target.value)}
                className="form-select"
              >
                <option value="Clover Connect">Clover Connect</option>
                <option value="Stripe">Stripe</option>
                <option value="Square">Square</option>
                {/* Add more billing providers here */}
              </select>
            </div>

            <div className="mb-3">
              <select
                value={recurringProvider}
                onChange={(e) => setRecurringProvider(e.target.value)}
                className="form-select"
              >
                <option value="Clover Connect">Clover Connect</option>
                <option value="Stripe">Stripe</option>
                <option value="Square">Square</option>
                {/* Add more billing providers here */}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="">
        <div className="mb-4">
          <p className="text-sm text-gray-700">
            All the above is available after logging into your Clover Connect account here:
            <a
              href="https://secure.bluepay.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
             
            </a>
          </p>
        </div>

        <div>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="btn-link" style={{color:"blue" }}>
                Learn more about GymMaster's Integrated Billing Partners
              </a>
            </li>
            <li>
              <a href="#" className="btn-link" style={{color:"blue" }}>
                Individual billing providers can be enabled and disabled in Financial Settings
              </a>
            </li>
            <li>
              <a href="#" className="btn-link" style={{color:"blue" }}>
                Max and min billable amounts can be set in Advanced Configurations
              </a>
            </li>
          </ul>
        </div>
          </div>
        </div>
      </div>
    </div>
    <div className='row card p-4 bg-light'>
    <h1 className="h3 mb-4">Member Portal</h1>

<div className="">
  <div className="d-flex justify-content-between align-items-center">
    <div>
      <h5 className="mb-0">Online Sign-up Redirect URL</h5>
    </div>
    <div>
      <input
        type="text"
        value={onlineSignUpUrl}
        className="form-control mb-2"
        readOnly
      />
      <button 
        onClick={handleEditClick}
        className="btn btn-outline-primary btn-sm mt-2"
      >
        Edit
      </button>
    </div>
  </div>
</div>

<div className="">
  <div>
    <h5 className="mb-3">Club Notices</h5>
    <p className="text-muted">No notices available at the moment.</p>
  </div>
</div>
</div>

<div className="container py-5">
      <h1 className="h3 mb-4">Member App</h1>

      {/* Logo Section */}
      <div className="card p-4 bg-light">
      <div className=" ">
        <div className="row">
          <div className="col-md-3 d-flex align-items-center">
            <label className="form-label">Banner</label>
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-column">
              <i className="fas fa-info-circle text-info mb-2"></i>
              <small className="text-muted mb-3">Recommended Size: 800 X 100px (Ratio 8:1)</small>

              <div className="d-flex align-items-center mb-3">
                <input
                  type="file"
                  ref={logoInputRef}
                  onChange={handleLogoChange}
                  className="form-control d-none"
                  id="logo-upload"
                  accept="image/*"
                />
                <label htmlFor="logo-upload" className="btn btn-outline-secondary">
                  Choose File
                </label>
                <span className="ms-3">{logo ? 'File selected' : 'No file chosen'}</span>
                <button onClick={clearLogo} className="btn btn-link ms-1">Clear</button>
              </div>

              {logo ? (
                <img src={logo} alt="Logo" className="img-fluid max-height-200" />
              ) : (
                <img
                  src="https://i.ibb.co/S4kcrKYQ/golo.png"
                  alt="Placeholder Logo"
                  className="img-fluid"
                 
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Invoice/Receipt Logo Section */}
   

      {/* Invoice/Receipt Logo Section */}
      
      <div className='mt-5'>
        <div className="row">
        <div className='col-md-3 d-flex align-item-center'>
            <label>Club Information</label>
        </div>
        <div className="col-md-9">
            <button className='btn text-white' style={{backgroundColor:"#2b689c"}}>Edit</button>
        </div>
        </div>
      </div>
      </div>
    </div>

    <div className="container">
      <h2 className="mb-4">Notification Sounds</h2>
      <div className="bg-light p-4 rounded border mb-5">
        <div className="row mb-3">
          <label className="col-md-3 col-form-label">Granted</label>
          <div className="col-md-6">
            <select
              className="form-select"
              value={notificationSounds.granted}
              onChange={(e) =>
                setNotificationSounds({ ...notificationSounds, granted: e.target.value })
              }
            >
              <option value="Chirp">Chirp</option>
              <option value="Descending">Descending</option>
              <option value="Marimba">Marimba</option>
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-outline-secondary">
              <i className="bi bi-volume-up"></i>
            </button>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-md-3 col-form-label">Warning</label>
          <div className="col-md-6">
            <select
              className="form-select"
              value={notificationSounds.warning}
              onChange={(e) =>
                setNotificationSounds({ ...notificationSounds, warning: e.target.value })
              }
            >
              <option value="Chirp">Chirp</option>
              <option value="Descending">Descending</option>
              <option value="Marimba">Marimba</option>
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-outline-secondary">
              <i className="bi bi-volume-up"></i>
            </button>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-md-3 col-form-label">Denied</label>
          <div className="col-md-6">
            <select
              className="form-select"
              value={notificationSounds.denied}
              onChange={(e) =>
                setNotificationSounds({ ...notificationSounds, denied: e.target.value })
              }
            >
              <option value="Descending">Descending</option>
              <option value="Marimba">Marimba</option>
              <option value="Chirp">Chirp</option>
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-outline-secondary">
              <i className="bi bi-volume-up"></i>
            </button>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-md-3 col-form-label">New Fob</label>
          <div className="col-md-6">
            <select
              className="form-select"
              value={notificationSounds.newFob}
              onChange={(e) =>
                setNotificationSounds({ ...notificationSounds, newFob: e.target.value })
              }
            >
              <option value="Marimba">Marimba</option>
              <option value="Descending">Descending</option>
              <option value="Chirp">Chirp</option>
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-outline-secondary">
              <i className="bi bi-volume-up"></i>
            </button>
          </div>
        </div>
      </div>

      <h2 className="mb-4">Maintenance Fee</h2>
      <div className="bg-light p-4 rounded border mb-5">
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="maintenanceFee"
                checked={maintenanceFee}
                onChange={(e) => setMaintenanceFee(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="maintenanceFee">
                Enabled
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-muted">
              Note: Maintenance fees need to be enabled at per membership type category level. Enabling the fee will not automatically charge all members.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default ClubSetting
