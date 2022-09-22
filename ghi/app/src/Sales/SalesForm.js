import React from "react";
import { useState, useEffect } from "react";
import {
  useAutomobilesUnsold,
  useAutomobiles,
} from "../Contexts/AutomobilesContext";

function SalesForm() {
  const reRenderAutomobiles = useAutomobilesUnsold();
  const automobiles = useAutomobiles();

  const [state, setState] = useState({
    automobiles: [],
    sales_people: [],
    customers: [],
    sale_price: "",
    automobile: "",
    sales_person: "",
    customer: "",
  });

  useEffect(() => {
    async function fetchData() {
      const automobilesUrl = "http://localhost:8100/api/automobiles/";
      const salesPeopleUrl = "http://localhost:8090/api/sales-person/";
      const customersUrl = "http://localhost:8090/api/customer/";

      const automobilesResponse = await fetch(automobilesUrl);
      const salesPeopleResponse = await fetch(salesPeopleUrl);
      const customersReponse = await fetch(customersUrl);

      if (automobilesResponse.ok) {
        const automobilesData = await automobilesResponse.json();
        setState((prevState) => {
          return { ...prevState, automobiles: automobilesData.autos };
        });
      }
      if (salesPeopleResponse.ok) {
        const salesPeopleData = await salesPeopleResponse.json();
        setState((prevState) => {
          return { ...prevState, sales_people: salesPeopleData };
        });
      }

      if (customersReponse.ok) {
        const customersData = await customersReponse.json();
        setState((prevState) => {
          return { ...prevState, customers: customersData };
        });
      }
    }
    fetchData();
  }, []);

  function inputChangeHandler(e) {
    const value = e.target.value;
    setState((prevState) => {
      return { ...prevState, [e.target.name]: value };
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    const resetData = { ...state };
    resetData.automobiles = resetData.automobiles.filter((automobile) => {
      return automobile.vin !== state.automobile;
    });

    const data = { ...state };
    delete data.automobiles;
    delete data.sales_people;
    delete data.customers;

    const saleUrl = `http://localhost:8090/api/automobiles/${data.automobile}/sales/`;
    const fetchConfigPost = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(data);

    const automobileUrl = `http://localhost:8100/api/automobiles/${data.automobile}/`;

    const automobileResponse = await fetch(automobileUrl, {
      method: "put",
      body: JSON.stringify({ is_sold: true }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const saleResponse = await fetch(saleUrl, fetchConfigPost);

    let updatedAutomobiles = automobiles.filter((auto) => {
      return auto.id != data.automobile;
    });

    reRenderAutomobiles(updatedAutomobiles);

    setState((prevState) => {
      return {
        ...prevState,
        automobiles: resetData.automobiles,
        automobile: "",
        sales_person: "",
        customer: "",
        sale_price: "",
      };
    });
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Record a Sale</h1>
          <form onSubmit={submitHandler} id="create-conference-form">
            <div className="mb-3">
              <select
                required
                name="automobile"
                id="automobile"
                className="form-select"
                onChange={inputChangeHandler}
                value={state.automobile}
              >
                <option value="">Choose an Automobile</option>
                {state.automobiles
                  .filter((automobile) => {
                    return automobile.is_sold == false;
                  })
                  .map((automobile) => {
                    return (
                      <option key={automobile.id} value={automobile.vin}>
                        {automobile.vin}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="mb-3">
              <select
                required
                name="sales_person"
                id="sales_person"
                className="form-select"
                onChange={inputChangeHandler}
                value={state.sales_person}
              >
                <option value="">Choose a Sales Person</option>
                {state.sales_people.map((sales_person) => {
                  return (
                    <option key={sales_person.id} value={sales_person.id}>
                      {sales_person.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <select
                required
                name="customer"
                id="customer"
                className="form-select"
                onChange={inputChangeHandler}
                value={state.customer}
              >
                <option value="">Choose a Customer</option>
                {state.customers.map((customer) => {
                  return (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                required
                placeholder="picture_url"
                type="number"
                name="sale_price"
                id="sale_price"
                className="form-control"
                onChange={inputChangeHandler}
                value={state.sale_price}
              />
              <label htmlFor="sale_price">Sale Price</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SalesForm;
