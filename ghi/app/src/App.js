import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import VehicleModelForm from "./Vehicle models/VehicleModelForm";
import VehicleModelList from "./Vehicle models/VehicleModelList";
import ManufacturerForm from './Manufacturers/ManufacturerForm';
import ManufacturerList from './Manufacturers/ManufacturerList';
import AutomobileForm from "./Automobile Inventory/AutomobileForm";
import AutomobileList from './Automobile Inventory/AutomobileList';
import AppointmentForm from "./Service/AppointmentForm";
import AppointmentList from "./Service/AppointmentList";
import TechnicianForm from "./Service/TechnicianForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route path="" element={<ManufacturerList/>} />
            <Route path="new" element={<ManufacturerForm/>} />
          </Route>
          <Route path="vehicle-models">
            <Route path="" element={<VehicleModelList/>} />
            <Route path="new" element={<VehicleModelForm/>} />
          </Route>
          <Route path="automobiles">
            <Route path="" element={<AutomobileList/>} />
            <Route path="new" element={<AutomobileForm/>} />
          </Route>
          <Route path="appointments">
            <Route path="" element={<AppointmentList/>} />
            <Route path="new" element={<AppointmentForm/>} />
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
