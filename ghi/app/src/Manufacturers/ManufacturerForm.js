import React from "react";

class ManufacturerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const data = { ...this.state };
    const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(manufacturerUrl, fetchConfig);

    if (response.ok) {
      const newManufacturer = await response.json();
      console.log("new manufacturer created:", newManufacturer);
      this.setState({ name: "" });
    } else {
      throw new Error("response not ok");
    }
  }

  handleChangeManufacturerName(e) {
    const value = e.target.value;
    this.setState({ name: value });
  }

  render() {
    return (
      <div className="container mb-4">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a manufacturer</h1>
              <form
                onSubmit={this.handleSubmit.bind(this)}
                id="create-manufacturer-form"
              >
                <div className="form-floating mb-3">
                  <input
                    onChange={this.handleChangeManufacturerName.bind(this)}
                    value={this.state.name}
                    placeholder="ManufacturerName"
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                  <label htmlFor="name">Manufacturer name</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManufacturerForm;
