import React from "react";
import { Link } from "react-router-dom"

class ManufacturerList extends React.Component {
    constructor () {
        super();
        this.state = {
            manufacturers: [],
        }
    }

    async componentDidMount() {
        const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(manufacturerUrl);
        if (response.ok) {
            const data = await response.json();
            this.setState({manufacturers: data.manufacturers});
        } else {
            throw new Error("response not ok");
        }
    }

    render () {
        return (
            <div className="my-5 container">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="new">
                    <button className="btn btn-outline-primary">Add a manufacturer</button>
                </Link>
            </div>
            <table className="table my-5 table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.manufacturers.map((manufacturer) => {
                    return (
                        <tr key={manufacturer.href}>
                            <td>{manufacturer.name}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
        )
    }
}

export default ManufacturerList;
