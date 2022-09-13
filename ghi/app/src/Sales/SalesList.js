import React from "react";

class SalesList extends React.Component {
  constructor() {
    super();
    this.state = {
      sales: [],
      sales_people: [],
    };
  }

  async componentDidMount() {
    const salesUrl = "http://localhost:8090/api/sales/";
    const response = await fetch(salesUrl);

    const salesPeopleUrl = "http://localhost:8090/api/sales-person/";
    const salesPeopleResponse = await fetch(salesPeopleUrl);

    if (salesPeopleResponse.ok) {
      const data = await salesPeopleResponse.json();
      this.setState({ sales_people: data });
    }

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ sales: data });
    }
  }

  async selectChangeHander(e) {
    const salesUrl = "http://localhost:8090/api/sales/";
    const personsSalesUrl = `http://localhost:8090/api/sales-person/${e.target.value}/sales/`;

    if (e.target.value === "All Sales" || e.target.value === "Choose One") {
      const allSalesResponse = await fetch(salesUrl);
      const allSalesData = await allSalesResponse.json();
      this.setState({ sales: allSalesData });
    } else {
      const personsSalesResponse = await fetch(personsSalesUrl);
      const personsSalesData = await personsSalesResponse.json();
      this.setState({ sales: personsSalesData });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>List of Sales</h1>
        <select onChange={this.selectChangeHander.bind(this)}>
          <option>Choose One</option>
          <option>All Sales</option>
          {this.state.sales_people.map((salesPerson) => {
            return (
              <option
                key={salesPerson.employee_number}
                value={salesPerson.employee_number}
              >
                {salesPerson.name}
              </option>
            );
          })}
        </select>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sales Person</th>
              <th scope="col">Customer</th>
              <th scope="col">VIN</th>
              <th scope="col">Sale Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sales.map((sale) => {
              return (
                <tr key={sale.id}>
                  <td>{sale.sales_person}</td>
                  <td>{sale.customer}</td>
                  <td>{sale.automobile.vin}</td>
                  <td>{sale.sale_price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default SalesList;
