import React from "react";
import { useState, useEffect } from "react";
import Card from "../UI/Card";
import AutomobileForm from "../Automobile Inventory/AutomobileForm";
import Collapse from "react-bootstrap/Collapse";

function VehicleModelCard(props) {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  function toggleFormHandler() {
    setFormIsOpen(!formIsOpen);
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
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="btn btn-primary"
      >
        click
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <AutomobileForm />
        </div>
      </Collapse>
    </Card>
  );
}

export default VehicleModelCard;
