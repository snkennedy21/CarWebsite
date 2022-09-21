import React from "react";
import ManufacturerCard from "./ManufacturerCard";

function ManufacturerList(props) {
  let manufacturersList;
  props.manufacturers.length === 0
    ? (manufacturersList = (
        <h3>There are currently no manufacturers. Please add one!</h3>
      ))
    : (manufacturersList = props.manufacturers.map((manufacturer) => {
        return (
          <ManufacturerCard
            key={manufacturer.id}
            manufacturer_id={manufacturer.id}
            image={manufacturer.picture_url}
            updateVehicleModelList={props.updateVehicleModelList}
            updateSelectedManufacturer={props.updateSelectedManufacturer}
            openVehicleModelForm={props.openVehicleModelForm}
          />
        );
      }));

  return (
    <React.Fragment>
      <div className="my-5 container">
        <div className="justify-content-sm-center">
          <h1>Manufacturers</h1>
          <div className="container">
            <div className="row gy-4">{manufacturersList}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ManufacturerList;
