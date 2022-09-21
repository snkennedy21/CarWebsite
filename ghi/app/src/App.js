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
import VehicleModelList from "./InventoryMicroservice/Vehicle models/VehicleModelList";
import ManufacturerList from "./InventoryMicroservice/Manufacturers/ManufacturerList";
import AutomobileList from "./InventoryMicroservice/Automobile Inventory/AutomobileList";
import SalesForm from "./Sales/SalesForm";
import SalesList from "./Sales/SalesList";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          {/**************************/}
          {/* INVENTORY MICROSERVICE */}
          {/**************************/}
          <Route path="manufacturers" element={<ManufacturerList />} />
          <Route path="vehicle-models" element={<VehicleModelList />} />
          <Route path="automobiles" element={<AutomobileList />} />

          <Route path="customers">
            <Route path="" element={<CustomerList />} />
            <Route path="new" element={<CustomerForm />} />
          </Route>

          <Route path="sales-people">
            <Route path="" element={<SalesPeopleList />} />
            <Route path="new" element={<SalesPeopleForm />} />
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
