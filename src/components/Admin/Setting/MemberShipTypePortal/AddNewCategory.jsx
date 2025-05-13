import React from 'react'
import { Link } from 'react-router-dom'

function AddNewCategory() {
  return (
    <>
      <div class="container mt-4">
  <div class="row">
    <div class="col-12">
        <div className='d-flex justify-content-between'>
      <h3>Add New Category</h3>
      <Link to="/typeofmemberportal">
      <button className='btn btn-primary'>Back</button>
      </Link>
      </div>
      <form>
        <div className='card p-4'>
        {/* <!-- Category Section --> */}
        <div class="row mb-3">
          <div class="col-md-6">
            <h4>Category</h4>
            <label for="categoryName" class="form-label">Category Name</label>
            <input type="text" class="form-control" id="categoryName" placeholder="Enter category name"/>
          </div>
          <div class="col-md-6">
            <label for="taxRate" class="form-label">Tax Rate</label>
            <input type="text" class="form-control" id="taxRate" value="Zero Rated Tax - 0%" readonly/>
          </div>
        </div>

        {/* <!-- Description Section --> */}
        <div class="mb-3">
          <label for="onlineDescription" class="form-label">Online Description</label>
          <textarea class="form-control" id="onlineDescription" rows="3" placeholder="Enter online description"></textarea>
        </div>

        {/* <!-- Sort Order Section --> */}
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="sortOrder" class="form-label">Sort Order</label>
            <input type="number" class="form-control" id="sortOrder" value="0"/>
          </div>
          <div class="col-md-6">
            <label for="minNoticeOfCancellation" class="form-label">Minimum Notice of Cancellation</label>
            <input type="number" class="form-control" id="minNoticeOfCancellation" value="0"/>
          </div>
        </div>

        {/* <!-- Maintenance Fee Section --> */}
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="maintenanceFeeOverride" class="form-label">Maintenance Fee Date Override</label>
            <input type="text" class="form-control" id="maintenanceFeeOverride" value="seconds"/>
          </div>
        </div>

        {/* <!-- Checkbox Section --> */}
        <div class="row mb-3">
          <div class="col-md-6">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="requireSignature" />
              <label class="form-check-label" for="requireSignature">Require signature before completing membership</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="sellPaidMembership" />
              <label class="form-check-label" for="sellPaidMembership">Sell Paid In Full Membership Types via POS</label>
            </div>
          </div>
        </div>
        </div>
        {/* <!-- Access Control Section --> */}
        <div className='card p-4 mt-2'>
        <h5>Access Control</h5>
        <div class="mb-3">
          <label class="form-label">Forms to Sign</label>
          <select class="form-select" id="formsToSign">
            <option>Select...</option>
            {/* <!-- Add other options here --> */}
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Cancellation Terms</label>
          <select class="form-select" id="cancellationTerms">
            <option>Not Required</option>
            {/* <!-- Add other options here --> */}
          </select>
        </div>

        {/* <!-- Access Token Checkbox --> */}
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="assignAccessToken" />
          <label class="form-check-label" for="assignAccessToken">Assign a Bluetooth Access Token (online sign-up only)</label>
        </div>
        </div>
        {/* <!-- Save Button --> */}
        <div class="mt-4">
          <button type="submit" class="btn btn-success">Save</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default AddNewCategory
