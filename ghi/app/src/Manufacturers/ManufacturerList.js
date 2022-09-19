import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ManufacturerForm from "./ManufacturerForm";
import Collapse from "react-bootstrap/Collapse";

function ManufacturerList() {
  const [open, setOpen] = useState(false);
  const [manufacturers, setManufacturers] = useState([]);

  const fetchResponse = async () => {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };

  function updateManufactuersList(manufacturerData) {
    setManufacturers((prevState) => {
      return [...prevState, manufacturerData];
    });
  }

  useEffect(() => {
    fetchResponse();
  }, []);

  return (
    <React.Fragment>
      <div className="my-5 container">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="btn btn-primary"
          >
            Add Manufacturer
          </button>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <ManufacturerForm updateManufactuersList={updateManufactuersList} />
          </div>
        </Collapse>
        <table className="table my-5 table-striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {manufacturers.map((manufacturer) => {
              return (
                <tr key={manufacturer.href}>
                  <td>{manufacturer.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ManufacturerList;
