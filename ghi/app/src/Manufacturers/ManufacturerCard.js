import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import Collapse from "react-bootstrap/Collapse";
import VehicleModelForm from "../Vehicle models/VehicleModelForm";

function ManufacturerCard(props) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <img
        className="card-img-top"
        src={props.image}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.manufacturer}</h5>
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
          <VehicleModelForm manufacturer_id={props.manufacturer_id} />
        </div>
      </Collapse>
    </Card>
  );
}

export default ManufacturerCard;
