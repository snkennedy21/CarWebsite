import { useState, useEffect } from "react";
import React from "react";
import ManufacturerCard from "./Manufacturers/ManufacturerCard";
import VehicleModelList from "./Vehicle models/VehicleModelList";
import ManufacturerList from "./Manufacturers/ManufacturerList";
import AutomobileList from "./Automobile Inventory/AutomobileList";
import FormModal from "../UI/FormModal";

function InventoryPage(props) {
  const [manufacturers, setManufacturers] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);

  const [manufacturerFormOpen, setManufacturerFormOpen] = useState(false);
  const [vehicleModelFormOpen, setVehicleModelFormOpen] = useState(false);
  const [automobileFormOpen, setAutomobileFormOpen] = useState(false);

  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedVehicleModel, setSelectedVehicleModel] = useState("");
  const [selectedAutomobile, setSelectedAutomobile] = useState("");

  // *************************************************************** //
  // DATA FETCHES FOR MANUFACTURERS, VEHICLE MODELS, AND AUTOMOBILES //
  // *************************************************************** //
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

  useEffect(() => {
    fetchManufacturerData();
    fetchVehicleModelData();
  }, []);

  // **************************************************************************** //
  // FUNCTIONS FOR UPDATING STATE OF MANUFACTUERS, VEHICLE MODELS AND AUTOMOBILES //
  // **************************************************************************** //

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

  // **************************************************************************** //
  // FUNCTIONS FOR OPENING FORMS FOR MANUFACTUERS, VEHICLE MODELS AND AUTOMOBILES //
  // **************************************************************************** //

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

  function updateSelectedManufacturerHandler(manufacturer) {
    setSelectedManufacturer(manufacturer);
  }

  function updateSelectedVehicleModelHandler(vehicleModel) {
    setSelectedVehicleModel(vehicleModel);
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
          selectedVehicleModel={selectedVehicleModel}
          updateVehicleModelList={updateVehicleModelListHandler}
          updateManufacturersList={updateManufacturersListHandler}
          updateAutomobilesList={props.updateAutomobilesArray}
          manufacturerFormOpen={manufacturerFormOpen}
          vehicleModelFormOpen={vehicleModelFormOpen}
          automobileFormOpen={automobileFormOpen}
        />
      </div>
      <ManufacturerList
        manufacturers={manufacturers}
        updateVehicleModelList={updateVehicleModelListHandler}
        updateSelectedManufacturer={updateSelectedManufacturerHandler}
        openVehicleModelForm={openVehicleModelFormHandler}
      />
      <VehicleModelList
        vehicleModels={vehicleModels}
        openAutomobileForm={openAutomobileFormHandler}
        updateSelectedVehicleModel={updateSelectedVehicleModelHandler}
      />
      <AutomobileList automobiles={props.automobilesArray} />
    </React.Fragment>
  );
}

export default InventoryPage;
