import React from "react";
import ManufacturerForm from "../Manufacturers/ManufacturerForm";
import VehicleModelForm from "../Vehicle models/VehicleModelForm";
import AutomobileForm from "../Automobile Inventory/AutomobileForm";

function ModalForm(props) {
  let form;
  if (props.manufacturerFormModalOpen) {
    form = (
      <ManufacturerForm
        updateManufacturersList={props.updateManufacturersList}
      />
    );
  } else if (props.vehicleModelFormModalOpen) {
    form = (
      <VehicleModelForm
        updateVehicleModelList={props.updateVehicleModelList}
        manufacturers={props.manufacturers}
      />
    );
  } else if (props.automobileFormModalOpen) {
    form = (
      <AutomobileForm
        updateAutomobilesList={props.updateAutomobilesList}
        vehicleModels={props.vehicleModels}
      />
    );
  }

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="creationModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Manufacturer
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{form}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalForm;
