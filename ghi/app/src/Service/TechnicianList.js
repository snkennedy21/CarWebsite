import React, { useState, useEffect } from "react";

function TechnicianList() {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    async function fetchTechniciansData() {
      const techniciansUrl = "http://localhost:8080/api/technicians/";
      const techniciansResponse = await fetch(techniciansUrl);
      const techniciansObj = await techniciansResponse.json();
      setTechnicians(techniciansObj.technicians);
    }
    fetchTechniciansData();
    }, []);
  return (
    <div className="my-5 container">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
      <h1 className="my-2">Technicians</h1>
      <table className="table my-5 table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee Number</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map((technician) => {
            return (
              <tr key={technician.href}>
                <td>{technician.name}</td>
                <td>{technician.number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TechnicianList;