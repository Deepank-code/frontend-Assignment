import React from "react";
import "./Notes.css";
const Notes = () => {
  return (
    <div>
      <header className="d-flex justify-content-around py-3">
        <div>Notes</div>
        <a href="#" className="fw-bolder" style={{ textDecoration: "none" }}>
          See all
        </a>
      </header>
      <div id="notesection">
        <div className="px-4 lh-lg">
          <small className="d-block">
            -This patient is lorem ipsum dolor sit
          </small>
          <small className="d-block">-Lorem ipsum sit dolor</small>
          <small className="d-block">-patient has higher alergic history</small>
          <button
            className=""
            style={{
              position: "relative",
              top: "70px",
              left: "170px",
              border: "2px solid grey",
              borderRadius: "8px",
            }}
          >
            Save note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
