import { useState, useEffect } from "react";
import React from "react";
import VehicleModelCard from "./VehicleModelCard";
import VehicleModelForm from "./VehicleModelForm";
import Collapse from "react-bootstrap/Collapse";

function VehicleModelList(props) {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="my-5 container">
        <div className="justify-content-sm-center">
          <h1>Vehicle Models</h1>
          <div className="container">
            <div className="row gy-4">
              {props.vehicleModels.map((model) => {
                return (
                  <VehicleModelCard
                    key={model.id}
                    image={model.picture_url}
                    model={model.name}
                    manufacturer={model.manufacturer.name}
                    model_id={model.id}
                    updateAutomobilesList={props.updateAutomobilesList}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VehicleModelList;
