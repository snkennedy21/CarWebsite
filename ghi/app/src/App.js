import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AppointmentForm from "./Service/AppointmentForm";
import AppointmentList from "./Service/AppointmentList";
import AppointmentHistory from "./Service/AppointmentHistory";
import TechnicianForm from "./Service/TechnicianForm";
import CustomerForm from "./Customers/CustomerForm";
import CustomerList from "./Customers/CustomerList";
import SalesPeopleList from "./SalesPeople/SalesPeopleList";
import SalesPeopleForm from "./SalesPeople/SalesPeopleForm";
import VehicleModelFormFunction from "./Vehicle models/VehicleModelFormFunction";
import VehicleModelListFunction from "./Vehicle models/VehicleModelListFunction";
import ManufacturerFormFunction from "./Manufacturers/ManufacturerFormFunction";
import ManufacturerListFunction from "./Manufacturers/ManufacturerListFunction";
import AutomobileFormFunction from "./Automobile Inventory/AutomobileFormFunction";
import AutomobileListFunction from "./Automobile Inventory/AutomobileListFunction";
import SalesFormFunction from "./Sales/SalesFormFunction";
import SalesListFunction from "./Sales/SalesListFunction";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="customers">
            <Route path="" element={<CustomerList />} />
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="sales-people">
            <Route path="" element={<SalesPeopleList />} />
            <Route path="new" element={<SalesPeopleForm />} />
          </Route>
          <Route path="manufacturers">
            <Route path="" element={<ManufacturerListFunction />} />
            <Route path="new" element={<ManufacturerFormFunction />} />
          </Route>
          <Route path="vehicle-models">
            <Route path="" element={<VehicleModelListFunction />} />
            <Route path="new" element={<VehicleModelFormFunction />} />
          </Route>
          <Route path="automobiles">
            <Route path="" element={<AutomobileListFunction />} />
            <Route path="new" element={<AutomobileFormFunction />} />
          </Route>
          <Route path="sales">
            <Route path="" element={<SalesListFunction />} />
            <Route path="new" element={<SalesFormFunction />} />
          </Route>
          <Route path="appointments">
            <Route path="" element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
            <Route path="history" element={<AppointmentHistory />} />
          </Route>
          <Route path="technicians">
            <Route path="new" element={<TechnicianForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
