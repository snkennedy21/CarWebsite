import React from "react";
import { useState } from "react";

const ManufacturerForm = function (props) {
  const [name, setName] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const data = { name };
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
      props.updateManufactuersList(newManufacturer);
      setName("");
    }
  }

  async function inputChangeHandler(e) {
    const value = e.target.value;
    setName(value);
  }

  return (
    <div className="container mb-4">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a manufacturer</h1>
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
                  value={name}
                />
                <label htmlFor="name">Manufacturer name</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerForm;
