import React, { useEffect } from "react";
import Navbar from "./Navbar";

import Appoiments from "./Appoiment/Appoiments";
import "./Main.css";
import Files from "./Files/Files";
import Notes from "./Notes/Notes";
const Main = (props) => {
  // props.data[0]["Phone Number"] = props.data[0]["phone"];
  // delete props.data[0]["Phone Number"];
  console.log(props);

  return (
    <div className="main-component">
      <Navbar />
      <header>
        <h5 className="fw-bolder ms-5 my-3" style={{ color: "#0d6efd" }}>
          Patient List<span style={{ color: "black" }}> &gt; Daine Cooper</span>
        </h5>
      </header>
      <div class="container">
        {props.data[0] ? (
          <>
            <div className="row my-3">
              <div className="patient-info col-lg-3 ms-5 text-center py-5 lh-lg">
                <img
                  src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg"
                  width="90px"
                  height="90px"
                />
                <h5 className="fw-bolder">{props.data[0].name}</h5>
                <p className="fw-bold" style={{ color: "grey" }}>
                  <small>diane.Cooper@example.com</small>
                </p>
                <div className="d-flex mx-4">
                  <div className="mx-3">
                    <h3>{props.data[0].Past}</h3>
                    <small className="fw-bolder">Post</small>
                  </div>
                  <div className="mx-3">
                    <h3 className="fw-bolder">{props.data[0].Upcoming}</h3>
                    <small className="fw-bolder">Upcoming</small>
                  </div>
                </div>
                <button
                  style={{
                    border: "2px solid grey",
                    padding: "0px 40px",
                    borderRadius: "5px",
                    marginTop: "10px",
                    backgroundColor: "white",
                  }}
                >
                  Send message
                </button>
              </div>
              <div className="patient-detail col-lg-4 ms-1">
                <div
                  className="container"
                  style={{ backgroundColor: "white", lineHeight: "20px" }}
                >
                  <div className="row text-center py-4">
                    <div className="col-lg-4">
                      <p className="fw-bold" style={{ color: "grey" }}>
                        Gender
                      </p>
                      <p>{props.data[0].Gender}</p>
                    </div>
                    <div className="col-lg-4">
                      <p className="fw-bold" style={{ color: "grey" }}>
                        Birthday
                      </p>
                      <p>{props.data[0].Birthday}</p>
                    </div>
                    <div className="col-lg-4">
                      <p className="fw-bold" style={{ color: "grey" }}>
                        Phone Number
                      </p>
                      <p>{props.data[0]["Phone Number"]}</p>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-lg-4">
                      <p className="fw-bold" style={{ color: "grey" }}>
                        Street Address
                      </p>
                      <p>{props.data[0]["Street Address"]}</p>
                    </div>
                    <div className="col-lg-4">
                      <p className="fw-bold" style={{ color: "grey" }}>
                        City
                      </p>
                      <p>Cilapeo</p>
                    </div>
                    <div className="col-lg-4">
                      <p className="fw-bold" style={{ color: "grey" }}>
                        ZIP Code
                      </p>
                      <p>{props.data[0]["ZIP Code"]}</p>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-lg-4">
                      <p className="fw-bold" style={{ color: "grey" }}>
                        Member Status
                      </p>
                      <p>{props.data[0]["Member Status"]}</p>
                    </div>
                    <div className="col-lg-4">
                      <p className="fw-bold" style={{ color: "grey" }}>
                        Register Date
                      </p>
                      <p>{props.data[0]["Register Date"]}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* notes section */}
              <div className=" patient-notes col-lg-5 mx-3">
                <Notes />
              </div>
            </div>
            <div className="row my-3">
              {/* appoiments section */}
              <div className="appoiments col-lg-7 ms-5">
                <Appoiments data={props.appoimentdata} />
                {/* <div className="header_buttons text-center my-3">
                  <button className="upcoming-button">
                    UpComming appoiments
                  </button>
                  <button className="past-button">Past Appoiments</button>
                  <button className="medical-button">Medical Record</button>
                  <div id="appoiments">
                    <div class="single-Appoiment"></div>
                  </div>
                </div>
                <div className="show-appoiments"></div> */}
              </div>
              <div className="file col-lg-5 mx-3">
                <Files />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
