import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
    console.log('navbar - rendered');
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Total Count{" "}
          <span className="badge badge-pill badge-second">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
