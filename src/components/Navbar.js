import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container ">
      <nav className="navbar navbar-light bg-light py-3 ">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand mx-5">Daine Cooper</a>
          <form className="d-flex">
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
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
