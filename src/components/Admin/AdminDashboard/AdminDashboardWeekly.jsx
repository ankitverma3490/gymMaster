import React from "react";

const AdminDashboardWeekly = () => {
  return (
    <>
      <div className="golf-schedule-container">
        {/* Header with navigation buttons */}
        <div className="golf-header-section">
          <button className="golf-nav-btn">
            <i className="bi bi-chevron-left" />
          </button>
          <div className="golf-title-section">
            <h2>Weekly Schedule</h2>
            <p>Apr 27 2025 - May 03 2025</p>
          </div>
          <button className="golf-nav-btn">
            <i className="bi bi-chevron-right" />
          </button>
        </div>
        {/* Search bar */}
        <div className="golf-search-section">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="button">
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
        {/* Schedule content */}
        <div className="golf-schedule-content">
          {/* Sunday header */}
          <div className="golf-day-header">Sunday Apr 27 2025</div>
          {/* Monday header */}
          <div className="golf-day-header">Monday Apr 28 2025</div>
          {/* Time slots */}
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">12:00 - 12:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">12:30 - 01:00 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">01:00 - 01:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">01:30 - 02:00 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">02:00 - 02:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">02:30 - 03:00 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">03:00 - 03:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">03:30 - 04:00 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">04:00 - 04:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">04:30 - 05:00 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
          <div className="golf-time-slot">
            <div className="row align-items-center">
              <div className="col-3 golf-time-col">05:00 - 05:30 AM</div>
              <div className="col golf-activity-col">
                Reserve Golf Simulator
              </div>
              <div className="col-2 golf-info-col">
                <div>
                  <i className="bi bi-person golf-person-icon" /> 0/1
                </div>
                <div>
                  <i className="bi bi-geo-alt golf-location-icon" /> Golf
                  Simulator
                </div>
              </div>
              <div className="col-1 golf-icon-col">
                <span className="golf-brand-text">GOLF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardWeekly;
