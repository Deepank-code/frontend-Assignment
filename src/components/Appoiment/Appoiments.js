import React from "react";

import "./Appoiments.css";

const Appoiments = () => {
  return (
    <div>
      <div className="header_buttons text-center my-3">
        <button className="upcoming-button">UpComming appoiments</button>
        <button className="past-button">Past Appoiments</button>
        <button className="medical-button">Medical Record</button>
        <div id="appoiments">
          <div class="single-Appoiment"></div>
        </div>
      </div>
      <div className="show-appoiments"></div>
    </div>
  );
};

export default Appoiments;
