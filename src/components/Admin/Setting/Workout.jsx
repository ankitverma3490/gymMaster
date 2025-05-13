import React, { useState } from "react";

function Workout() {
    const [orientation, setOrientation] = useState("Landscape");
      const [pageSize, setPageSize] = useState("A4");
    
  return (
    <>
      <div className="row">
        <h5 className="mb-4">Workout </h5>
        <div className="col-lg-12">
          <div className="card p-4 bg-light">
            {/* Workout PDF Page Orientation */}
            <div className="mb-4">
              <label htmlFor="pdfOrientation" className="form-label">
                Workout PDF page orientation
              </label>
              <select
                id="pdfOrientation"
                className="form-select"
                value={orientation}
                onChange={(e) => setOrientation(e.target.value)}
              >
                <option value="Landscape">Landscape</option>
                <option value="Portrait">Portrait</option>
              </select>
              <small className="form-text text-muted">
                Choose page orientation when rendering PDF of workout program.
              </small>
            </div>

            {/* Workout PDF Page Size */}
            <div className="mb-4">
              <label htmlFor="pdfPageSize" className="form-label">
                Workout PDF page size
              </label>
              <select
                id="pdfPageSize"
                className="form-select"
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
              >
                <option value="A4">A4</option>
                <option value="A3">A3</option>
                <option value="Letter">Letter</option>
                <option value="Legal">Legal</option>
              </select>
              <small className="form-text text-muted">
                Choose page size to use when rendering PDF of workout program.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workout;
