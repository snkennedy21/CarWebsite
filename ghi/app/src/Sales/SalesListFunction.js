import React from "react";
import { useState, useEffect } from "react";

function SalesListFunction() {
  const [sales, setSales] = useState([]);
  const [sales_people, setSalesPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const salesUrl = "http://localhost:8090/api/sales/";
      const salesResponse = await fetch(salesUrl);

      const salesPeopleUrl = "http://localhost:8090/api/sales-person/";
      const salesPeopleResponse = await fetch(salesPeopleUrl);

      if (salesResponse.ok) {
        const salesData = await salesResponse.json();
        setSales(salesData);
      }
      if (salesPeopleResponse.ok) {
        const salesPeopleData = await salesPeopleResponse.json();
        setSalesPeople(salesPeopleData);
      }
    }
    fetchData();
  }, []);

  async function selectChangeHander(e) {
    const salesUrl = "http://localhost:8090/api/sales/";
    const personsSalesUrl = `http://localhost:8090/api/sales-person/${e.target.value}/sales/`;

    if (e.target.value === "All Sales" || e.target.value === "Choose One") {
      const allSalesResponse = await fetch(salesUrl);
      const allSalesData = await allSalesResponse.json();
      setSales(allSalesData);
    } else {
      const personsSalesResponse = await fetch(personsSalesUrl);
      const personsSalesData = await personsSalesResponse.json();
      setSales(personsSalesData);
    }
  }

  return (
    <React.Fragment>
      <h1>List of Sales</h1>
      <select onChange={selectChangeHander}>
        <option>Choose One</option>
        <option>All Sales</option>
        {sales_people.map((salesPerson) => {
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
          {sales.map((sale) => {
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

export default SalesListFunction;
