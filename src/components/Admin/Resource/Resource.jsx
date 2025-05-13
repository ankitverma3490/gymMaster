import React from 'react'

function Resource() {
  return (
    <>
      <section className="gym-blog-section">
  <div className="container">
    <h4 className='mb-3'>Resources</h4>
    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="gym-card">
          <div className="gym-card-img-container">
            <img
              src="data:image/jpeg;base64,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"
              alt="People jogging with health icons"
              className="gym-card-img"
              width="100%"
            />
          </div>
          <div className="gym-card-body">
            <div className="d-flex justify-content-between align-items-center">
              <span className="gym-tag">Gym Marketing</span>
              <span className="gym-date">05/08/2025</span>
            </div>
            <h3 className="gym-card-title">
              50+ Health Club Marketing Ideas to Boost Your Incomes in 2025
            </h3>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="gym-card">
          <div className="gym-card-img-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnndcNQkMkSG4YRaJHJsW6Gq1T76EVZCWl2A&s"
              alt="Person doing weight training"
              className="gym-card-img"
            />
          </div>
          <div className="gym-card-body">
            <div className="d-flex justify-content-between align-items-center">
              <span className="gym-tag">Gym Marketing</span>
              <span className="gym-date">05/08/2025</span>
            </div>
            <h3 className="gym-card-title">
              20 Best Boutique Fitness Studios (Real Examples for Inspiration)
            </h3>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="gym-card">
          <div className="gym-card-img-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvznNf9SBobBPetQeFVYh6nFfXHUfI33DabA&s"
              alt="Grand opening with people"
              className="gym-card-img"
            />
          </div>
          <div className="gym-card-body">
            <div className="d-flex justify-content-between align-items-center">
              <span className="gym-tag">Gym Marketing</span>
              <span className="gym-date">05/06/2025</span>
            </div>
            <h3 className="gym-card-title">
              12 Gym Grand Opening Ideas for Instant Fame in 2025
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="gym-card">
          <div className="gym-card-img-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9FdiR61zeelxBhdN_jXomXSkd1_oLMiS_Q&s"
              alt="People jogging with health icons"
              className="gym-card-img"
              width="100%"
            />
          </div>
          <div className="gym-card-body">
            <div className="d-flex justify-content-between align-items-center">
              <span className="gym-tag">Gym Marketing</span>
              <span className="gym-date">05/08/2025</span>
            </div>
            <h3 className="gym-card-title">
              Gym for Seniors Only: Pros, Cons &amp; 8 Tips for Success
            </h3>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="gym-card">
          <div className="gym-card-img-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKOxXI23zeNlHXB2KCploPmXu78V14PzGzg&s"
              alt="Person doing weight training"
              className="gym-card-img"
            />
          </div>
          <div className="gym-card-body">
            <div className="d-flex justify-content-between align-items-center">
              <span className="gym-tag">Gym Marketing</span>
              <span className="gym-date">05/08/2025</span>
            </div>
            <h3 className="gym-card-title">
              Top 7 Gen Z Gym Trends: Boost Memberships in 2025
            </h3>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="gym-card">
          <div className="gym-card-img-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbXaRdWUID3EDgWROOBWF8pnpqeiVkRcz4g&s"
              alt="Grand opening with people"
              className="gym-card-img"
            />
          </div>
          <div className="gym-card-body">
            <div className="d-flex justify-content-between align-items-center">
              <span className="gym-tag">Gym Marketing</span>
              <span className="gym-date">05/06/2025</span>
            </div>
            <h3 className="gym-card-title">
              Fitness Public Relations: 9 Ways to Build Trust in 2025
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Resource
