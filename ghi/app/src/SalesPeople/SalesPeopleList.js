import React from "react";
import { useState, useEffect } from "react";

function SalesPeopleList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchCustomerData() {
      const employeesUrl = "http://localhost:8090/api/sales-person/";
      const employeesResponse = await fetch(employeesUrl);
      const employeesData = await employeesResponse.json();
      console.log(employeesData);
      setEmployees(employeesData);
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
            <th>Employee Number</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.employee_number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SalesPeopleList;
