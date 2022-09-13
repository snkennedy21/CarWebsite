import React from "react";

class SalesList extends React.Component {
  constructor() {
    super();
    this.state = {
      sales: [],
    };
  }

  async componentDidMount() {
    const salesUrl = "http://localhost:8090/api/sales/";
    const response = await fetch(salesUrl);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ sales: data });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>List of Sales</h1>
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
