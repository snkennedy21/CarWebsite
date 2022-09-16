import React from "react";
import AutomobileForm from "./AutomobileForm";

function CreateAutomobile() {
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add Automobile To Inventory</h1>
          <AutomobileForm />
        </div>
      </div>
    </div>
  );
}

export default CreateAutomobile;
