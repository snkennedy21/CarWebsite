import React from "react";
import ManufacturerCard from "./ManufacturerCard";
import ManufacturerForm from "./ManufacturerForm";

function ManufacturerList(props) {
  return (
    <React.Fragment>
      <div className="my-5 container">
        <div className="justify-content-sm-center">
          <h1>Manufacturers</h1>
          <div className="container">
            <div className="row gy-4">
              {props.manufacturers.map((manufacturer) => {
                return (
                  <ManufacturerCard
                    key={manufacturer.id}
                    manufacturer_id={manufacturer.id}
                    image={manufacturer.picture_url}
                    updateVehicleModelList={props.updateVehicleModelList}
                    updateSelectedManufacturer={
                      props.updateSelectedManufacturer
                    }
                    openVehicleModelForm={props.openVehicleModelForm}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ManufacturerList;
