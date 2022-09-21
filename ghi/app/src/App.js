import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
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
import { AutomobilesProvider } from "./Contexts/AutomobilesContext";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <AutomobilesProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />

            {/**************************/}
            {/* INVENTORY MICROSERVICE */}
            {/**************************/}
            <Route path="inventory" element={<InventoryPage />} />

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
        </AutomobilesProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
