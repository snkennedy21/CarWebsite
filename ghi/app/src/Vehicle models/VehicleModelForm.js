import React from "react";
import { useState, useEffect } from "react";

function VehicleModelForm() {
  const [state, setState] = useState({
    name: "",
    picture_url: "",
    manufacturers: [],
    manufacturer_id: "",
  });

  useEffect(() => {
    async function fetchData() {
      const manufacturerUrl = "http://localhost:8100/api/manufacturers";
      const manufactuerResponse = await fetch(manufacturerUrl);

      if (manufactuerResponse.ok) {
        const manufactuerData = await manufactuerResponse.json();
        setState((prevState) => {
          return { ...prevState, manufacturers: manufactuerData.manufacturers };
        });
      }
    }
    fetchData();
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    const data = { ...state };
    delete data.manufacturers;

    const modelUrl = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const modelResponse = await fetch(modelUrl, fetchConfig);

    setState((prevState) => {
      return {
        ...prevState,
        name: "",
        picture_url: "",
        manufacturer_id: "",
      };
    });
  }

  function inputChangeHandler(e) {
    const value = e.target.value;
    setState((prevState) => {
      return { ...prevState, [e.target.name]: value };
    });
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a Vehicle Model</h1>
          <form onSubmit={submitHandler} id="create-conference-form">
            <div className="form-floating mb-3">
              <input
                required
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={inputChangeHandler}
                value={state.name}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                required
                placeholder="picture_url"
                type="text"
                name="picture_url"
                id="picture_url"
                className="form-control"
                onChange={inputChangeHandler}
                value={state.picture_url}
              />
              <label htmlFor="picture_url">Picture URL</label>
            </div>
            <div className="mb-3">
              <select
                required
                name="manufacturer_id"
                id="manufacturer_id"
                className="form-select"
                onChange={inputChangeHandler}
                value={state.manufacturer_id}
              >
                <option value="">Choose a Manufacturer</option>
                {state.manufacturers.map((manufacturer) => {
                  return (
                    <option key={manufacturer.id} value={manufacturer.id}>
                      {manufacturer.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VehicleModelForm;
