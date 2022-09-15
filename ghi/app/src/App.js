import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import VehicleModelForm from "./Vehicle models/VehicleModelForm";
import VehicleModelList from "./Vehicle models/VehicleModelList";
import ManufacturerForm from "./Manufacturers/ManufacturerForm";
import ManufacturerList from "./Manufacturers/ManufacturerList";
import AutomobileForm from "./Automobile Inventory/AutomobileForm";
import AutomobileList from "./Automobile Inventory/AutomobileList";
import AppointmentForm from "./Service/AppointmentForm";
import AppointmentList from "./Service/AppointmentList";
import AppointmentHistory from "./Service/AppointmentHistory";
import TechnicianForm from "./Service/TechnicianForm";
import SalesForm from "./Sales/SalesForm";
import SalesList from "./Sales/SalesList";
import CustomerForm from "./Sales/CustomerForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="customers">
            <Route path="new" element={<CustomerForm />} />
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
            <Route path="new" element={<AutomobileForm />} />
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
            <Route path="new" element={<TechnicianForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
