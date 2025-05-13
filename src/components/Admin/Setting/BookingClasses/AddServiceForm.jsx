import React from 'react'
import { Link } from 'react-router-dom'

function AddServiceForm() {
  return (
    <>
      <div class="container py-4">
        <div className='d-flex justify-content-between  mb-3'>
            <h4>Add Service</h4>
            <Link to="/bookingclasses">
            <button className='btn btn-primary'>Back</button>
            </Link>
        </div>
  <div class="card p-4">
    {/* <!-- Service Is For Section --> */}
    <div class="mb-4">
      <label class="form-label">Service is for</label>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="currentMember" checked/>
        <label class="form-check-label" for="currentMember">
          Current Member
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="casualProspects"/>
        <label class="form-check-label" for="casualProspects">
          Casuals &amp; Prospects
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="servicePacks" checked/>
        <label class="form-check-label" for="servicePacks">
          Service Packs
        </label>
      </div>
      <div class="d-flex gap-2">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="benefits" id="allBenefits" checked/>
          <label class="form-check-label" for="allBenefits">All service benefits</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="benefits" id="selectedBenefits"/>
          <label class="form-check-label" for="selectedBenefits">Only with selected benefit</label>
        </div>
      </div>
      <div class="mt-2">
        <label class="form-label">Alternatively Pay</label>
        <input type="text" class="form-control" id="basePrice" placeholder="Base Price"/>
      </div>
    </div>

    {/* <!-- Payment Fee Section --> */}
    <div class="mb-4">
      <label class="form-label">No Show Fee</label>
      <div class="d-flex gap-2">
        <input type="number" class="form-control" id="excludingTax" placeholder="Excluding Tax" value="10.00"/>
        <span class="align-self-center">to</span>
        <input type="number" class="form-control" id="includingTax" placeholder="Including Tax" value="10.00"/>
      </div>
    </div>

    {/* <!-- Online Bookings Section --> */}
    <div class="mb-4">
      <label class="form-label">Online Bookings</label>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="bookableOnline"/>
        <label class="form-check-label" for="bookableOnline">
          Bookable Online
        </label>
      </div>
    </div>

    {/* <!-- Group Bookings Section --> */}
    <div class="mb-4">
      <label class="form-label">Group Bookings</label>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="groupBookings"/>
        <label class="form-check-label" for="groupBookings">
          This Service is for Group Bookings
        </label>
      </div>
    </div>

    {/* <!-- Save Button --> */}
    <div class="d-flex justify-content-end">
      <button class="btn btn-success">Save</button>
    </div>
  </div>
</div>

    </>
  )
}

export default AddServiceForm
