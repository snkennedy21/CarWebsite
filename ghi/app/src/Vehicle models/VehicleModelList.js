import React from "react";

class VehicleModelList extends React.Component {
  constructor() {
    super();
    this.state = {
      models: [],
    };
  }

  async componentDidMount() {
    const modelUrl = "http://localhost:8100/api/models/";
    const response = await fetch(modelUrl);

    if (response.ok) {
      const data = await response.json();
      this.setState({ models: data.models });
    }
  }

  render() {
    console.log(this.state.models);
    return (
      <React.Fragment>
        <h1>Vehicle Models</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Picture</th>
            </tr>
          </thead>
          <tbody>
            {this.state.models.map((model) => {
              return (
                <tr key={model.id}>
                  <td>{model.name}</td>
                  <td>{model.manufacturer.name}</td>
                  <td>
                    <img src={model.picture_url} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default VehicleModelList;
