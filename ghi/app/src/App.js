import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AppointmentForm from "./Service/AppointmentForm";
import AppointmentList from "./Service/AppointmentList";
import AppointmentHistory from "./Service/AppointmentHistory";
import TechnicianForm from "./Service/TechnicianForm";
import TechnicianList from "./Service/TechnicianList";
import CustomerForm from "./Customers/CustomerForm";
import CustomerList from "./Customers/CustomerList";
import SalesPeopleList from "./SalesPeople/SalesPeopleList";
import SalesPeopleForm from "./SalesPeople/SalesPeopleForm";
import VehicleModelForm from "./Vehicle models/VehicleModelForm";
import VehicleModelList from "./Vehicle models/VehicleModelList";
import ManufacturerForm from "./Manufacturers/ManufacturerForm";
import ManufacturerList from "./Manufacturers/ManufacturerList";
import CreateAutomobile from "./Automobile Inventory/CreateAutomobile";
import AutomobileList from "./Automobile Inventory/AutomobileList";
import SalesForm from "./Sales/SalesForm";
import SalesList from "./Sales/SalesList";

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
            <Route path="" element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="vehicle-models">
            <Route path="" element={<VehicleModelList />} />
            <Route path="new" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route path="" element={<AutomobileList />} />
            <Route path="new" element={<CreateAutomobile />} />
          </Route>
          <Route path="sales">
            <Route path="" element={<SalesList />} />
            <Route path="new" element={<SalesForm />} />
          </Route>
          <Route path="appointments">
            <Route path="" element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
            <Route path="history" element={<AppointmentHistory />} />
          </Route>
          <Route path="technicians">
            <Route path="" element={<TechnicianList />} />
            <Route path="new" element={<TechnicianForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
