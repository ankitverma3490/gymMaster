import React, { useState, useRef } from 'react';

const BookingClasses = () => {
  const tabs = [
    'Text Input Fields',
    'Dropdown Input Fields',
    'Checkbox Input Fields',
    'Date Input Fields',
    'Tags',
    'Promotions', // Added the Promotions tab
    'Prospect Funnel Stages',
    'Involvement Types',
    'Membership Cancel Reasons',
    'Booking Cancel Reasons',
    'Prospect Not Interested Reasons' // This will be the new tab
  ];

  const [fields, setFields] = useState([{ id: 1, name: '' }]);
  const [tagItems, setTagItems] = useState([{ id: 1, label: 'AI' }]);
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      name: 'Key Fob Giveaway',
      contactLink: '#',
      signUpLink: '#',
    },
    {
      id: 2,
      name: '7-Day Pass',
      contactLink: '#',
      signUpLink: '#',
    },
    {
      id: 3,
      name: 'Member Referral',
      contactLink: '#',
      signUpLink: '#',
    },
    {
      id: 4,
      name: '6 wk Challenge / Box',
      contactLink: '#',
      signUpLink: '#',
    },
  ]);

  const sectionsRef = useRef({});

  const addField = () => {
    const newId = fields.length ? fields[fields.length - 1].id + 1 : 1;
    setFields([...fields, { id: newId, name: '' }]);
  };

  const updateField = (id, value) => {
    const updated = fields.map((field) =>
      field.id === id ? { ...field, name: value } : field
    );
    setFields(updated);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const addPromotion = () => {
    setPromotions([
      ...promotions,
      { id: promotions.length + 1, name: '', contactLink: '', signUpLink: '' },
    ]);
  };

  const removePromotion = (id) => {
    setPromotions(promotions.filter((promotion) => promotion.id !== id));
  };

  const scrollToSection = (tab) => {
    sectionsRef.current[tab]?.scrollIntoView({ behavior: 'smooth' });
  };


  const [stages, setStages] = useState([
    {
      id: 1,
      name: 'Uncontacted',
      automation1: '',
      automation2: '',
    },
    {
      id: 2,
      name: 'Contacted (No Answer)',
      automation1: '',
      automation2: '',
    },
    {
      id: 3,
      name: 'Follow Up',
      automation1: '',
      automation2: '',
    },
    {
      id: 4,
      name: 'Booked APPT',
      automation1: '',
      automation2: '',
    },
    {
      id: 5,
      name: 'No Show',
      automation1: '',
      automation2: '',
    },
    {
      id: 6,
      name: 'SOLD',
      automation1: '',
      automation2: '',
    },
    {
      id: 7,
      name: "Didn't Buy",
      automation1: '',
      automation2: '',
    },
  ]);

  const addStage = () => {
    setStages([
      ...stages,
      { id: stages.length + 1, name: '', automation1: '', automation2: '' },
    ]);
  };

  const removeStage = (id) => {
    setStages(stages.filter((stage) => stage.id !== id));
  };

  const updateStage = (id, field, value) => {
    const updated = stages.map((stage) =>
      stage.id === id ? { ...stage, [field]: value } : stage
    );
    setStages(updated);
  };

  const [types, setTypes] = useState([
    { id: 1, name: 'Member', sortOrder: 1 },
    { id: 2, name: 'Staff', sortOrder: 2 },
  ]);

  const addType = () => {
    setTypes([...types, { id: types.length + 1, name: '', sortOrder: types.length + 1 }]);
  };

  const removeType = (id) => {
    setTypes(types.filter((type) => type.id !== id));
  };

  const updateType = (id, field, value) => {
    const updated = types.map((type) =>
      type.id === id ? { ...type, [field]: value } : type
    );
    setTypes(updated);
  };

  const [reasons, setReasons] = useState([
    { id: 1, reason: '-', controllable: true, memberPortal: true, membershipChange: false, sortOrder: 0 },
    { id: 2, reason: '--', controllable: false, memberPortal: false, membershipChange: false, sortOrder: 0 },
    { id: 3, reason: '7 Day Pass Cancelled', controllable: true, memberPortal: true, membershipChange: true, sortOrder: 0 },
    { id: 4, reason: 'Bad Debt- Old Member', controllable: true, memberPortal: false, membershipChange: true, sortOrder: 0 },
    { id: 5, reason: 'Cancelled- (current member that\'s been paid)', controllable: true, memberPortal: true, membershipChange: true, sortOrder: 0 },
    { id: 6, reason: 'Moving', controllable: false, memberPortal: true, membershipChange: false, sortOrder: 0 },
  ]);

  const addReason = () => {
    setReasons([
      ...reasons,
      { id: reasons.length + 1, reason: '', controllable: false, memberPortal: false, membershipChange: false, sortOrder: 0 },
    ]);
  };

  const removeReason = (id) => {
    setReasons(reasons.filter((reason) => reason.id !== id));
  };

  const updateReason = (id, field, value) => {
    const updated = reasons.map((reason) =>
      reason.id === id ? { ...reason, [field]: value } : reason
    );
    setReasons(updated);
  };


  const [booking, setBooking] = useState([
    { id: 1, reason: 'Change of Mind', controllable: true },
    { id: 2, reason: 'Cannot Attend', controllable: true },
    { id: 3, reason: 'Will Call to Reschedule', controllable: true },
    { id: 4, reason: 'Booking miscommunication', controllable: true },
    { id: 5, reason: 'Trainer unwell/not in', controllable: false },
    { id: 6, reason: 'Client unwell', controllable: true },
    { id: 7, reason: 'Staff Error', controllable: false },
  ]);

  const addBooking = () => {
    setBooking([
      ...reasons,
      { id: booking.length + 1, reason: '', controllable: false },
    ]);
  };

  const removeBooking = (id) => {
    setReasons(booking.filter((reason) => reason.id !== id));
  };

  const updateBooking = (id, field, value) => {
    const updated = booking.map((reason) =>
      reason.id === id ? { ...reason, [field]: value } : reason
    );
    setBooking(updated);
  };


  return (
    <div className="container py-4">
      {/* Tab Navigation */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className="btn btn-outline-dark btn-sm"
            onClick={() => scrollToSection(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Section Rendering */}
      {tabs.map((tab) => (
        <div key={tab} ref={(el) => (sectionsRef.current[tab] = el)} className="mb-5">
          <h4 className="mb-2">{tab}</h4>
          <p className="text-muted">
            <strong>{tab}</strong>
          </p>

          {/* Special layout for Tags */}
          {tab === 'Tags' ? (
            <div className="bg-light p-4 rounded border">
              <div className="table-responsive">
                <table className="table table-borderless mb-0">
                  <thead className="bg-light border-bottom">
                    <tr>
                      <th>#</th>
                      <th>Tag</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tagItems.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.label}</td>
                        <td>
                          <button className="btn btn-outline-primary btn-sm">
                            <i className="fas fa-edit"></i> Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : tab === 'Promotions' ? (
            // Promotions Section
            <div className="bg-light p-4 rounded border">
              <div className="d-flex justify-content-end mb-3 gap-2">
                <button className="btn btn-outline-dark btn-sm" onClick={addPromotion}>
                  <i className="fas fa-plus me-1"></i> Add New Promotion
                </button>
                <button className="btn btn-success btn-sm">Save</button>
              </div>

              <div className="table-responsive">
                <table className="table table-borderless mb-0">
                  <thead className="bg-light border-bottom">
                    <tr>
                      <th>Name</th>
                      <th>Online Contact Us Link</th>
                      <th>Online Sign Up Link</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {promotions.map((promotion) => (
                      <tr key={promotion.id}>
                        <td>{promotion.name}</td>
                        <td>
                          <a
                            href={promotion.contactLink}
                            rel="noopener noreferrer"
                          >
                            {promotion.contactLink}
                          </a>
                        </td>
                        <td>
                          <a
                            href={promotion.signUpLink}
                            rel="noopener noreferrer"
                          >
                            {promotion.signUpLink}
                          </a>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => removePromotion(promotion.id)}
                          >
                            <i className="fas fa-trash"></i> 
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
              ) : tab === 'Prospect Funnel Stages' ? (
                // Promotions Section
                <div className="bg-light p-4 rounded border">
        <div className="d-flex justify-content-end mb-3 gap-2">
          <button className="btn btn-outline-dark btn-sm" onClick={addStage}>
            <i className="fas fa-plus me-1"></i> Add New Prospect Funnel Stage
          </button>
          <button className="btn btn-success btn-sm">Save</button>
        </div>

        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead className="bg-light border-bottom">
              <tr>
                <th>Name</th>
                <th>Automations</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {stages.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-3">
                    No stages added yet.
                  </td>
                </tr>
              ) : (
                stages.map((stage) => (
                  <tr key={stage.id}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={stage.name}
                        onChange={(e) =>
                          updateStage(stage.id, 'name', e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-info btn-sm mb-2"
                        onClick={() => updateStage(stage.id, 'automation1', 'Automation when Moved Here')}
                      >
                        + Automation when Moved Here
                      </button>
                      <br />
                      <button
                        className="btn btn-outline-info btn-sm"
                        onClick={() => updateStage(stage.id, 'automation2', 'Automation to Move Here')}
                      >
                        + Automation to Move Here
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm">
                        <i className="fas fa-arrow-up"></i>
                      </button>
                      <button className="btn btn-outline-primary btn-sm">
                        <i className="fas fa-arrow-down"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeStage(stage.id)}
                      >
                        <i className="fas fa-trash"></i> 
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
         ) : tab === 'Involvement Types' ? (
            // Promotions Section
            <div className="bg-light p-4 rounded border">
        <div className="d-flex justify-content-end mb-3 gap-2">
          <button className="btn btn-outline-dark btn-sm" onClick={addType}>
            <i className="fas fa-plus me-1"></i> Add New Involvement Type
          </button>
          <button className="btn btn-success btn-sm">Save</button>
        </div>

        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead className="bg-light border-bottom">
              <tr>
                <th>Name</th>
                <th>Sort Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {types.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center text-muted py-3">
                    No involvement types added yet.
                  </td>
                </tr>
              ) : (
                types.map((type) => (
                  <tr key={type.id}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={type.name}
                        onChange={(e) => updateType(type.id, 'name', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={type.sortOrder}
                        onChange={(e) => updateType(type.id, 'sortOrder', e.target.value)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeType(type.id)}
                      >
                        <i className="fas fa-trash"></i> 
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      
 ) : tab === 'Membership Cancel Reasons' ? (
    // Promotions Section
    <div className="bg-light p-4 rounded border">
        <div className="d-flex justify-content-end mb-3 gap-2">
          <button className="btn btn-outline-dark btn-sm" onClick={addReason}>
            <i className="fas fa-plus me-1"></i> Add New Reason
          </button>
          <button className="btn btn-success btn-sm">Save</button>
        </div>

        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead className="bg-light border-bottom">
              <tr>
                <th>Reason</th>
                <th>Controllable</th>
                <th>Member Portal</th>
                <th>Membership Change</th>
                <th>Sort Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reasons.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-3">
                    No reasons added yet.
                  </td>
                </tr>
              ) : (
                reasons.map((reason) => (
                  <tr key={reason.id}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={reason.reason}
                        onChange={(e) => updateReason(reason.id, 'reason', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={reason.controllable}
                        onChange={(e) => updateReason(reason.id, 'controllable', e.target.checked)}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={reason.memberPortal}
                        onChange={(e) => updateReason(reason.id, 'memberPortal', e.target.checked)}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={reason.membershipChange}
                        onChange={(e) => updateReason(reason.id, 'membershipChange', e.target.checked)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={reason.sortOrder}
                        onChange={(e) => updateReason(reason.id, 'sortOrder', e.target.value)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeReason(reason.id)}
                      >
                        <i className="fas fa-trash"></i> 
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
 ) : tab === 'Booking Cancel Reasons' ? (
    // Promotions Section
    <div className="bg-light p-4 rounded border">
        <div className="d-flex justify-content-end mb-3 gap-2">
          <button className="btn btn-outline-dark btn-sm" onClick={addBooking}>
            <i className="fas fa-plus me-1"></i> Add New Reason
          </button>
          <button className="btn btn-success btn-sm">Save</button>
        </div>

        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead className="bg-light border-bottom">
              <tr>
                <th>Reason</th>
                <th>Controllable</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {booking.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center text-muted py-3">
                    No reasons added yet.
                  </td>
                </tr>
              ) : (
                booking.map((reason) => (
                  <tr key={reason.id}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={reason.reason}
                        onChange={(e) => updateBooking(reason.id, 'reason', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={reason.controllable}
                        onChange={(e) =>
                          updateBooking(reason.id, 'controllable', e.target.checked)
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeBooking(reason.id)}
                      >
                        <i className="fas fa-trash"></i> 
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
 ) : tab === 'Prospect Not Interested Reasons' ? (
    // Promotions Section
    <div className="bg-light p-4 rounded border">
        <div className="d-flex justify-content-end mb-3 gap-2">
          <button className="btn btn-outline-dark btn-sm" onClick={addReason}>
            <i className="fas fa-plus me-1"></i> Add New Reason
          </button>
          <button className="btn btn-success btn-sm">Save</button>
        </div>

        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead className="bg-light border-bottom">
              <tr>
                <th>Reason</th>
                <th>Controllable</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reasons.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center text-muted py-3">
                    No reasons added yet.
                  </td>
                </tr>
              ) : (
                reasons.map((reason) => (
                  <tr key={reason.id}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={reason.reason}
                        onChange={(e) => updateReason(reason.id, 'reason', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={reason.controllable}
                        onChange={(e) =>
                          updateReason(reason.id, 'controllable', e.target.checked)
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeReason(reason.id)}
                      >
                        <i className="fas fa-trash"></i> 
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
          ) : (
            // Shared layout for other input types (Text, Dropdown, Checkbox)
            <div className="bg-light p-4 rounded border">
              <div className="d-flex justify-content-end mb-3 gap-2">
                <button className="btn btn-outline-dark btn-sm" onClick={addField}>
                  <i className="fas fa-plus me-1"></i> Add New {tab}
                </button>
                <button className="btn btn-success btn-sm">Save</button>
              </div>

              <div className="table-responsive">
                <table className="table table-borderless mb-0">
                  <thead className="bg-light border-bottom">
                    <tr>
                      <th>Input Name</th>
                      <th>Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fields.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="text-center text-muted py-3">
                          No fields added yet.
                        </td>
                      </tr>
                    ) : (
                      fields.map((field, index) => (
                        <tr key={field.id}>
                          <td>Custom {tab.split(' ')[0]} {index + 1}</td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={field.name}
                              onChange={(e) => updateField(field.id, e.target.value)}
                            />
                          </td>
                          <td>
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => removeField(field.id)}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingClasses;
