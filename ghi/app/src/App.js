import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import VehicleModelForm from "./Vehicle models/VehicleModelForm";
import VehicleModelList from "./Vehicle models/VehicleModelList";
import AutomobileForm from "./Automobile Inventory/AutomobileForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="vehicle-models/">
            <Route path="" element={<VehicleModelList />} />
            <Route path="new/" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles/">
            <Route path="" element={<VehicleModelList />} />
            <Route path="new/" element={<AutomobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
