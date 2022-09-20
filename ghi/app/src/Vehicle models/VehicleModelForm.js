import React from "react";
import { useState, useEffect } from "react";

function VehicleModelForm(props) {
  const [state, setState] = useState({
    name: "",
    picture_url: "",
    manufacturer_id: props.manufacturer_id,
  });

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

    if (modelResponse.ok) {
      const newVehicleModel = await modelResponse.json();
    }

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
      <button className="btn btn-primary">Create</button>
    </form>
  );
}

export default VehicleModelForm;
