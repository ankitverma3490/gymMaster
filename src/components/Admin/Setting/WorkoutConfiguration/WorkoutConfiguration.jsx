import React from "react";
import "./Workout.css";

const WorkoutConfiguration = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mb-4 align-items-center">
          <h2 className="mb-0">Exercise Library</h2>
          <div>
            <button className="btn exlib__action-btn mt-2" type="button">
              <i className="bi bi-plus" /> Add New Exercise
            </button>
            <button className="btn exlib__action-btn ms-2 mt-2" type="button">
              <i className="bi bi-folder" /> Manage Libraries
            </button>
            <button className="btn exlib__action-btn ms-2 mt-2" type="button">
              <i className="bi bi-gear" /> Exercise Settings
            </button>
          </div>
        </div>
        <div className="exlib__search-container">
          <div className="exlib__search-bar d-flex flex-column flex-md-row">
            <input
              type="text"
              className="exlib__search-input"
              placeholder="Search Exercises"
            />
            <button className="exlib__sort-button" id="filterToggle">
              ≡
            </button>
            <button className="exlib__search-button">Search</button>
          </div>
          <div className="exlib__filter-container" id="filterContainer">
            <div className="exlib__filter-section">
              <label className="exlib__filter-label">Category</label>
              <select className="exlib__select">
                <option>All Categories</option>
                <option>Machine</option>
                <option>Free Weight</option>
                <option>Barbell</option>
                <option>Body Weight</option>
                <option>Cardio</option>
                <option>Stretch</option>
                <option>Other</option>
              </select>
            </div>
            <div className="exlib__filter-section">
              <label className="exlib__filter-label">Unit Type</label>
              <select className="exlib__select">
                <option>All Unit Types</option>
                <option>Repetitions (Reps + AMRAP)</option>
                <option>Seconds (Secs + Mins)</option>
                <option>Miles (mi)</option>
                <option>Intensity</option>
                <option>Pounds (lb)</option>
              </select>
            </div>
            <div className="exlib__filter-section">
              <label className="exlib__filter-label">Equipment</label>
              <select className="exlib__select">
                <option>All Equipment</option>
                <option>Stretch Band</option>
                <option>Associated Machine</option>
                <option>Incline Bench</option>
                <option>Kettlebell</option>
                <option>Swiss Ball</option>
                <option>Pull-up Bar</option>
                <option>Associated Gear</option>
                <option>SZ-Bar</option>
                <option>Bodyweight</option>
                <option>Bench</option>
                <option>Dumbbells</option>
              </select>
            </div>
            <div className="exlib__filter-section">
              <label className="exlib__filter-label">Muscle Groups</label>
              <select className="exlib__select">
                <option>All Muscle Groups</option>
                <option>Anterior deltoid</option>
                <option>Pectoralis major</option>
                <option>Triceps brachii</option>
                <option>Biceps brachii</option>
                <option>Brachialis</option>
                <option>Obliquus externus abdominus</option>
                <option>Quadriceps femoris</option>
                <option>Rectus abdominis</option>
                <option>Serratus anterior</option>
                <option>Biceps femoris</option>
                <option>Gastrocnemius</option>
                <option>Gluteus Maximus</option>
                <option>Latissmus dorsi</option>
                <option>Soleus</option>
                <option>Trapezius</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/G30rCnxX/image1.png"
                  alt="Shrugs, Barbells"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Shrugs, Barbells</div>
                <div className="exlib__divider" />
                <p className="exlib__details" />
                <p className="exlib__details" />
                <p className="exlib__details">
                  <span className="exlib__highlight" />
                  <span className="exlib__highlight" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/VWvBpWbV/image2.png" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Cool Down Walk </div>
                <div className="exlib__divider" />
                <p className="exlib__details" />
                <p className="exlib__details" />
                <p className="exlib__details">
                  <span className="exlib__highlight" />
                  <span className="exlib__highlight" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/0Rc1SRSp/image3.png"
                  alt="Jumping Jacks"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Jumping Jacks</div>
                <div className="exlib__divider" />
                <p className="exlib__details" />
                <p className="exlib__details" />
                <p className="exlib__details">
                  <span className="exlib__highlight" />
                  <span className="exlib__highlight" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/XrgBzbHy/image4.png" alt="" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Stair Master</div>
                <div className="exlib__divider" />
                <p className="exlib__details" />
                <p className="exlib__details" />
                <p className="exlib__details">
                  <span className="exlib__highlight" />
                  <span className="exlib__highlight" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/spQbJYX2/image5.png"
                  alt="Chin-ups"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Chin-ups</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Body Weight</p>
                <p className="exlib__details">Pull-up Bar</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps brachii</span> •
                  <span className="exlib__highlight">Latissmus dorsi</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/99yDZnYB/image6.png"
                  alt="Crunches"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Crunches</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Body Weight</p>
                <p className="exlib__details">Bench</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Rectus abdominis</span> •
                  <span className="exlib__highlight">Serratus ant...</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/Q3h5Zx6q/image7.png" alt="Dips" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Dips</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Body Weight</p>
                <p className="exlib__details">Bodyweight</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Pectoralls major</span> •
                  <span className="exlib__highlight">Triceps brachii</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/CpWfjJMn/image8.png"
                  alt="Hyperextension"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Hyperextension</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Body Weight</p>
                <p className="exlib__details">Bench</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">
                    Obliquus externus abdominis
                  </span>{" "}
                  •<span className="exlib__highlight">Latissmus dorsi</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/cSw2zfVJ/image9.png"
                  alt="Leg Raises, Lying"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Leg Raises, Lying</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Body Weight</p>
                <p className="exlib__details">Bodyweight</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Rectus abdominis</span> •
                  <span className="exlib__highlight">Serratus ant...</span>
                </p>
              </div>
            </div>
          </div>
          {/* Additional cards would follow the same pattern */}
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/BHDJWXPz/image10.png"
                  alt="Negative Crunches"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Negative Crunches</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Body Weight</p>
                <p className="exlib__details">Incline Bench</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Rectus abdominis</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/nq8LH3LL/image13.png"
                  alt="Push Ups"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Bench Press</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">v</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Anterior deltoid</span> •
                  <span className="exlib__highlight">Pectoralis maj...</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/tPpK40sb/image14.png"
                  alt="Side Crunch"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Bench Press Narrow Grip</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">Bench</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">
                    Obliquus externus abdominis
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/Kdzg5yw/image15.png"
                  alt="Shrugs, Barbells"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Bent Over Rowing</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details" />
                <p className="exlib__details">
                  <span className="exlib__highlight">Anterior deltoid</span> •
                  <span className="exlib__highlight">Pectoralis maj...</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/Psfz4v4w/image16.png" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Bent Over Rowing Reverse </div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">Bench</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Anterior deltoid</span> •
                  <span className="exlib__highlight">Pectoralis maj...</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/wr388xZ7/image17.png"
                  alt="Jumping Jacks"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Biceps Curls with Barbell</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details" />
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps Brachil </span> •
                  <span className="exlib__highlight">Brachialis</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/nsGjB9BC/image18.png" alt="" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Decline Bench Press Barbell</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell </p>
                <p className="exlib__details">Incline Bench</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Pectoralis major</span>
                  <span className="exlib__highlight" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/Jw2ksPHr/image19.png"
                  alt="Chin-ups"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">French Press (skullcrusher)</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">Bench 5z bar</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Triceps brachil</span> •
                  <span className="exlib__highlight"></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/q34Zgp2N/image20.png"
                  alt="Crunches"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Front Squats</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details"></p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Rectus abdominis</span> •
                  <span className="exlib__highlight">Glutes Max</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/s9NMQ62L/image21.png" alt="Dips" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Good Morning</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">Biceps feemoris</p>
                <p className="exlib__details">
                  <span className="exlib__highlight"></span> •
                  <span className="exlib__highlight"></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/67gZ1VQ1/image22.png"
                  alt="Hyperextension"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Hammercurls</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">Dumbbells</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps brachil</span> •
                  <span className="exlib__highlight"></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/67gZ1VQ1/image22.png"
                  alt="Leg Raises, Lying"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Incline Bench Press</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">Bench</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Pectoralis major</span> •
                  <span className="exlib__highlight">Triceps Brachil</span>
                </p>
              </div>
            </div>
          </div>
          {/* Additional cards would follow the same pattern */}
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/Dg5WPnyT/image24.png"
                  alt="Negative Crunches"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Lateral Raises</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">Dumbbells</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Abterior Deltoid</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/vxtZ4yw9/image25.png"
                  alt="Push Ups"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Preacher Curls</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">5z Bar</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps brachils</span> •
                  <span className="exlib__highlight"></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/ccm6RvdX/image26.png"
                  alt="Side Crunch"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Rack Deadlift</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">Associated Machine</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps brachil .</span>
                  <span className="exlib__highlight">Gluteus Maximus</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/ZpVMKFxG/image27.png"
                  alt="Shrugs, Barbells"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Shoulder Press , Barbell</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details">Bench</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Anterior Deltoid </span>
                  <span className="exlib__highlight" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/zV8859QX/image28.png" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Squats </div>
                <div className="exlib__divider" />
                <p className="exlib__details">Barbell</p>
                <p className="exlib__details" />
                <p className="exlib__details">
                  <span className="exlib__highlight">Quadriceps femoris</span>
                  <span className="exlib__highlight">. Gluteus M...</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/HTWW10hJ/image30.png"
                  alt="Jumping Jacks"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">BenchPress Dumbbells</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Free Weight</p>
                <p className="exlib__details">Dumbells</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Quadriceps femoris</span>
                  <span className="exlib__highlight">Pectoralis Maj...</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/nq1KGXkk/image31.png" alt="" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Biceps Curl With Dumbbelll</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Free Weight</p>
                <p className="exlib__details">Dumbells</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps brachil</span>
                  <span className="exlib__highlight">Brachialis</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/tps3rfps/image32.png"
                  alt="Chin-ups"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Dips Between Two Benches</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Free Weight</p>
                <p className="exlib__details">Bench</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Teiceps brachil</span> •
                  <span className="exlib__highlight"></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/Z0VyLZ0/image33.png"
                  alt="Crunches"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Dumbbells Lunges Walking </div>
                <div className="exlib__divider" />
                <p className="exlib__details">Free Weight</p>
                <p className="exlib__details">Dumbbells</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Quadriceps femoris</span> •
                  <span className="exlib__highlight">.Gluteus M...</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/PshssP9G/image34.png" alt="Dips" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Lawm Mower</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Free Weight</p>
                <p className="exlib__details">Dumbbells</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Trapezius</span> •
                  <span className="exlib__highlight"></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/fLHW9Nt/image35.png"
                  alt="Hyperextension"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Shoulder Press Dumbbells</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Free Weight</p>
                <p className="exlib__details">Bench . Dumbbells</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Anterior deltoid</span> •
                  <span className="exlib__highlight"></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/3yN2Qqkp/image36.png"
                  alt="Leg Raises, Lying"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Shrugs , Dumbbells</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Free Weight</p>
                <p className="exlib__details">Dumbbells</p>
                <p className="exlib__details">
                  <span className="exlib__highlight"> Anterior deltoid</span> •
                  <span className="exlib__highlight"></span>
                </p>
              </div>
            </div>
          </div>
          {/* Additional cards would follow the same pattern */}
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/217MP82G/image37.png"
                  alt="Negative Crunches"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Biceps Curl With cable</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Machine</p>
                <p className="exlib__details">Associated Machine</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps brachil</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/SXzsqCQS/image38.png"
                  alt="Push Ups"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Butterfly</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Machine</p>
                <p className="exlib__details">Associated Machine</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Anterior deltoid</span> •
                  <span className="exlib__highlight">Pectoralis major...</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/3YfsNBMN/image39.png"
                  alt="Side Crunch"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Fly with cable</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Machine</p>
                <p className="exlib__details">Associated Machine</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Pectoralis major</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/fVhcXzhN/image40.png"
                  alt="Shrugs, Barbells"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Hammercurl On cable</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Machine</p>
                <p className="exlib__details">Associated Machine</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps brachil </span>
                  <span className="exlib__highlight">Brachialis </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/nqdB7MLc/image41.png" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Leg Curl (laying) </div>
                <div className="exlib__divider" />
                <p className="exlib__details">Machine</p>
                <p className="exlib__details">Associated Machine</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps femoris </span>
                  <span className="exlib__highlight" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/sdL0hj4z/image42.png"
                  alt="Jumping Jacks"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Legs Curl (Sitting)</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Machine</p>
                <p className="exlib__details">Associated Machine</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps femoris </span>
                  <span className="exlib__highlight" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img src="https://i.ibb.co/m5VbMCRd/image43.png" alt="" />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Legs Curl Standing</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Machine</p>
                <p className="exlib__details">Associated Machine</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Biceps femoris </span>
                  <span className="exlib__highlight" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/twSMv3q5/image44.png"
                  alt="Chin-ups"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Rowing T-bar</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Machine</p>
                <p className="exlib__details">Associated Machine</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Anterior deltoid</span>
                  <span className="exlib__highlight">Biceps brachii</span> •
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="exlib__card shadow-sm">
              <div className="exlib__image">
                <img
                  src="https://i.ibb.co/1tx5Dqdk/image45.png"
                  alt="Crunches"
                />
              </div>
              <div className="exlib__content">
                <div className="exlib__title">Shoulder Press on Machine</div>
                <div className="exlib__divider" />
                <p className="exlib__details">Machine</p>
                <p className="exlib__details">Associated Machine</p>
                <p className="exlib__details">
                  <span className="exlib__highlight">Anterior Deltoid</span> •
                  <span className="exlib__highlight"></span>
                </p>
              </div>
            </div>
          </div>

          {/* Additional cards would follow the same pattern */}
        </div>
        <div>
          <p>
            Workouts by Gymmaster is licensed under a Creative Commons
            Attribution 4.0 International License. Based on a work by
            https://wger.de/en.
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkoutConfiguration;
