import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import Collapse from "react-bootstrap/Collapse";
import VehicleModelForm from "../Vehicle models/VehicleModelForm";

function ManufacturerCard(props) {
  function updateManufacturer(e) {
    props.updateSelectedManufacturer(e.target.value);
    props.openVehicleModelForm();
  }

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
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        value={props.manufacturer_id}
        onClick={updateManufacturer}
      >
        Launch demo modal
      </button>
    </Card>
  );
}

export default ManufacturerCard;
