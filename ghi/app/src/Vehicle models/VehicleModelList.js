import { useState, useEffect } from "react";
import React from "react";
import VehicleModelCard from "./VehicleModelCard";

function VehicleModelList() {
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
      <div className="container">
        <div className="row gy-4">
          {models.map((model) => {
            return (
              <VehicleModelCard
                key={model.id}
                image={model.picture_url}
                name={model.name}
                manufacturer={model.manufacturer.name}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default VehicleModelList;
