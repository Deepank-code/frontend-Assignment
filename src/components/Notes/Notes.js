import React from "react";
import "./Notes.css";
const Notes = () => {
  return (
    <div>
      <header className="d-flex justify-content-around py-3">
        <div className="fw-bolder">Notes</div>
        <a href="#" className="fw-bolder" style={{ textDecoration: "none" }}>
          See all
        </a>
      </header>
      <div id="notesection">
        <div className="px-3 py-4 lh-lg">
          <small className="d-block">
            -This patient is lorem ipsum dolor sit
          </small>
          <small className="d-block">-Lorem ipsum sit dolor</small>
          <small className="d-block">-patient has higher alergic history</small>
          <button
            style={{
              position: "relative",
              top: "70px",
              left: "180px",
              border: "2px solid grey",
              borderRadius: "5px",
              backgroundColor: "#0d6efd",
              color: "white",
              fontSize: "13px",
              padding: "0px 10px",
            }}
          >
            Save note
          </button>
        </div>
      </div>
      <div>
        <p className="notes-bottom fw-bold">Lorem ipsum sit dolor</p>
        <i class="fa-regular fa-user mx-2"></i>
        <small>Drg Mega nadade</small>
        <small className="float-end">20 Nov 2019</small>
      </div>
    </div>
  );
};

export default Notes;
