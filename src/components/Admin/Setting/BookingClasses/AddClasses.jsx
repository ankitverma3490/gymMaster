import React from 'react'
import { Link } from 'react-router-dom'

function AddClasses() {
  return (
    <div>
      <div class="container mt-4">
        <div className='d-flex justify-content-between'>
        <h3>Add New Class</h3>
        <Link to ="/bookingclasses">
        <button className='btn btn-primary'>Back</button>
        </Link>
        </div>
  <div class="row">
    {/* <!-- Left Side - Class Details --> */}
    <div class="col-12 col-md-6 card p-4">
      
      <form>
        <div class="mb-3">
          <label for="className" class="form-label">Class Name</label>
          <input type="text" class="form-control" id="className" placeholder="Enter class name"/>
        </div>
        <div class="mb-3">
          <label for="category" class="form-label">Class Category</label>
          <select class="form-select" id="category">
            <option>Bootcamp/PT Classes</option>
            {/* <!-- Add more categories as needed --> */}
          </select>
        </div>
        <div class="mb-3">
          <label for="duration" class="form-label">Duration</label>
          <input type="text" class="form-control" id="duration" value="1 Hour" readonly/>
        </div>
        <div class="mb-3">
          <label for="maxParticipants" class="form-label">Max Participants</label>
          <input type="number" class="form-control" id="maxParticipants" value="25"/>
        </div>
        <div class="mb-3">
          <label for="color" class="form-label">Color</label>
          <input type="color" class="form-control" id="color" value="#FFFF00"/>
        </div>
      </form>
    </div>

    {/* <!-- Right Side - Class Type and Fee Section --> */}
    <div class="col-12 col-md-6 card p-4 ">
      
      <form>
        <div class="form-check mb-3">
          <input type="checkbox" class="form-check-input" id="currentMembers" checked/>
          <label class="form-check-label" for="currentMembers">Current Members</label>
        </div>
        <div class="form-check mb-3">
          <input type="checkbox" class="form-check-input" id="casualsProspects"/>
          <label class="form-check-label" for="casualsProspects">Casuals & Prospects</label>
        </div>
        <div class="mb-3">
          <label for="paymentBasis" class="form-label">Class Packs</label>
          <select class="form-select" id="paymentBasis">
            <option>All class benefits</option>
            <option>Selected benefits only</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="noShowFee" class="form-label">No Show Fee</label>
          <input type="number" class="form-control" id="noShowFee" value="10.00"/>
        </div>
        <div class="d-flex justify-content-between">
          <div class="mb-3">
            <label for="exclTax" class="form-label">Price Excluding Tax</label>
            <input type="number" class="form-control" id="exclTax" value="10.00"/>
          </div>
          <div class="mb-3">
            <label for="inclTax" class="form-label">Price Including Tax</label>
            <input type="number" class="form-control" id="inclTax" value="11.00"/>
          </div>
        </div>
        <div class="mb-3">
          <label for="sortOrder" class="form-label">Sort Order</label>
          <input type="number" class="form-control" id="sortOrder" value="1"/>
        </div>
        <div class="mb-3">
          <label for="minNotice" class="form-label">Minimum Notice of Cancellation</label>
          <input type="number" class="form-control" id="minNotice" value="24"/>
        </div>
        <div class="mb-3">
          <label for="maintenanceFeeOverride" class="form-label">Maintenance Fee Date Override</label>
          <input type="number" class="form-control" id="maintenanceFeeOverride" value="30"/>
        </div>
      </form>
    </div>
  </div>

  {/* <!-- Footer and Save Button --> */}
  <div class="text-end mt-3">
    <button type="button" class="btn btn-success">Save</button>
  </div>
</div>


    </div>
  )
}

export default AddClasses
