import React from "react";

class AutomobileForm extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "",
      year: "",
      vin: "",
      models: [],
    };
  }

  async componentDidMount() {
    const modelUrl = "http://localhost:8100/api/models/";

    const response = await fetch(modelUrl);

    if (response.ok) {
      const data = await response.json();
      this.setState({ models: data.models });
      console.log(data);
    }
  }

  async submitHandler(e) {
    e.preventDefault();
    const data = { ...this.state };
    delete data.models;

    const automobileUrl = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(automobileUrl, fetchConfig);
    if (response.ok) {
      const newAutomobile = await response.json();
      console.log(newAutomobile);
    }

    const clear = {
      color: "",
      year: "",
      vin: "",
      model: "",
    };

    this.setState(clear);
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
            <h1>Add Automobile To Inventory</h1>
            <form
              onSubmit={this.submitHandler.bind(this)}
              id="create-conference-form"
            >
              <div className="form-floating mb-3">
                <input
                  required
                  placeholder="color"
                  type="text"
                  name="color"
                  id="color"
                  className="form-control"
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.color}
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  placeholder="picture_url"
                  type="text"
                  name="year"
                  id="year"
                  className="form-control"
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.year}
                />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  placeholder="picture_url"
                  type="text"
                  name="vin"
                  id="vin"
                  className="form-control"
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.vin}
                />
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="mb-3">
                <select
                  required
                  name="model_id"
                  id="model_id"
                  className="form-select"
                  onChange={this.inputChangeHandler.bind(this)}
                  value={this.state.model}
                >
                  <option value="">Choose a Model</option>
                  {this.state.models.map((model) => {
                    return (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AutomobileForm;
