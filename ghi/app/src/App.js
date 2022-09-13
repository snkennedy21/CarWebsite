import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import VehicleModelForm from "./Vehicle models/VehicleModelForm";
import VehicleModelList from "./Vehicle models/VehicleModelList";
import ManufacturerForm from "./Manufacturers/ManufacturerForm";
import ManufacturerList from "./Manufacturers/ManufacturerList";
import AutomobileForm from "./Automobile Inventory/AutomobileForm";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
