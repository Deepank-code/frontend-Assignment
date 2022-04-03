import React, { useEffect } from "react";
import Navbar from "./Navbar";

import Appoiments from "./Appoiment/Appoiments";
import "./Main.css";
const Main = (props) => {
  // props.data[0]["Phone Number"] = props.data[0]["phone"];
  // delete props.data[0]["Phone Number"];
  console.log(props);

  return (
    <div className="main-component">
      <Navbar />
      <div class="container">
        {props.data[0] ? (
          <>
            <div className="row my-3">
              <div className="patient-info col-lg-3 ms-5 text-center">
                <img
                  src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg"
                  width="90px"
                  height="90px"
                />
                <h5>{props.data[0].name}</h5>
                <p>diane.Cooper@example.com</p>
                <div className="d-flex mx-4">
                  <div className="mx-3">
                    <h3>{props.data[0].Past}</h3>
                    <p>Post</p>
                  </div>
                  <div className="mx-3">
                    <h3>{props.data[0].Upcoming}</h3>
                    <p>Upcoming</p>
                  </div>
                </div>
                <button>Send message </button>
              </div>
              <div className="patient-detail col-lg-4 ms-1">
                <div
                  className="container"
                  style={{ backgroundColor: "white", lineHeight: "20px" }}
                >
                  <div className="row text-center">
                    <div className="col-lg-4">
                      Gender
                      <p>{props.data[0].Gender}</p>
                    </div>
                    <div className="col-lg-4">
                      Birthday
                      <p>{props.data[0].Birthday}</p>
                    </div>
                    <div className="col-lg-4">
                      Phone Number
                      <p>{props.data[0]["Phone Number"]}</p>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-lg-4">
                      Street Address
                      <p>{props.data[0]["Street Address"]}</p>
                    </div>
                    <div className="col-lg-4">
                      City
                      <p>Cilapeo</p>
                    </div>
                    <div className="col-lg-4">
                      ZIP Code
                      <p>{props.data[0]["ZIP Code"]}</p>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-lg-4">
                      Member Status
                      <p>{props.data[0]["Member Status"]}</p>
                    </div>
                    <div className="col-lg-4">
                      Register Date
                      <p>{props.data[0]["Register Date"]}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* notes section */}
              <div className=" patient-notes col-lg-5 mx-3">col-sm-4</div>
            </div>
            <div className="row my-3">
              {/* appoiments section */}
              <div className="appoiments col-lg-7 ms-5">
                {/* <Appoiments /> */}
                <div className="header_buttons text-center my-3">
                  <button className="upcoming-button">
                    UpComming appoiments
                  </button>
                  <button className="past-button">Past Appoiments</button>
                  <button className="medical-button">Medical Record</button>
                  <div id="appoiments">
                    <div class="single-Appoiment"></div>
                  </div>
                </div>
                <div className="show-appoiments"></div>
              </div>
              <div className="file col-lg-5 mx-3">col-sm-4</div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
