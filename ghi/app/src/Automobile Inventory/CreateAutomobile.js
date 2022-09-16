import React from "react";
import { useState, useEffect } from "react";

function CreateAutomobile() {
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
        </div>
      </div>
    </div>
  );
}

export default CreateAutomobile;
