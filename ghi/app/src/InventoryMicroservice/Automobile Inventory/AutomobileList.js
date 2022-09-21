import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function AutomobileList(props) {
  return (
    <div className="my-5 container">
      <div className="justify-content-sm-center">
        <h1>Vehicle Models</h1>
        <table className="table my-5 table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Color</th>
              <th>Year</th>
              <th>Model</th>
              <th>Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {props.automobiles
              .filter((auto) => {
                return auto.is_sold === false;
              })
              .map((auto) => {
                return (
                  <tr key={auto.href}>
                    <td>{auto.vin}</td>
                    <td>{auto.color}</td>
                    <td>{auto.year}</td>
                    <td>{auto.model.name}</td>
                    <td>{auto.model.manufacturer.name}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AutomobileList;
