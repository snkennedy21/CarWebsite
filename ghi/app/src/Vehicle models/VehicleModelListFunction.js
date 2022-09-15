import { useState, useEffect } from "react";
import React from "react";

function VehicleModelListFunction() {
  const [models, setModels] = useState([]);

  async function fetchResponse() {
    const modelUrl = "http://localhost:8100/api/models/";
    const modelResponse = await fetch(modelUrl);

    if (modelResponse.ok) {
      const modelData = await modelResponse.json();
      setModels(modelData.models);
    }
  }

  useEffect(() => {
    fetchResponse();
  }, []);

  console.log(models);

  return (
    <React.Fragment>
      <h1>Vehicle Models</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">Picture</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => {
            return (
              <tr key={model.id}>
                <td>{model.name}</td>
                <td>{model.manufacturer.name}</td>
                <td>
                  <img src={model.picture_url} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default VehicleModelListFunction;
