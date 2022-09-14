import React from "react";

class TechnicianForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number: "",
        };
    }

    async handleSubmit(e) {
        e.preventDefault();
        const data = {...this.state};
        const technicianUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(technicianUrl, fetchConfig);

        if (response.ok) {
            const newTechnician = await response.json();
            console.log("new technician successfully created:", newTechnician);
            this.setState({name: "", number: ""});
        } else {
            throw new Error("response not ok (Employee ID must be unique)");
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="container mb-4">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Create a new technician</h1>
                            <form onSubmit={this.handleSubmit.bind(this)} id="create-technician-form">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleChange.bind(this)} value={this.state.name} placeholder="name" required id="name" type="text" name="name" className="form-control" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleChange.bind(this)} value={this.state.number} placeholder="number" required id="number" type="text" name="number" className="form-control" />
                                    <label htmlFor="number">Employee ID</label>
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

export default TechnicianForm;
