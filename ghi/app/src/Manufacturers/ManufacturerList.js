import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);
  const fetchResponse = async () => {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  return (
    <div className="my-5 container">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="new">
          <button className="btn btn-outline-primary">
            Add a manufacturer
          </button>
        </Link>
      </div>
      <table className="table my-5 table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((manufacturer) => {
            return (
              <tr key={manufacturer.href}>
                <td>{manufacturer.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ManufacturerList;
