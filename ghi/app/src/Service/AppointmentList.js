import React from "react";

class AppointmentList extends React.Component {
    constructor () {
        super();
        this.state = {
            appointments: [],
            automobiles: [],
        }
    }

    async handleCancel(e) {
        const href = e.target.value;
        const url = `http://localhost:8080${href}`;
        const fetchConfig = {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            this.setState({appointments: this.state.appointments.filter(appointment => appointment.href !== href)});
            console.log(`Appointment successfully deleted: ${href}`);
        }
    }

    async handleFinished(e) {
        const href = e.target.value;
        const url = `http://localhost:8080${href}`
        const fetchConfig = {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"finished": true}),
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            this.setState({appointments: this.state.appointments.filter(appointment => appointment.href !== href)});
            console.log(`Appointment successfully marked as finished: ${href}`)
        }
    }

    async componentDidMount() {
        const appointmentsUrl = "http://localhost:8080/api/appointments/";
        const customersUrl = "http://localhost:8090/api/customer/";
        const automobilesUrl = "http://localhost:8100/api/automobiles/";
        const automobilesResponse = await fetch(automobilesUrl);
        const automobilesData = await automobilesResponse.json();
        const customerResponse = await fetch(customersUrl);
        const customerData = await customerResponse.json();
        const response = await fetch(appointmentsUrl);
        if (response.ok && automobilesResponse.ok && customerResponse.ok) {
            const data = await response.json();
            data.appointments.map(appointment => {
                // change timefield to look nicer
                var hours = appointment.time.slice(0,2);
                var mins = appointment.time.slice(3,5);
                var amOrPm = Number(hours) < 12 ? "a.m." : "p.m.";
                if (hours === "00") {
                    hours = "12"; // in case some insane person is getting work done between 12a-1a (after setting am/pm)
                } else if (Number(hours) >= 13) {
                    hours = String(Number(hours)-12); // translate from military time
                }
                appointment.time = `${hours}:${mins} ${amOrPm}`;
                // change customer to match customer name
                appointment.customer = customerData.find(customer => customer.id == appointment.customer);
                // add is_sold attribute if appointment VIN matches sales record
                appointment.is_VIP = automobilesData.autos.filter(auto => auto.is_sold).map(auto => auto.vin).includes(appointment.vin)
            });
            this.setState({
                appointments: data.appointments,
            });
        } else {
            throw new Error("something is not ok");
        }
    }

    render () {
        return (
            <div className="my-5 container">
                <h1>Service appointments</h1>
                <table className="table my-5 table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Customer name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.filter(appointment => !appointment.finished).map((appointment) => {
                            return (
                                <tr key={appointment.href}>
                                    <td className={appointment.is_VIP ? "align-middle text-success font-weight-bold" : "align-middle"}>{appointment.vin}</td>
                                    <td className={appointment.is_VIP ? "align-middle text-success font-weight-bold" : "align-middle"}>{appointment.customer.name}</td>
                                    <td className={appointment.is_VIP ? "align-middle text-success font-weight-bold" : "align-middle"}>{appointment.date}</td>
                                    <td className={appointment.is_VIP ? "align-middle text-success font-weight-bold" : "align-middle"}>{appointment.time}</td>
                                    <td className={appointment.is_VIP ? "align-middle text-success font-weight-bold" : "align-middle"}>{appointment.technician.name}</td>
                                    <td className={appointment.is_VIP ? "align-middle text-success font-weight-bold" : "align-middle"}>{appointment.reason}</td>
                                    <td className="align-middle">
                                        <div className="btn-group" role="group" aria-label="Cancel/Finished">
                                            <button type="button" className="btn btn-danger" onClick={this.handleCancel.bind(this)} value={appointment.href}>Cancel</button>
                                            <button type="button" className="btn btn-success" onClick={this.handleFinished.bind(this)} value={appointment.href}>Finished</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="my-3 text-center text-success font-weight-bold"><p>VIP customers in green</p></div>
            </div>
        )
    }
}

export default AppointmentList;
