import React, { useState, useEffect } from "react";
import "./index.css";

function Navbar() {

  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [portfolioRouteActive, setPortfolioRouteActive] = useState(false);
  const [aboutRouteActive, setAboutRouteActive] = useState(false);
  const [contactRouteActive, setContactRouteActive] = useState(false);

  function handleDropdown() {
    const newDropdownState = (!dropdownToggle)
    setDropdownToggle(newDropdownState);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top one-edge-shadow">
      <div className="navbar-brand" >Ian Sachs</div>
      <button className="navbar-toggler"
        onClick={handleDropdown}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className=
      {
        !dropdownToggle
        ? "collapse navbar-collapse"
        : "navbar-collapse"
        } id="navbarNav">
        <ul className="navbar-nav">
          
          <li className={
            aboutRouteActive
              ? "nav-item active"
              : "nav-item"
          }>
            <a className="nav-link" href="#About">About Me <span className="sr-only">Search</span></a>
          </li>

          <li className={
            portfolioRouteActive
              ? "nav-item active"
              : "nav-item"
          }>
            <a className="nav-link" href="/Portfolio">Portfolio</a>
          </li>

          <li className={
            contactRouteActive
              ? "nav-item active"
              : "nav-item"
          }>
            <a className="nav-link" href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

