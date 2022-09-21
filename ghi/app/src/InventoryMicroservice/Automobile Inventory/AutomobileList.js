import React from "react";
import { useAutomobiles } from "../../Contexts/AutomobilesContext";

function AutomobileList(props) {
  const automobiles = useAutomobiles();
  console.log(automobiles);

  return (
    <div className="my-5 container">
      <div className="justify-content-sm-center">
        <h1>Automobiles</h1>
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
            {automobiles
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
