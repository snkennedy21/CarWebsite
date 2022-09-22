import React from "react";
import VehicleModelForm from "../InventoryMicroservice/Vehicle models/VehicleModelForm";
import AutomobileForm from "../InventoryMicroservice/Automobile Inventory/AutomobileForm";
import ManufacturerForm from "../InventoryMicroservice/Manufacturers/ManufacturerForm";

function FormModal(props) {
  let form;
  // ************************ //
  // DISPLAY MANUFACTUER FORM //
  // ************************ //
  if (props.manufacturerFormOpen) {
    form = (
      <ManufacturerForm
        updateManufacturersList={props.updateManufacturersList}
      />
    );
  }

  // ************************** //
  // DISPLAY VEHICLE MODEL FORM //
  // ************************** //
  if (props.vehicleModelFormOpen) {
    form = props.manufacturers
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
      });
  }

  console.log(props.selectedVehicleModel);
  // *********************** //
  // DISPLAY AUTOMOBILE FORM //
  // *********************** //
  if (props.automobileFormOpen) {
    form = props.vehicleModels
      .filter((model) => {
        return model.id == props.selectedVehicleModel;
      })
      .map((model) => {
        return (
          <AutomobileForm
            key={model.id}
            model_id={model.id}
            updateAutomobilesList={props.updateAutomobilesList}
          />
        );
      });
  }

  return (
    <React.Fragment>
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
            <div className="modal-body">{form}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FormModal;
