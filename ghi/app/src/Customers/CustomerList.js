import React from "react";
import { useState, useEffect } from "react";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomerData() {
      const customersUrl = "http://localhost:8090/api/customer/";
      const customersResponse = await fetch(customersUrl);
      const customersData = await customersResponse.json();
      console.log(customersData);
      setCustomers(customersData);
    }
    fetchCustomerData();
  }, []);

  return (
    <div className="my-5 container">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
      <table className="table my-5 table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone_number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
