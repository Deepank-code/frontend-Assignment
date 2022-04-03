import React from "react";

import "./Appoiments.css";

const Appoiments = (props) => {
  console.log(props.data[0]);
  return (
    <div>
      <div className="header_buttons text-center my-3">
        <button className="upcoming-button">UpComming appoiments</button>
        <button className="past-button">Past Appoiments</button>
        <button className="medical-button">Medical Record</button>
      </div>
      <div className="show-appoiments">
        {props.data[0] ? (
          <>
            <div id="appoiments">
              <div className="single-Appoiment">
                <div className="row">
                  <div className="col-lg-3">
                    {props.data[0]["Upcoming Appointments"].Date}
                  </div>
                  <div className="col-lg-3">
                    {props.data[0]["Upcoming Appointments"].Treatment}
                  </div>
                  <div className="col-lg-3">
                    {props.data[0]["Upcoming Appointments"].Dentist}
                  </div>
                  <div className="col-lg-2">
                    {props.data[0]["Upcoming Appointments"].Nurse}
                  </div>
                  <div className="col-lg-1">notes</div>
                </div>
              </div>
            </div>
            <div id="appoiments">
              <div className="single-Appoiment">
                <div className="row">
                  <div className="col-lg-3">30/dec/2001</div>
                  <div className="col-lg-3">Root Cannel Prep</div>
                  <div className="col-lg-3">Drg Adam H</div>
                  <div className="col-lg-2">Jessicamellia</div>
                  <div className="col-lg-1">notes</div>
                </div>
              </div>
            </div>
            <div id="appoiments">
              <div className="single-Appoiment">
                <div className="row">
                  <div className="col-lg-3">30/dec/2001</div>
                  <div className="col-lg-3">Root Cannel Prep</div>
                  <div className="col-lg-3">Drg Adam H</div>
                  <div className="col-lg-2">Jessicamellia</div>
                  <div className="col-lg-1">notes</div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Appoiments;
