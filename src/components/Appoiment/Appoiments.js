import React from "react";

import "./Appoiments.css";

const Appoiments = (props) => {
  console.log(props.data[0]);
  return (
    <div>
      <div className="header_buttons text-center my-3">
        <button className="upcoming-button mx-1">UpComming appoiments</button>
        <button className="past-button  mx-1">Past Appoiments</button>
        <button className="medical-button  mx-1">Medical Record</button>
      </div>
      <header>
        <h6 className="fw-bold my-5 mx-3">Root Cannal Treatment</h6>
      </header>
      <div className="show-appoiments">
        {props.data[0] ? (
          <>
            <div id="appoiments">
              <div className="single-Appoiment d-flex align-items-center">
                <div className="row ">
                  <div className="col-lg-3 ms-3">
                    <h4> {props.data[0]["Upcoming Appointments"].Date}</h4>
                  </div>
                  <div className="col-lg-3 fw-bolder ">
                    {props.data[0]["Upcoming Appointments"].Treatment}
                  </div>
                  <div className="col-lg-2 fw-bolder">
                    {props.data[0]["Upcoming Appointments"].Dentist}
                  </div>
                  <div className="col-lg-2 fw-bolder">
                    {props.data[0]["Upcoming Appointments"].Nurse}
                  </div>
                  <a
                    className="col-lg-1 ms-2 "
                    style={{ textDecoration: "none" }}
                  >
                    notes
                  </a>
                </div>
              </div>
            </div>
            <div id="appoiments">
              <div className="single-Appoiment d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-3  ms-3">
                    <h4>9 Dec'2001</h4>
                  </div>
                  <div className="col-lg-3 fw-bolder">Root Cannel Prep</div>
                  <div className="col-lg-2 fw-bolder">Drg Adam H</div>
                  <div className="col-lg-2 fw-bolder">Jessicamellia</div>
                  <a
                    className="col-lg-1 ms-2 fw-bolder"
                    style={{ textDecoration: "none" }}
                  >
                    notes
                  </a>
                </div>
              </div>
            </div>
            <div id="appoiments">
              <div className="single-Appoiment d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-3  ms-3">
                    <h4>30/dec/2001</h4>
                  </div>
                  <div className="col-lg-3 fw-bolder">Root Cannel Prep</div>
                  <div className="col-lg-2 fw-bolder">Drg Adam H</div>
                  <div className="col-lg-2 fw-bolder">Jessicamellia</div>
                  <a
                    className="col-lg-1 ms-2  fw-bolder"
                    style={{ textDecoration: "none" }}
                  >
                    notes
                  </a>
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
