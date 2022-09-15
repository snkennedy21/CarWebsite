import React from "react";
import { useState } from "react";

function SalesPeopleForm() {
  const [state, setState] = useState({
    name: "",
    employee_number: "",
  });

  async function submitHandler(e) {
    e.preventDefault();
    const data = { ...state };
    const salesPersonUrl = "http://localhost:8090/api/sales-person/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const salesPersonResponse = await fetch(salesPersonUrl, fetchConfig);

    if (salesPersonResponse.ok) {
      setState((prevState) => {
        return {
          ...prevState,
          name: "",
          employee_number: "",
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
    <div className="container mb-4">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add Sales Person</h1>
            <form onSubmit={submitHandler} id="create-manufacturer-form">
              <div className="form-floating mb-3">
                <input
                  onChange={inputChangeHandler}
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={state.name}
                />
                <label htmlFor="name">Employee Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={inputChangeHandler}
                  placeholder="Employee Number"
                  required
                  type="text"
                  name="employee_number"
                  id="employee_number"
                  className="form-control"
                  value={state.employee_number}
                />
                <label htmlFor="employee_number">Employee Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesPeopleForm;
