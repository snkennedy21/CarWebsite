import React from "react";
import { Link } from "react-router-dom"

class AutomobileList extends React.Component {
    constructor () {
        super();
        this.state = {
            autos: [],
        }
    }

    async componentDidMount() {
        const autosUrl = "http://localhost:8100/api/automobiles/";
        const response = await fetch(autosUrl);
        if (response.ok) {
            const data = await response.json();
            this.setState({autos: data.autos});
        } else {
            throw new Error("response not ok");
        }
    }

    render () {
        return (
            <div className="my-5 container">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="new">
                    <button className="btn btn-outline-primary">Add  automobile to inventory</button>
                </Link>
            </div>
            <table className="table my-5 table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.autos.map((auto) => {
                    return (
                        <tr key={auto.href}>
                            <td>{auto.vin}</td>
                            <td>{auto.color}</td>
                            <td>{auto.year}</td>
                            <td>{auto.model.name}</td>
                            <td>{auto.model.manufacturer.name}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
        )
    }
}

export default AutomobileList;