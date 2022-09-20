import { useState, useEffect } from "react";
import React from "react";
import ManufacturerCard from "./ManufacturerCard";
import ManufacturerForm from "./ManufacturerForm";
import Collapse from "react-bootstrap/Collapse";

function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchResponse = async () => {
    const manufacturersUrl = "http://localhost:8100/api/manufacturers/";
    const manufacturerResponse = await fetch(manufacturersUrl);
    if (manufacturerResponse.ok) {
      const data = await manufacturerResponse.json();
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

        <h1>Vehicle Models</h1>
        <div className="container">
          <div className="row gy-4">
            {manufacturers.map((manufacturer) => {
              return (
                <ManufacturerCard
                  key={manufacturer.id}
                  manufacturer_id={manufacturer.id}
                  image={manufacturer.picture_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ManufacturerList;
