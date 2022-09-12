import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import VehicleModelform from "./Vehicle models/VehicleModelForm";
import VehicleModelList from "./Vehicle models/VehicleModelList";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="vehicle-models/" element={<VehicleModelList />}>
            <Route path="vehicle-models/new/" element={<VehicleModelform />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
