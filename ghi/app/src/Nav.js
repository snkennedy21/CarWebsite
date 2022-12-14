import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <div className="dropdown mx-1">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/inventory">
                    Inventory
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown mx-1">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <Link className="dropdown-item" to="/sales">
                    History
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales/new">
                    New Sale
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to="/sales-people"
                  >
                    Sales People
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to="/sales-people/new"
                  >
                    Add Sales Person
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/customers">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/customers/new">
                    New Customer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown mx-1">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton3"
              >
                <li>
                  <Link className="dropdown-item" to="/appointments">
                    Manage appointments
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/appointments/history">
                    History
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/appointments/new">
                    New appointment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technicians">
                    Technicians
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technicians/new">
                    New technician
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
