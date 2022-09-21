import React from "react";
import VehicleModelCard from "./VehicleModelCard";

function VehicleModelList(props) {
  console.log(props.vehicleModels);

  let vehicleModelsList;
  props.vehicleModels.length === 0
    ? (vehicleModelsList = (
        <h3>There are currently no vehicle models. Please add one!</h3>
      ))
    : (vehicleModelsList = props.vehicleModels.map((model) => {
        return (
          <VehicleModelCard
            key={model.id}
            image={model.picture_url}
            model={model.name}
            manufacturer={model.manufacturer.name}
            model_id={model.id}
            openAutomobileForm={props.openAutomobileForm}
            updateSelectedVehicleModel={props.updateSelectedVehicleModel}
          />
        );
      }));

  return (
    <React.Fragment>
      <div className="my-5 container">
        <div className="justify-content-sm-center">
          <h1>Vehicle Models</h1>
          <div className="container">
            <div className="row gy-4">{vehicleModelsList}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VehicleModelList;
