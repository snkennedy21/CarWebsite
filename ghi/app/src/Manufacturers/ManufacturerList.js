import { useState, useEffect } from "react";
import React from "react";
import ManufacturerCard from "./ManufacturerCard";
import ManufacturerForm from "./ManufacturerForm";
import Collapse from "react-bootstrap/Collapse";
import VehicleModelList from "../Vehicle models/VehicleModelList";
import AutomobileList from "../Automobile Inventory/AutomobileList";

function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);

  const [open, setOpen] = useState(false);

  const fetchManufacturerData = async () => {
    const manufacturersUrl = "http://localhost:8100/api/manufacturers/";
    const manufacturerResponse = await fetch(manufacturersUrl);
    if (manufacturerResponse.ok) {
      const data = await manufacturerResponse.json();
      setManufacturers(data.manufacturers);
    }
  };

  async function fetchVehicleModelData() {
    const vehicleModelsUrl = "http://localhost:8100/api/models/";
    const vehicleModelsResponse = await fetch(vehicleModelsUrl);

    if (vehicleModelsResponse.ok) {
      const vehicleModelsData = await vehicleModelsResponse.json();
      setVehicleModels(vehicleModelsData.models);
    }
  }

  async function fetchAutomobileData() {
    const automobilessUrl = "http://localhost:8100/api/automobiles/";
    const automobilesResponse = await fetch(automobilessUrl);

    if (automobilesResponse.ok) {
      const automobilesData = await automobilesResponse.json();
      setAutomobiles(automobilesData.autos);
    }
  }

  useEffect(() => {
    fetchManufacturerData();
    fetchVehicleModelData();
    fetchAutomobileData();
  }, []);

  function updateManufacturersListHandler(manufacturerData) {
    setManufacturers((prevState) => {
      return [...prevState, manufacturerData];
    });
  }

  function updateVehicleModelListHandler(newVehicleModel) {
    setVehicleModels((prevState) => {
      return [...prevState, newVehicleModel];
    });
  }

  function updateAutomobilesListHandler(newAutomobile) {
    setAutomobiles((prevState) => {
      return [...prevState, newAutomobile];
    });
  }

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
            <ManufacturerForm
              updateManufacturersList={updateManufacturersListHandler}
            />
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
                  updateVehicleModelList={updateVehicleModelListHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
      <VehicleModelList
        vehicleModels={vehicleModels}
        updateAutomobilesList={updateAutomobilesListHandler}
      />
      <AutomobileList automobiles={automobiles} />
    </React.Fragment>
  );
}

export default ManufacturerList;
