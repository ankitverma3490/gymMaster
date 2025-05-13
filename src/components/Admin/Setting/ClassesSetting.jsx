import React, { useState } from 'react'


function ClassesSetting() {
  const [openClassBookings, setOpenClassBookings] = useState(8);
  const [closeClassBookings, setCloseClassBookings] = useState(5);
  const [emailTemplate, setEmailTemplate] = useState('Member Portal Class Booking');
  const [enableConfirmationEmail, setEnableConfirmationEmail] = useState(true);
  const [emailNotification, setEmailNotification] = useState(false);
  const [hideInterclub, setHideInterclub] = useState(false);
  const [enableCancellation, setEnableCancellation] = useState(true);
  const [cancellationPeriod, setCancellationPeriod] = useState(30);
  const [cancellationFee, setCancellationFee] = useState("");
  const [dailyBookingLimit, setDailyBookingLimit] = useState(4);
  const [currentDayBookingLimit, setCurrentDayBookingLimit] = useState(4);


  const handleSaveChanges = () => {
    // Handle saving changes logic
    console.log("Changes saved");
  };
  return (
    <>
       <div className="row">
                <h5 className="mb-4">Classes </h5>
                <div className="row">
        <div className="col-md-12">
          
          <div className="card">
            <div className="card-body">
              <form>
                <div>
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="enableConfirmationEmail"
                   
                  />
                  <label>Open class enrollments at selected time</label><br/>
                  <span>Allow class enrollments to open at a pre-selected time. Default is midnight
                  </span>
                </div>
                {/* Open class bookings */}
                <div className="mb-3 mt-3">
                  <label htmlFor="openClassBookings" className="form-label">
                    Open class bookings online
                  </label><br/>
                  <span>Select time-frame prior to class beginning when online bookings are to open
                  </span>
                  <div className="d-flex">
                    <input
                      type="number"
                      id="openClassBookings"
                      className="form-control"
                      value={openClassBookings}
                      onChange={(e) => setOpenClassBookings(e.target.value)}
                    />
                    <select className="form-select ms-2">
                      <option>days</option>
                      <option>hours</option>
                    </select>
                  </div>
                  <small>Default Value: 2 WeeksLast Changed: Dec 19 2024 9:03 pm by Mike Bell
                  </small>
                </div>

                {/* Close class bookings */}
                <div className="mb-3">
                  <label htmlFor="closeClassBookings" className="form-label">
                    Close class bookings online
                  </label><br/>
                  <span>Select time-frame prior to class beginning when online bookings are to close
                  </span>
                  <div className="d-flex">
                    <input
                      type="number"
                      id="closeClassBookings"
                      className="form-control"
                      value={closeClassBookings}
                      onChange={(e) => setCloseClassBookings(e.target.value)}
                    />
                    <select className="form-select ms-2">
                      <option>minutes</option>
                      <option>hours</option>
                    </select>
                  </div>
                  <small>Last Changed: Nov 3 2024 9:41 pm by Mike Bell
                  </small>
                </div>

                {/* Enable class booking confirmation email */}
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="enableConfirmationEmail"
                    checked={enableConfirmationEmail}
                    onChange={() => setEnableConfirmationEmail(!enableConfirmationEmail)}
                  />
                  <label htmlFor="enableConfirmationEmail" className="form-check-label">
                    Enable class booking confirmation email
                  </label>
                  <span>Send confirmation email for class bookings
                  </span>
                </div>

                {/* Email template */}
                <div className='card p-4 '>
                <div className="mb-3">
                  <label htmlFor="emailTemplate" className="form-label">
                    Email template used for class booking confirmation
                  </label><br/>
                  <span>The email template used when a member books a class online.
                  </span>
                 <select class="form-control" id="mp_classbookingemail_templateidid" name="mp_classbookingemail_templateid" children=""><option value="">Select a template</option><option value="30">Birthday: Happy birthday!</option><option value="283951">Bluetooth Issues</option><option value="25">Booking Auto-Cancelled</option><option value="45">Boot Camp Classes Are Launching Soon!</option><option value="44">Bootcamp Inquiry</option><option value="16">Class Booking Cancellation: Booking Cancelled</option><option value="283947">Class Booking Cancellation: Booking Cancelled by Staff</option><option value="54">Class Waitlist Removal</option><option value="27">(Example) 100 Visits: Congrats on being to the gym 100 times!</option><option value="42">(Example) Book Online (Copy 1)</option><option value="34">(Example) Download the App</option><option value="5">Expiring members: Your gym membership is about to expire!</option><option value="21">Failed Billing Attempt 1 (Template)</option><option value="31">Failed Billing Attempt 2 (Template)</option><option value="32">Failed Billing Attempt 3 (Template)</option><option value="50">Holiday Season !!! </option><option value="14">Individual Booking</option><option value="39">Intro Kickbox session</option><option value="24">Member Account Invoice</option><option value="11" disabled="disabled">Member Portal Add Membership (Incompatible fields)</option><option value="15" selected="selected">Member Portal Class Booking</option><option value="13">Member Portal Enquiry</option><option value="17" disabled="disabled">Member Portal Membership Cancellation (Incompatible fields)</option><option value="283946" disabled="disabled">Member Portal Membership Signup Notification (Incompatible fields)</option><option value="19">Member Portal Outstanding Balance</option><option value="41">Member Portal Password Reset</option><option value="18">Member Portal POS Confirmation</option><option value="22">Member Portal Waitlist Update</option><option value="7">Month 1: First month</option><option value="26">Month 3: Three months</option><option value="283948">MP Membership Cancellation Requested</option><option value="283949">MP Membership Hold Requested</option><option value="51">New Membership Promotion</option><option value="9">Non-Visitation: 3 weeks - Come back, we miss you!</option><option value="283945">Online Gift Voucher purchase</option><option value="12" disabled="disabled">Online signup: Welcome, new member! (Incompatible fields)</option><option value="38">Payment Details Updated</option><option value="23">POS Purchase Receipt</option><option value="29">Prospect online contact</option><option value="28">Prospect tour, without commitment onsite</option><option value="283952">Purchasing a Gift Voucher for a Recipient</option><option value="35">reschedule appt</option><option value="47">Stripe Validation Template</option><option value="40" disabled="disabled">Suspension Notification (Template) (Incompatible fields)</option><option value="46">Tory $10 28 Day Challenge Email</option><option value="7080">Week 1: A week of progress</option><option value="283950">WE MISS YOU at Aira Fitness Antioch!</option><option value="36">You can pay online</option><option value="43"></option></select>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="emailTemplate" className="form-label">
                  Email template used for waitlist confirmation
                  </label><br/>
                  <span>The Waitlist Confirmation email template - sent to member to confirm when they are added to waitlist

                  </span>
                <select class="form-control" id="mp_classwaitlistemail_templateidid" name="mp_classwaitlistemail_templateid" children=""><option value="">Select a template</option><option value="30">Birthday: Happy birthday!</option><option value="283951">Bluetooth Issues</option><option value="25">Booking Auto-Cancelled</option><option value="45">Boot Camp Classes Are Launching Soon!</option><option value="44">Bootcamp Inquiry</option><option value="16">Class Booking Cancellation: Booking Cancelled</option><option value="283947">Class Booking Cancellation: Booking Cancelled by Staff</option><option value="54">Class Waitlist Removal</option><option value="27">(Example) 100 Visits: Congrats on being to the gym 100 times!</option><option value="42">(Example) Book Online (Copy 1)</option><option value="34">(Example) Download the App</option><option value="5">Expiring members: Your gym membership is about to expire!</option><option value="21">Failed Billing Attempt 1 (Template)</option><option value="31">Failed Billing Attempt 2 (Template)</option><option value="32">Failed Billing Attempt 3 (Template)</option><option value="50">Holiday Season !!! </option><option value="14">Individual Booking</option><option value="39">Intro Kickbox session</option><option value="24">Member Account Invoice</option><option value="11" disabled="disabled">Member Portal Add Membership (Incompatible fields)</option><option value="15">Member Portal Class Booking</option><option value="13">Member Portal Enquiry</option><option value="17" disabled="disabled">Member Portal Membership Cancellation (Incompatible fields)</option><option value="283946" disabled="disabled">Member Portal Membership Signup Notification (Incompatible fields)</option><option value="19">Member Portal Outstanding Balance</option><option value="41">Member Portal Password Reset</option><option value="18">Member Portal POS Confirmation</option><option value="22">Member Portal Waitlist Update</option><option value="7">Month 1: First month</option><option value="26">Month 3: Three months</option><option value="283948">MP Membership Cancellation Requested</option><option value="283949">MP Membership Hold Requested</option><option value="51">New Membership Promotion</option><option value="9">Non-Visitation: 3 weeks - Come back, we miss you!</option><option value="283945">Online Gift Voucher purchase</option><option value="12" disabled="disabled">Online signup: Welcome, new member! (Incompatible fields)</option><option value="38">Payment Details Updated</option><option value="23">POS Purchase Receipt</option><option value="29">Prospect online contact</option><option value="28">Prospect tour, without commitment onsite</option><option value="283952">Purchasing a Gift Voucher for a Recipient</option><option value="35">reschedule appt</option><option value="47">Stripe Validation Template</option><option value="40" disabled="disabled">Suspension Notification (Template) (Incompatible fields)</option><option value="46">Tory $10 28 Day Challenge Email</option><option value="7080">Week 1: A week of progress</option><option value="283950">WE MISS YOU at Aira Fitness Antioch!</option><option value="36">You can pay online</option><option value="43"></option></select>
                </div>
                <small>Last Changed: Jan 7 2020 1:07 pm by Jaime Dolewski
                </small>
                </div>
                {/* Save button */}
               

                <div className="border-b pb-4">
          <div className="flex items-start">
            <input 
              type="checkbox" 
              id="email-notification" 
              className="mt-1 mr-3"
              checked={emailNotification}
              onChange={() => setEmailNotification(!emailNotification)}
            />
            <div className="flex-1">
              <label htmlFor="email-notification" className="font-medium text-gray-900">
                Send auto-email notification to gym when class attendee cancels
              </label>
              <p className="text-sm text-gray-600 mt-1">
                Email will be sent to current clubs email address as set in Club Details. This will send for cancellations by both the member and staff.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Last Changed: Mar 13 2023 7:15 pm by Mike Bell
              </p>
            </div>
          </div>
        </div>

        {/* Grouping of classes */}
        <div className="border-b pb-4">
          <div className="mb-2">
            <label className="font-medium text-gray-900">Grouping of classes</label>
            <p className="text-sm text-gray-600 mt-1">
              Select order by which classes will be grouped and displayed on Book Class page on Member Portal, by class name, date of class, or class category
            </p>
          </div>
          <div className="relative">
          <select class="form-control" id="mp_bookclass_groupingid" name="mp_bookclass_grouping" children=""><option value="class">Grouped by Class</option><option value="date" selected="selected">Grouped by Date</option><option value="classtype">Grouped by Category</option></select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Last Changed: Sep 20 2022 11:13 am by airafitness
          </p>
        </div>

        {/* Hide interclub classes */}
        <div className="border-b pb-4">
          <div className="flex items-start">
            <input 
              type="checkbox" 
              id="hide-interclub" 
              className="mt-1 mr-3"
              checked={hideInterclub}
              onChange={() => setHideInterclub(!hideInterclub)}
            />
            <div className="flex-1">
              <label htmlFor="hide-interclub" className="font-medium text-gray-900">
                Hide interclub classes
              </label>
              <p className="text-sm text-gray-600 mt-1">
                Prevent members with membership at one club from viewing/booking classes from other clubs
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Last Changed: Aug 23 2022 10:36 pm by airafitness
              </p>
            </div>
          </div>
        </div>

        {/* Enable cancellation */}
        <div className="border-b pb-4">
          <div className="flex items-start">
            <input 
              type="checkbox" 
              id="enable-cancellation" 
              className="mt-1 mr-3"
              checked={enableCancellation}
              onChange={() => setEnableCancellation(!enableCancellation)}
            />
            <div className="flex-1">
              <label htmlFor="enable-cancellation" className="font-medium text-gray-900">
                Enable cancellation of class booking online
              </label>
              <p className="text-sm text-gray-600 mt-1">
                Allow members to cancel class bookings via Member Portal
              </p>
            </div>
          </div>

          {enableCancellation && (
            <div className='card p-4 bg-light'>
            <div className="mt-4 pl-8 space-y-6">
              {/* Minimum cancellation period */}
              <div>
                <label className="font-medium text-gray-900">Minimum cancellation period for members - classes</label>
                <p className="text-sm text-gray-600 mt-1">
                  Select minimum amount of time before a class booking begins that members can cancel online
                </p>
                <div className="d-flex items-center gap-2 mt-2">
                  <input
                    type="number"
                    value={cancellationPeriod}
                    onChange={(e) => setCancellationPeriod(e.target.value)}
                    className="p-2 border border-gray-300 rounded "
                  />
                  <div className="relative flex-1 max-w-xs">
                    <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8">
                      <option>minutes</option>
                      <option>hours</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                   
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Default Value: 1 Days   Last Changed: May 31 2024 11:55 am by Mike Bell
                </p>
              </div>

              {/* Booking cancellation fee */}
              <div className='mt-2'>
                <label className="font-medium text-gray-900">Booking cancellation fee for members - classes</label>
                <p className="text-sm text-gray-600 mt-1">
                  Choose cancellation fee charged to member account upon cancellation of a class booking. This will apply only when cancellation mode is set to 'Charge Fee for Cancellation'
                </p>
                <div className="mt-2">
                  <input
                    type="text"
                    value={cancellationFee}
                    onChange={(e) => setCancellationFee(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                    placeholder="Enter fee amount"
                  />
                </div>
              </div>

              {/* Cancellation fee period */}
              <div className='mt-3'>
                <label className="font-medium text-gray-900">Cancellation fee period - classes</label>
                <p className="text-sm text-gray-600 mt-1">
                  Select time frame prior to class within which a cancellation fee will be charged. If not set - fee will be charged at any time of cancellation. Note this setting does not apply when cancellation mode is set to 'Refund - No Charge'.
                </p>
                <div className="d-flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded flex-1 "
                    placeholder="Enter time frame"
                  />
                  <div className="relative flex-1">
                    <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8">
                      <option>hours before class</option>
                      <option>minutes before class</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                   
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-3'>
                <label className="font-medium text-gray-900">Cancellation mode - classes
                </label>
                <span className="text-sm text-gray-600 mt-1">
                Select option - how will member be charged for online cancellation of a class booking

                </span>
                <div className="d-flex items-center gap-2 mt-2">
                <div className="relative flex-1">
  <select className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8">
    <option>Refund no charge</option>
    <option>Forfeit Full Fee</option>
  </select>
</div>


                </div>
              </div>
            </div>
            </div>
          )}
        </div>
        <div className="row">
        <div className="col-md-12">
          <div className="">
            <div className="card-body">
           
                {/* Daily Class Booking Limit */}
                <div className="mb-3">
                  <label htmlFor="dailyBookingLimit" className="form-label">
                    Daily class booking limit
                  </label>
                  <input
                    type="number"
                    id="dailyBookingLimit"
                    className="form-control"
                    value={dailyBookingLimit}
                    onChange={(e) => setDailyBookingLimit(e.target.value)}
                  />
                  <small className="form-text text-muted">
                    Select maximum online bookings members can hold per day.
                  </small>
                </div>

                {/* Current Day Class Booking Limit */}
                <div className="mb-3">
                  <label htmlFor="currentDayBookingLimit" className="form-label">
                    Current day class booking limit
                  </label>
                  <input
                    type="number"
                    id="currentDayBookingLimit"
                    className="form-control"
                    value={currentDayBookingLimit}
                    onChange={(e) => setCurrentDayBookingLimit(e.target.value)}
                  />
                  <small className="form-text text-muted">
                    Select maximum online bookings members can create per day.
                  </small>
                </div>

                {/* Save Button */}
                
          
            </div>
          </div>
        </div>
      </div>
        {/* Save button */}
      

              </form>
            </div>
          </div>
        </div>
      </div>
              </div>
    </>
  )
}

export default ClassesSetting
