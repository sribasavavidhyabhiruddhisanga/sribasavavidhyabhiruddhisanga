import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <Link className="navbar-brand text-white" to="/">Sri Basava Vidhyabhiruddhi Sanga</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/history">History</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/payment">Payment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Sign In</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
