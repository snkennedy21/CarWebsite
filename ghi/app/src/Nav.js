import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isAutomobilesOpen, setIsAutomobilesOpen] = useState(false);

  function toggleSalesDropdown() {
    setIsSalesOpen(!isSalesOpen);
  }

  function toggleServiceDropdown() {
    setIsServiceOpen(!isServiceOpen);
  }

  function toggleAutomobilesDropdown() {
    setIsAutomobilesOpen(!isAutomobilesOpen);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <div className="dropdown nav-item">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={toggleSalesDropdown}
                >
                  Sales
                </button>
                <div
                  className={
                    isSalesOpen ? "dropdown-menu show" : "dropdown-menu"
                  }
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/sales-people"
                    onClick={toggleSalesDropdown}
                  >
                    Sales People
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/sales-people/new"
                    onClick={toggleSalesDropdown}
                  >
                    Add Sales Person
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/sales"
                    onClick={toggleSalesDropdown}
                  >
                    Sales
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/sales/new"
                    onClick={toggleSalesDropdown}
                  >
                    Create a New Sale
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/customers"
                    onClick={toggleSalesDropdown}
                  >
                    Customers
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/customers/new"
                    onClick={toggleSalesDropdown}
                  >
                    New Customer
                  </NavLink>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown nav-item">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={toggleServiceDropdown}
                >
                  Service
                </button>
                <div
                  className={
                    isServiceOpen ? "dropdown-menu show" : "dropdown-menu"
                  }
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/appointments"
                    onClick={toggleServiceDropdown}
                  >
                    Manage appointments
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/appointments/history"
                    onClick={toggleServiceDropdown}
                  >
                    Appointment history
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/appointments/new"
                    onClick={toggleServiceDropdown}
                  >
                    Add service appointment
                  </NavLink>

                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/technicians/new"
                    onClick={toggleServiceDropdown}
                  >
                    Add new technician
                  </NavLink>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown nav-item">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={toggleAutomobilesDropdown}
                >
                  Automobiles
                </button>
                <div
                  className={
                    isAutomobilesOpen ? "dropdown-menu show" : "dropdown-menu"
                  }
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/manufacturers"
                    onClick={toggleAutomobilesDropdown}
                  >
                    Manufacturers
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/manufacturers/new"
                    onClick={toggleAutomobilesDropdown}
                  >
                    Create manufacturer
                  </NavLink>

                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/vehicle-models"
                    onClick={toggleAutomobilesDropdown}
                  >
                    Vehicle models
                  </NavLink>

                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/vehicle-models/new"
                    onClick={toggleAutomobilesDropdown}
                  >
                    Create vehicle model
                  </NavLink>

                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/automobiles"
                    onClick={toggleAutomobilesDropdown}
                  >
                    Inventory
                  </NavLink>

                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/automobiles/new"
                    onClick={toggleAutomobilesDropdown}
                  >
                    Add automobile to inventory
                  </NavLink>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
