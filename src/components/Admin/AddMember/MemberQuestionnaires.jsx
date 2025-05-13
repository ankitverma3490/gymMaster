import React, { useState } from "react";

const MemberQuestionnaires = () => {
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState("");

  const handleSelectChange = (e) => {
    setSelectedQuestionnaire(e.target.value);
  };

  const handleSave = () => {
    console.log("Selected Questionnaire:", selectedQuestionnaire);
  };

  const [selectedImage, setSelectedImage] = useState(null); // To store the uploaded image

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the file from input
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the image file
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the image as the state when file is loaded
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };


  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Side: Member Profile */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <img
                src="https://i.ibb.co/ZRPwCLSB/dummy2.jpg"
                alt="Profile"
                className="rounded-circle mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h5 className="card-title">John</h5>
              <p className="card-text">O</p>
              <button
                className="btn btn-outline-secondary mb-2"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Add
              </button>

              {/* Hidden file input */}
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: "none" }} // Hide the input
                onChange={handleImageUpload} // Trigger image upload handler
              />
              <div className="row">
                <div className="col-md-6"><button className="btn  w-100 mb-2" style={{backgroundColor:"#2b689c" , color:"white"}}>Check-in</button></div>
              <div className="col-md-6"><button className="btn w-100 mb-2" style={{backgroundColor:"#2b689c" , color:"white"}}>Visit History</button></div>
              <div className="col-md-6"><button className="btn w-100 mb-2" style={{backgroundColor:"#2b689c" , color:"white"}}>Booking</button></div>
              <div className="col-md-6"> <button className="btn w-100 mb-2" style={{backgroundColor:"#2b689c" , color:"white"}}>Purchase</button></div>
              
              
              
             
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h6>Account</h6>
              <p>Member Owes: $0.00</p>
              <p>Next Billed: Unable to bill - No Default Billing Method Selected</p>
              <div className="accordion" id="waiversAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="waiverHeading">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#waiverCollapse"
                      aria-expanded="true"
                      aria-controls="waiverCollapse"
                    >
                      Waivers/Terms and Conditions
                    </button>
                  </h2>
                  <div
                    id="waiverCollapse"
                    className="accordion-collapse collapse show"
                    aria-labelledby="waiverHeading"
                    data-bs-parent="#waiversAccordion"
                  >
                    <div className="accordion-body">
                      Not Signed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Member Questionnaires */}
        <div className="col-12 col-md-8">
          <div className="card p-4">
            <h4>Member Questionnaires</h4>
            <div className="mb-3">
              <label htmlFor="questionnaireSelect" className="form-label">
                Questionnaires Available:
              </label>
              <select
                id="questionnaireSelect"
                className="form-select"
                value={selectedQuestionnaire}
                onChange={handleSelectChange}
              >
                <option value="">Please Select</option>
                <option value="questionnaire1">Questionnaire 1</option>
                <option value="questionnaire2">Questionnaire 2</option>
                <option value="questionnaire3">Questionnaire 3</option>
              </select>
            </div>
            <button
              className="btn btn-success w-100"
              onClick={handleSave}
              disabled={!selectedQuestionnaire}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberQuestionnaires;
