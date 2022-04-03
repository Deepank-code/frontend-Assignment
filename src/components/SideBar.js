import React, { useState } from "react";
import "./Sidebar.css";
const SideBar = (props) => {
  console.log(props.doctorData[0]);
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <div className="d-flex">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"></svg>

            <span className="fs-4">Zendenta</span>
          </a>
        </div>
        <small className="ms-5 " style={{ color: "gray" }}>
          A Reason for your smile
        </small>
        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16"></svg>
              Overview
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
              Calender
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
              Patient List
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
              Payment information
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                Settings
              </svg>
            </a>
          </li>
        </ul>
        <hr />
        {props.doctorData[0] ? (
          <div className="dropdown mx-2">
            <a
              href="#"
              className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />

              <strong>{props.doctorData[0].name}</strong>
            </a>

            <ul
              className="dropdown-menu text-small shadow"
              aria-labelledby="dropdownUser2"
              style={{}}
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
            <small className="mx-5 my-0">
              {props.doctorData[0].specification}
            </small>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
