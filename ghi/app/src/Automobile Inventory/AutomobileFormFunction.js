import React from "react";
import { useState, useEffect } from "react";

function AutomobileFormFunction() {
  const [state, setState] = useState({
    color: "",
    year: "",
    vin: "",
    model_id: "",
    models: [],
  });

  useEffect(() => {
    async function fetchData() {
      const modelUrl = "http://localhost:8100/api/models/";

      const response = await fetch(modelUrl);

      if (response.ok) {
        const data = await response.json();
        setState((prevState) => {
          return { ...prevState, models: data.models };
        });
      }
    }
    fetchData();
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    const data = { ...state };
    delete data.models;

    const automobileUrl = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(automobileUrl, fetchConfig);

    setState((prevState) => {
      return {
        ...prevState,
        color: "",
        year: "",
        vin: "",
        model_id: "",
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
          <h1>Add Automobile To Inventory</h1>
          <form onSubmit={submitHandler} id="create-conference-form">
            <div className="form-floating mb-3">
              <input
                required
                placeholder="color"
                type="text"
                name="color"
                id="color"
                className="form-control"
                onChange={inputChangeHandler}
                value={state.color}
              />
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input
                required
                placeholder="picture_url"
                type="text"
                name="year"
                id="year"
                className="form-control"
                onChange={inputChangeHandler}
                value={state.year}
              />
              <label htmlFor="year">Year</label>
            </div>
            <div className="form-floating mb-3">
              <input
                required
                placeholder="picture_url"
                type="text"
                name="vin"
                id="vin"
                className="form-control"
                onChange={inputChangeHandler}
                value={state.vin}
              />
              <label htmlFor="vin">VIN</label>
            </div>
            <div className="mb-3">
              <select
                required
                name="model_id"
                id="model_id"
                className="form-select"
                onChange={inputChangeHandler}
                value={state.model_id}
              >
                <option value="">Choose a Model</option>
                {state.models.map((model) => {
                  return (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AutomobileFormFunction;
