import { Link, NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/Dropdown';

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
              <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item" to="/manufacturers">Manufacturers</Link></li>
                <li><Link className="dropdown-item" to="/manufacturers/new">New manufacturer</Link></li>
                <li><Link className="dropdown-item" to="/vehicle-models">Models</Link></li>
                <li><Link className="dropdown-item" to="/vehicle-models/new">New model</Link></li>
                <li><Link className="dropdown-item" to="/automobiles">Automobiles</Link></li>
                <li><Link className="dropdown-item" to="/automobiles/new">Add to inventory</Link></li>
              </ul>
            </div>
            <div className="dropdown mx-1">
              <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><Link className="dropdown-item" to="/sales">History</Link></li>
                <li><Link className="dropdown-item" to="/sales/new">New</Link></li>
              </ul>
            </div>
            <div className="dropdown mx-1">
              <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                Service
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                <li><Link className="dropdown-item" to="/appointments">Manage appointments</Link></li>
                <li><Link className="dropdown-item" to="/appointments/history">History</Link></li>
                <li><Link className="dropdown-item" to="/appointments/new">New appointment</Link></li>
                <li><Link className="dropdown-item" to="/technicians/new">New technician</Link></li>
              </ul>
            </div>
            




            {/* <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">
                Manufacturers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/new">
                Create manufacturer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vehicle-models">
                Vehicle models
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vehicle-models/new">
                Create vehicle model
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">
                Inventory
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new">
                Add automobile to inventory
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales">
                Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/new">
                Create a New Sale
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments">Manage appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/history">Appointment history</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/new">Add service appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/new">Add new technician</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
