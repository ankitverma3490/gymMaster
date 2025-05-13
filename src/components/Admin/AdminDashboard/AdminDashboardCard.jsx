import React from "react";

const AdminDashboardCard = () => {
  return (
    <>
      <>
        {/* Payments Received Card */}
        <div className="col-md-6 mb-4">
          <div className="mb-card mb-red-card">
            <div className="mb-card-title">Cancellations This Month</div>
            <div className="mb-value">
              2 <span className="fs-6">100%*↑</span>
            </div>
            <div className="mb-footnote text-dark">
              * Members canceled between Apr 1 and Apr 30
            </div>
            <div className="progress mt-2">
              <div
                className="progress-bar bg-secondary d-flex align-items-end"
                role="progressbar"
                style={{ width: "65%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                1 Uncontrollable Cancellations
              </div>
            </div>
          </div>
        </div>
        {/* New Members Card */}
        <div className="col-md-6 mb-4">
          <div className="mb-card">
            <div className="mb-card-title">Visits Today</div>
            <div className="mb-value">0</div>
            <div className="mb-footnote">
              * Successful visits (excluding staff) so far today compared with
              the same time on Apr 21
            </div>
          </div>
        </div>
        {/* Payments Received Card */}
        <div className="col-md-6 mb-4">
          <div className="mb-card mb-red-card">
            <div className="mb-card-title">Member Visits This Month</div>
            <div className="mb-value">
              36 <span className="fs-6">-30%*↓</span>
            </div>
            <div className="mb-footnote text-dark">
              * Visits from Apr 1 compared with Mar 1 to Mar 28
            </div>
          </div>
        </div>
        {/* Payments Received Card */}
        <div className="col-md-6 mb-4">
          <div className="mb-card mb-red-card">
            <div className="mb-card-title">Bookings This Month</div>
            <div className="mb-value">
              98<span className="fs-6">-43%↓</span>
            </div>
            <div className="mb-footnote text-dark">
              * Bookings since Apr 1 compared with Mar 1 to Mar 28
            </div>
          </div>
        </div>
        {/* Failed Billing Card */}
        <div className="col-md-6 mb-4">
          <div className="mb-card">
            <div className="mb-card-title">Online Sign-ups This Month</div>
            <div className="mb-value">0</div>
            <div className="mb-footnote">
              * Joined since Apr 1 compared with Mar 1 to Mar 28
            </div>
          </div>
        </div>
        {/* New Members Card */}
        <div className="col-md-6 mb-4">
          <div className="mb-card">
            <div className="mb-card-title">My New Members</div>
            <div className="mb-value">0</div>
            <div className="mb-footnote">
              * Joined since Apr 1 compared with Mar 1 to Mar 28
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-secondary d-flex align-items-center"
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                414
              </div>
            </div>
          </div>
        </div>
        {/* Payments Received Card */}
        <div className="col-md-6 mb-4">
          <div className="mb-card mb-red-card">
            <div className="mb-card-title">Member Monthly Churn</div>
            <div className="mb-value">
              12.5% <span className="fs-6">212%*↑</span>
            </div>
            <div className="mb-footnote text-dark">
              * Churn rate since Mar 28 compared with Feb 28 to Mar 28
            </div>
          </div>
        </div>
        {/* Payments Received Card */}
        <div className="col-md-6 mb-4">
          <div className="mb-card mb-red-card">
            <div className="mb-card-title">New Prospects This Month</div>
            <div className="mb-value">0</div>
            <div className="mb-footnote text-dark">
              * Created since Apr 1 compared with Mar 1 to Mar 28
            </div>
          </div>
        </div>
        {/* Failed Billing Card */}
        <div className="col-md-6 mb-4">
          <div className="mb-card">
            <div className="mb-card-title">All Prospects</div>
            <div className="mb-value">264</div>
          </div>
        </div>
        <div className="col-md-6" />
      </>
    </>
  );
};

export default AdminDashboardCard;
