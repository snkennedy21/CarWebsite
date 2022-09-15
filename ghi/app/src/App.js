import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import VehicleModelFormFunction from "./Vehicle models/VehicleModelFormFunction";
import VehicleModelListFunction from "./Vehicle models/VehicleModelListFunction";
import ManufacturerFormFunction from "./Manufacturers/ManufacturerFormFunction";
import ManufacturerListFunction from "./Manufacturers/ManufacturerListFunction";
import AutomobileForm from "./Automobile Inventory/AutomobileForm";
import AutomobileListFunction from "./Automobile Inventory/AutomobileListFunction";
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
            <Route path="" element={<ManufacturerListFunction />} />
            <Route path="new" element={<ManufacturerFormFunction />} />
          </Route>
          <Route path="vehicle-models">
            <Route path="" element={<VehicleModelListFunction />} />
            <Route path="new" element={<VehicleModelFormFunction />} />
          </Route>
          <Route path="automobiles">
            <Route path="" element={<AutomobileListFunction />} />
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
