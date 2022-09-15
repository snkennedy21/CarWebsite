import React from "react";
import { useState } from "react";

function CustomerForm() {
  const [state, setState] = useState({
    name: "",
    address: "",
    phone_number: "",
  });

  function submitHandler(e) {}
  function inputChangeHandler(e) {
    const value = e.target.value;
    setState((prevState) => {
      return { ...prevState };
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
