import React from "react";
import { useState } from "react";

const ManufacturerForm = function (props) {
  const [state, setState] = useState({
    name: "",
    picture_url: "",
  });

  async function submitHandler(e) {
    e.preventDefault();
    const data = { ...state };
    const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const manufacturerResponse = await fetch(manufacturerUrl, fetchConfig);

    if (manufacturerResponse.ok) {
      const newManufacturer = await manufacturerResponse.json();
      props.updateManufacturersList(newManufacturer);
      setState((prevState) => {
        return {
          ...prevState,
          name: "",
          picture_url: "",
        };
      });
    }
  }

  function inputChangeHandler(e) {
    const value = e.target.value;
    setState((prevState) => {
      return { ...prevState, [e.target.name]: value };
    });
  }

  return (
    <form onSubmit={submitHandler} id="create-manufacturer-form">
      <div className="form-floating mb-3">
        <input
          onChange={inputChangeHandler}
          placeholder="ManufacturerName"
          required
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={state.name}
        />
        <label htmlFor="name">Manufacturer name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={inputChangeHandler}
          placeholder="Picture Url"
          required
          type="text"
          name="picture_url"
          id="picture_url"
          className="form-control"
          value={state.picture_url}
        />
        <label htmlFor="picture_url">Picture Url</label>
      </div>
      <button className="btn btn-primary">Create</button>
    </form>
  );
};

export default ManufacturerForm;
