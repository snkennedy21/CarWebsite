import React from "react";

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            automobile: "",
            customer: "",
            technician: "",
            date: "",
            time: "",
            reason: "",
            automobiles: [],
            technicians: [],
        };
    }

    async componentDidMount() {
        // populate automobile VIN list
        const automobilesUrl = "http://localhost:8100/api/automobiles/";
        const automobilesResponse = await fetch(automobilesUrl);
        if (automobilesResponse.ok) {
            const automobilesData = await automobilesResponse.json();
            console.log(automobilesData);
            this.setState({automobiles: automobilesData.autos});
        } else {
            throw new Error("automobiles response not ok");
        }
        // populate technician list
        const techniciansUrl = "http://localhost:8080/api/technicians/";
        const techniciansResponse = await fetch(techniciansUrl);
        if (techniciansResponse.ok) {
            const techniciansData = await techniciansResponse.json();
            console.log(techniciansData);
            this.setState({technicians: techniciansData.technicians});
        } else {
            throw new Error("technicians response not ok");
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const data = {...this.state};
        // CHANGE DATA HERE
        data.finished = false;
        const vin = data.automobile;
        const appointmentUrl = `http://localhost:8080/api/appointments/${vin}/`;
        delete data.automobile;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);

        if (response.ok) {
            const newAppointment = await response.json();
            console.log("new appointment successfully created:", newAppointment);
            this.setState({
                automobile: "",
                customer: "",
                technician: "",
                date: "",
                time: "",
                reason: "",
            });
        } else {
            throw new Error("response not ok");
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
                            <h1>Create a new appointment</h1>
                            <form onSubmit={this.handleSubmit.bind(this)} id="create-appointment-form">
                                <div className="mb-3">
                                    <select onChange={this.handleChange.bind(this)} value={this.state.automobile} required placeholder="automobile" name="automobile" id="automobile" className="form-select">
                                        <option value="">Choose an automobile</option>
                                        {this.state.automobiles.map(auto => {
                                            return (
                                                <option key={auto.vin} value={auto.vin}>{auto.vin} - {auto.color} {auto.year} {auto.model.manufacturer.name} {auto.model.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                {/* <div className="form-floating mb-3">
                                    <input onChange={this.handleChange.bind(this)} value={this.state.number} placeholder="number" required id="number" type="number" name="number" className="form-control" />
                                    <label htmlFor="number">Employee number</label>
                                </div> */}
                                <button className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppointmentForm;
