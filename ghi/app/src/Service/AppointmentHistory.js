import React from "react";

class AppointmentHistory extends React.Component {
    constructor () {
        super();
        this.state = {
            search: "",
            appointments: [],
        }
    }

    async handleSearch(e) {
        e.preventDefault();
        // search for automobiles by VIN
        const searchUrl = `http://localhost:8080/api/appointments/${this.state.search}/`;
        const searchResponse = await fetch(searchUrl);
        const customersUrl = "http://localhost:8090/api/customer/";
        const customerResponse = await fetch(customersUrl);
        const customerData = await customerResponse.json();
        if (searchResponse.ok) {
            const data = await searchResponse.json();
            // change timefield to look nicer
            data.appointments.map(appointment => {
                var hours = appointment.time.slice(0,2);
                var mins = appointment.time.slice(3,5);
                var amOrPm = Number(hours) < 12 ? "a.m." : "p.m.";
                if (hours === "00") {
                    hours = "12"; // in case some insane person is getting work done between 12a-1a (after setting am/pm)
                } else if (Number(hours) >= 13) {
                    hours = String(Number(hours)-12); // translate from military time
                } else {
                    hours = String(Number(hours));
                }
                appointment.time = `${hours}:${mins} ${amOrPm}`;
                // change customer field to match customer name
                appointment.customer = customerData.find(customer => customer.id == appointment.customer);
            });
            this.setState({appointments: data.appointments});
        } else {
            throw new Error("search response not ok");
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render () {
        return (
            <div className="my-5 container">
                <h1 className="my-2">Service history</h1>
                <form className="d-flex" onSubmit={this.handleSearch.bind(this)} id="service-history-search">
                    <input onChange={this.handleChange.bind(this)} value={this.state.search} required type="search" placeholder="Enter VIN" name="search" className="form-control"/>
                    <button className="btn btn-outline-success me-2 my-sm-0" type="submit">Search</button>
                </form>
                <table className="table my-3 table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Customer name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.map((appointment) => {
                            return (
                                <tr key={appointment.href}>
                                    <td className="align-middle">{appointment.vin}</td>
                                    <td className="align-middle">{appointment.customer.name}</td>
                                    <td className="align-middle">{appointment.date}</td>
                                    <td className="align-middle">{appointment.time}</td>
                                    <td className="align-middle">{appointment.technician.name}</td>
                                    <td className="align-middle">{appointment.reason}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AppointmentHistory;
