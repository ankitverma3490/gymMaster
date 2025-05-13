import { useState } from "react";

export default function GymScheduleCalendar() {
  const [currentWeek, setCurrentWeek] = useState({
    startDate: "Apr 27 2025",
    endDate: "May 3 2025",
  });

  const days = [
    { name: "Sunday", date: "Apr 27 2025" },
    { name: "Monday", date: "Apr 28 2025" },
    { name: "Tuesday", date: "Apr 29 2025" },
    { name: "Wednesday", date: "Apr 30 2025" },
    { name: "Thursday", date: "May 1 2025" },
    { name: "Friday", date: "May 2 2025" },
    { name: "Saturday", date: "May 3 2025" },
  ];

  const facilities = [
    {
      id: 1,
      name: "Reserve Golf Simulator",
      subName: "Golf Simulator",
      timeSlot: "12:00 AM - 12:30 AM",
      color: "bg-white",
    },
    {
      id: 2,
      name: "Reserve Private Studio Algonquin",
      subName: "Reserve Private Studio",
      timeSlot: "12:00 AM - 12:30 AM",
      color: "bg-warning",
    },
    {
      id: 3,
      name: "Reserve Private Studio Fox Lake",
      subName: "Reserve Private Studio- Fox Lake",
      timeSlot: "12:00 AM - 12:30 AM",
      color: "bg-pink",
    },
    {
      id: 4,
      name: "Reserve Private Studio- Panama City Beach",
      subName: "Reserve Private Gym-Panama City Beach",
      timeSlot: "12:00 AM - 12:30 AM",
      color: "bg-warning",
    },
    {
      id: 5,
      name: "Reserve private studio round rock",
      subName: "",
      timeSlot: "",
      color: "bg-info",
    },
  ];

  const navigatePrevWeek = () => {
    // Logic to go to previous week would go here
  };

  const navigateNextWeek = () => {
    // Logic to go to next week would go here
  };

  return (
    <div className="container p-4">
      <div className="">
        {/* Header with title and buttons */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row">
          <h1 className="h3">Gym Schedule</h1>

          {/* Button Group */}
          <div className="d-flex gap-2 mt-3 mt-md-0">
            <button className="btn btn-outline-secondary p-2">
              <i className="fa-solid fa-link"></i>
            </button>
            <button className="btn btn-primary p-2">
              <i className="fa-solid fa-print"></i>
            </button>
            <button className="btn btn-outline-secondary p-2">
              <i className="bi bi-three-dots"></i>
            </button>
          </div>
        </div>

        {/* Week navigation */}
        <div className="d-flex border rounded mb-4">
          <button
            className="btn btn-outline-secondary py-2 px-4"
            onClick={navigatePrevWeek}
          >
            &lt;
          </button>
          <div className="flex-fill text-center py-2">
            <span>
              {currentWeek.startDate} - {currentWeek.endDate}
            </span>
          </div>
          <button
            className="btn btn-outline-secondary py-2 px-4"
            onClick={navigateNextWeek}
          >
            &gt;
          </button>
        </div>

        {/* Calendar grid */}
        <div className="table-responsive">
          <div className="table table-striped">
            {/* Days header */}
            <thead className="thead-dark">
              <tr>
                {days.map((day, index) => (
                  <th key={index} className="text-center">
                    <div>{day.name}</div>
                    <div className="text-muted">{day.date}</div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Schedule grid */}
            <tbody>
              <tr>
                {days.map((day, dayIndex) => (
                  <td key={dayIndex} className="border">
                    {facilities.map((facility, facilityIndex) => (
                      <div
                        key={`${dayIndex}-${facilityIndex}`}
                        className={`p-2 ${facility.color} border-bottom`}
                      >
                        <div className="text-center font-weight-bold">
                          {facility.name}
                        </div>
                        {facility.subName && (
                          <div className="text-center">{facility.subName}</div>
                        )}
                        {facility.timeSlot && (
                          <div className="text-center">{facility.timeSlot}</div>
                        )}
                      </div>
                    ))}
                  </td>
                ))}
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
}
