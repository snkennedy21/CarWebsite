import { useState, useEffect } from "react";
import React from "react";
import ManufacturerCard from "./ManufacturerCard";
import ManufacturerForm from "./ManufacturerForm";
import Collapse from "react-bootstrap/Collapse";
import VehicleModelList from "../Vehicle models/VehicleModelList";
import AutomobileList from "../Automobile Inventory/AutomobileList";
import FormModal from "../UI/FormModal";

function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);

  const [manufacturerFormOpen, setManufacturerFormOpen] = useState(false);
  const [vehicleModelFormOpen, setVehicleModelFormOpen] = useState(false);
  const [automobileFormOpen, setAutomobileFormOpen] = useState(false);

  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedVehicleModel, setSelectedVehicleModel] = useState("");
  const [selectedAutomobile, setSelectedAutomobile] = useState("");

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

  function updateSelectedManufacturerHandler(manufacturer) {
    setSelectedManufacturer(manufacturer);
  }

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

  function openManufacturerFormHandler() {
    setManufacturerFormOpen(true);
    setVehicleModelFormOpen(false);
    setAutomobileFormOpen(false);
  }

  function openVehicleModelFormHandler() {
    setManufacturerFormOpen(false);
    setVehicleModelFormOpen(true);
    setAutomobileFormOpen(false);
  }

  function openAutomobileFormHandler() {
    setManufacturerFormOpen(false);
    setVehicleModelFormOpen(false);
    setAutomobileFormOpen(true);
  }

  return (
    <React.Fragment>
      <div className="my-5 container">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={openManufacturerFormHandler}
        >
          Launch demo modal
        </button>
        <FormModal
          vehicleModels={vehicleModels}
          manufacturers={manufacturers}
          selectedManufacturer={selectedManufacturer}
          updateVehicleModelList={updateVehicleModelListHandler}
          updateManufacturersList={updateManufacturersListHandler}
          manufacturerFormOpen={manufacturerFormOpen}
          vehicleModelFormOpen={vehicleModelFormOpen}
          automobileFormOpen={automobileFormOpen}
        />

        <h1>Manufacturers</h1>
        <div className="container">
          <div className="row gy-4">
            {manufacturers.map((manufacturer) => {
              return (
                <ManufacturerCard
                  key={manufacturer.id}
                  manufacturer_id={manufacturer.id}
                  image={manufacturer.picture_url}
                  updateVehicleModelList={updateVehicleModelListHandler}
                  updateSelectedManufacturer={updateSelectedManufacturerHandler}
                  openVehicleModelForm={openVehicleModelFormHandler}
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
