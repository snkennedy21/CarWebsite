import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import AutomobileForm from "../Automobile Inventory/AutomobileForm";
import Collapse from "react-bootstrap/Collapse";

function VehicleModelCard(props) {
  const [open, setOpen] = useState(false);

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
        Add to Inventory
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <AutomobileForm model_id={props.model_id} />
        </div>
      </Collapse>
    </Card>
  );
}

export default VehicleModelCard;
