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
                }
                appointment.time = `${hours}:${mins} ${amOrPm}`;
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
                <form onSubmit={this.handleSearch.bind(this)} id="service-history-search">
                    <div>
                        <input onChange={this.handleChange.bind(this)} value={this.state.search} required type="text" placeholder="Enter VIN" name="search" className="form-control"/>
                    </div>
                </form>
                <h1 className="my-5">Service history</h1>
                <table className="table my-5 table-striped">
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
                                    <td className="align-middle">{appointment.automobile.vin}</td>
                                    <td className="align-middle">{appointment.customer}</td>
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
