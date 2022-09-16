import React from "react";
import { useState, useEffect } from "react";
import Card from "../UI/Card";

function VehicleModelCard(props) {
  return (
    <Card>
      <img
        className="card-img-top"
        src={props.image}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.manufacturer}</p>
      </div>
    </Card>
  );
}

export default VehicleModelCard;
