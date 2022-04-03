import React from "react";
import "./Files.css";
const Files = (props) => {
  function handlechange() {
    console.log("this is my file");
  }
  return (
    <div>
      <header className="d-flex justify-content-between mx-2 my-4">
        <h5 className="fw-bolder">Files/Documents</h5>
        {/* 
        <input type="file" onChange={handlechange} /> */}
        <a href="#" className="fw-bolder" style={{ textDecoration: "none" }}>
          Add Files
        </a>
      </header>
      <div className="all-files text-center">
        <div
          className="single-file d-flex justify-content-between align-items-center my-3"
          style={{ border: "2px solid grey", borderRadius: "5px" }}
        >
          <div style={{ color: "grey" }}>
            <i class="fa-solid fa-file-lines fa-lg px-2"></i>
            <small>Check up Result pdf</small>
          </div>
          <div className="me-3 delete">
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </div>
        <div
          className="single-file d-flex justify-content-between  align-items-center my-3"
          style={{ border: "2px solid grey", borderRadius: "5px" }}
        >
          <div style={{ color: "grey" }}>
            <i class="fa-solid fa-file-lines fa-lg px-2"></i>
            <small>Dental X-ray Results pdf</small>
          </div>
          <div className="me-3 delete">
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </div>
        <div
          className="single-file d-flex justify-content-between my-3 align-items-center "
          style={{ border: "2px solid grey", borderRadius: "5px" }}
        >
          <div style={{ color: "grey" }}>
            <i class="fa-solid fa-file-lines fa-lg px-2"></i>
            <small>Medical prescription.pdf</small>
          </div>
          <div className="me-3 delete">
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </div>
        <div
          className="single-file d-flex justify-content-between my-3 align-items-center "
          style={{ border: "2px solid grey", borderRadius: "5px" }}
        >
          <div style={{ color: "grey" }}>
            <i class="fa-solid fa-file-lines fa-lg px-2"></i>
            <small>Dental x-ray Result. pdf</small>
          </div>
          <div className="me-3 delete">
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
