import { useState, useEffect } from "react";
import React from "react";

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
      <div class="container">
        <div class="row">
          {models.map((model) => {
            return (
              <div class="col-4 shadow-lg p-3 mb-5 bg-body rounded">
                <img
                  class="card-img-top"
                  src={model.picture_url}
                  alt="Card image cap"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">{model.name}</h5>
                  <p class="card-text">{model.manufacturer.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default VehicleModelList;
