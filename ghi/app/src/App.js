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
import SalesForm from "./Sales/SalesForm";
import SalesList from "./Sales/SalesList";
import InventoryPage from "./InventoryMicroservice/InventoryPage";
import { useState, useEffect } from "react";

function App() {
  const [automobilesArray, setAutomobilesArray] = useState([]);

  async function fetchAutomobileData() {
    const automobilessUrl = "http://localhost:8100/api/automobiles/";
    const automobilesResponse = await fetch(automobilessUrl);

    if (automobilesResponse.ok) {
      const automobilesData = await automobilesResponse.json();
      setAutomobilesArray(automobilesData.autos);
    }
  }

  useEffect(() => {
    fetchAutomobileData();
  }, []);

  function updateAutomobilesArrayHandler(newAutomobile) {
    setAutomobilesArray((prevState) => {
      return [...prevState, newAutomobile];
    });
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          {/**************************/}
          {/* INVENTORY MICROSERVICE */}
          {/**************************/}
          <Route
            path="inventory"
            element={
              <InventoryPage
                updateAutomobilesArray={updateAutomobilesArrayHandler}
                automobilesArray={automobilesArray}
              />
            }
          />

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
