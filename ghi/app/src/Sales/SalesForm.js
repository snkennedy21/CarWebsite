import React from "react";

class SalesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      automobiles: [],
      sales_people: [],
      customers: [],
      sale_price: "",
      automobile: "",
      sales_person: "",
      customer: "",
    };
  }

  async componentDidMount() {
    const automobilesUrl = "http://localhost:8100/api/automobiles/";
    const salesPeopleUrl = "http://localhost:8090/api/sales-person/";
    const customersUrl = "http://localhost:8090/api/customer/";

    const automobilesResponse = await fetch(automobilesUrl);
    const salesPeopleResponse = await fetch(salesPeopleUrl);
    const customersReponse = await fetch(customersUrl);

    if (automobilesResponse.ok) {
      const automobilesData = await automobilesResponse.json();
      this.setState({ automobiles: automobilesData.autos });
    }

    if (salesPeopleResponse.ok) {
      const salesPeopleData = await salesPeopleResponse.json();
      this.setState({ sales_people: salesPeopleData });
    }

    if (customersReponse.ok) {
      const customersData = await customersReponse.json();
      this.setState({ customers: customersData });
    }
  }

  inputChangeHandler(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  async submitHandler(e) {
    e.preventDefault();

    const resetData = { ...this.state };
    resetData.automobiles.filter((automobile) => {
      return automobile.vin !== this.state.automobile;
    });
    const data = { ...this.state };
    delete data.automobiles;
    delete data.sales_people;
    delete data.customers;

    console.log(data);

    const saleUrl = `http://localhost:8090/api/automobiles/${data.automobile}/sales/`;
    const fetchConfigPost = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const automobileUrl = `http://localhost:8100/api/automobiles/${data.automobile}/`;

    const automobileResponse = await fetch(automobileUrl, {
      method: "put",
      body: JSON.stringify({ is_sold: true }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await fetch(saleUrl, fetchConfigPost);
    if (response.ok) {
      const newSale = await response.json();
    }

    const cleared = {
      automobile: "",
      sales_person: "",
      customer: "",
      sale_price: "",
    };
    this.setState(cleared);
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a Sale</h1>
            <form
              onSubmit={this.submitHandler.bind(this)}
              id="create-conference-form"
            >
              <div className="mb-3">
                <select
                  required
                  name="automobile"
                  id="automobile"
                  className="form-select"
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.automobile}
                >
                  <option value="">Choose an Automobile</option>
                  {this.state.automobiles
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
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.sales_person}
                >
                  <option value="">Choose a Sales Person</option>
                  {this.state.sales_people.map((sales_person) => {
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
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.customer}
                >
                  <option value="">Choose a Customer</option>
                  {this.state.customers.map((customer) => {
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
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.sale_price}
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
}

export default SalesForm;
