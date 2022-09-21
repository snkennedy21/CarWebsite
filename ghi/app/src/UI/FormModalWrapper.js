import React from "react";

function FormModalWrapper(props) {
  let form;

  if (props.manufacturerFormOpen) form = props.children[0];
  if (props.vehicleModelFormOpen) form = props.children[1];
  if (props.automobileFormOpen) form = props.children[2];

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
                Form
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

export default FormModalWrapper;
