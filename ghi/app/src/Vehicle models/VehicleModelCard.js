import React from "react";
import { useState, useEffect } from "react";
import Card from "../UI/Card";
import AutomobileForm from "../Automobile Inventory/AutomobileForm";

function VehicleModelCard(props) {
  const [formIsOpen, setFormIsOpen] = useState(false);

  function closeFormHandler() {
    setFormIsOpen(false);
  }

  function addVehicleHandler() {}

  function showFormHandler() {
    setFormIsOpen(true);
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
        className="btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={showFormHandler}
      >
        Add to Inventory
      </button>
      <AutomobileForm
        closeForm={closeFormHandler}
        formIsOpen={formIsOpen}
        addVehicle={addVehicleHandler}
        model_id={props.model_id}
      />
    </Card>
  );
}

export default VehicleModelCard;
