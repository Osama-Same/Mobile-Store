import React from "react";
import {Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-info">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Mobile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/NewMobile">New Mobile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/UpdateMobile/:mobile_id">Update mobile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
