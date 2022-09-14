import React from "react";

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: "",
            customer: "",
            customers: [],
            technician: "",
            date: "",
            time: "",
            reason: "",
            technicians: [],
        };
    }

    async componentDidMount() {
        const customersUrl = "http://localhost:8090/api/customer/";
        const customersReponse = await fetch(customersUrl);
        if (customersReponse.ok) {
            const customersData = await customersReponse.json();
            this.setState({ customers: customersData });
          }

        // populate technician list
        const techniciansUrl = "http://localhost:8080/api/technicians/";
        const techniciansResponse = await fetch(techniciansUrl);
        if (techniciansResponse.ok) {
            const techniciansData = await techniciansResponse.json();
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
        const appointmentUrl = `http://localhost:8080/api/appointments/${data.vin}/`;
        delete data.vin;
        delete data.technicians;
        delete data.customers;
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
                vin: "",
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
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleChange.bind(this)} value={this.state.vin} placeholder="Enter VIN" required id="vin" type="text" name="vin" className="form-control" />
                                    <label htmlFor="vin">Enter VIN</label>
                                </div>
                                <div className="mb-3">
                                    <select onChange={this.handleChange.bind(this)} value={this.state.customer} required placeholder="customer" name="customer" id="customer" className="form-select">
                                        <option value="">Choose a customer</option>
                                        {this.state.customers.map(customer => {
                                            return (
                                                <option key={customer.id} value={customer.id}>{customer.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleChange.bind(this)} value={this.state.date} placeholder="date" required id="date" type="date" name="date" className="form-control" />
                                    <label htmlFor="date">Date</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleChange.bind(this)} value={this.state.time} placeholder="time" required id="time" type="time" name="time" className="form-control" />
                                    <label htmlFor="time">Time</label>
                                </div>
                                <div className="mb-3">
                                    <select onChange={this.handleChange.bind(this)} value={this.state.technician} required placeholder="technician" name="technician" id="technician" className="form-select">
                                        <option value="">Choose a technician</option>
                                        {this.state.technicians.map(technician => {
                                            return (
                                                <option key={technician.number} value={technician.number}>{technician.name} ({technician.number})</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleChange.bind(this)} value={this.state.reason} placeholder="reason" required id="reason" type="text" name="reason" className="form-control" />
                                    <label htmlFor="reason">Reason</label>
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

export default AppointmentForm;
