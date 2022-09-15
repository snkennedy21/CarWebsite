import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
