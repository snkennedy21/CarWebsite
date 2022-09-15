import React from "react";
import { useState } from "react";

function CustomerForm() {
  const [state, setState] = useState({
    name: "",
    address: "",
    phone_number: "",
  });

  async function submitHandler(e) {
    e.preventDefault();
    const data = { ...state };
    const customerUrl = "http://localhost:8090/api/customer/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const customerResponse = await fetch(customerUrl, fetchConfig);
    console.log(customerResponse);

    if (customerResponse.ok) {
      setState((prevState) => {
        return {
          ...prevState,
          name: "",
          address: "",
          phone_number: "",
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
            <h1>Add Customer</h1>
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
                <label htmlFor="name">Customer Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={inputChangeHandler}
                  placeholder="Address"
                  required
                  type="text"
                  name="address"
                  id="address"
                  className="form-control"
                  value={state.address}
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={inputChangeHandler}
                  placeholder="Phone Number"
                  required
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  className="form-control"
                  value={state.phone_number}
                />
                <label htmlFor="phone_number">Phone Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
