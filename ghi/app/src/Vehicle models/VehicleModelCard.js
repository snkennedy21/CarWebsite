import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import AutomobileForm from "../Automobile Inventory/AutomobileForm";
import Collapse from "react-bootstrap/Collapse";

function VehicleModelCard(props) {
  function updateVehicleModel(e) {
    props.openAutomobileForm();
    props.updateSelectedVehicleModel(e.target.value);
  }

  return (
    <Card>
      <img
        className="card-img-top"
        src={props.image}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.model}</h5>
        <p className="card-text">{props.manufacturer}</p>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        value={props.model_id}
        onClick={updateVehicleModel}
      >
        Launch demo modal
      </button>
    </Card>
  );
}

export default VehicleModelCard;
