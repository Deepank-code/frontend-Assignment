import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container ">
      <nav className="navbar navbar-light bg-light py-3 ">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <i class="fa-regular fa-user fa-lg"></i>
            <a className="navbar-brand mx-3 fw-bolder">Daine Cooper</a>
          </div>
          <form className="d-flex  align-items-center">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success rounded-circle"
              type="submit"
            >
              +
            </button>
            <i className="fa-regular fa-bell fa-xl mx-3"></i>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
