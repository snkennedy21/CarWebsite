import React from "react";
import { useState, useEffect } from "react";
import { useAutomobilesArrayAdd } from "../../Contexts/AutomobilesContext";

function AutomobileForm(props) {
  const addNewAutomobileToAutomobilesArray = useAutomobilesArrayAdd();

  const [state, setState] = useState({
    color: "",
    year: "",
    vin: "",
    model_id: props.selectedVehicleModel,
  });

  async function submitHandler(e) {
    e.preventDefault();
    const data = { ...state };

    const automobileUrl = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(automobileUrl, fetchConfig);

    if (response.ok) {
      const newAutomobile = await response.json();
      addNewAutomobileToAutomobilesArray(newAutomobile);
    }

    setState((prevState) => {
      return {
        ...prevState,
        color: "",
        year: "",
        vin: "",
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
    <React.Fragment>
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
        <button className="btn btn-primary">Add</button>
      </form>
    </React.Fragment>
  );
}

export default AutomobileForm;
