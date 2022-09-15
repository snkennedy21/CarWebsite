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
      <div className="container">
        <div className="row gy-4">
          {models.map((model) => {
            return (
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={model.picture_url}
                    alt="Card image cap"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{model.name}</h5>
                    <p className="card-text">{model.manufacturer.name}</p>
                  </div>
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
