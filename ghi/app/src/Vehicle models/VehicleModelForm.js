import React from "react";

class VehicleModelForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      picture_url: "",
      manufacturer_id: "",
      manufacturers: [],
    };
  }

  async componentDidMount() {
    const manufacturerUrl = "http://localhost:8100/api/manufacturers";

    const response = await fetch(manufacturerUrl);

    if (response.ok) {
      const data = await response.json();
      this.setState({ manufacturers: data.manufacturers });
    }
  }

  async submitHandler(e) {
    e.preventDefault();
    const data = { ...this.state };
    delete data.manufacturers;

    const modelUrl = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(modelUrl, fetchConfig);
    if (response.ok) {
      const newModel = await response.json();
    }

    const cleared = {
      name: "",
      picture_url: "",
      manufacturer_id: "",
    };

    this.setState(cleared);
  }

  inputChangeHandler(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a Vehicle Model</h1>
            <form
              onSubmit={this.submitHandler.bind(this)}
              id="create-conference-form"
            >
              <div className="form-floating mb-3">
                <input
                  required
                  placeholder="Name"
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.name}
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  placeholder="picture_url"
                  type="text"
                  name="picture_url"
                  id="picture_url"
                  className="form-control"
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.picture_url}
                />
                <label htmlFor="picture_url">Picture URL</label>
              </div>
              <div className="mb-3">
                <select
                  required
                  name="manufacturer_id"
                  id="manufacturer_id"
                  className="form-select"
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.manufacturer_id}
                >
                  <option value="">Choose a Manufacturer</option>
                  {this.state.manufacturers.map((manufacturer) => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default VehicleModelForm;
