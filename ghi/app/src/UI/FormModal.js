import React from "react";
import VehicleModelForm from "../Vehicle models/VehicleModelForm";

function FormModal(props) {
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {props.manufacturers
                .filter((manufacturer) => {
                  return manufacturer.id == props.selectedManufacturer;
                })
                .map((manufacturer) => {
                  return (
                    <VehicleModelForm
                      key={manufacturer.id}
                      manufacturer_id={manufacturer.id}
                      updateVehicleModelList={props.updateVehicleModelList}
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

export default FormModal;
