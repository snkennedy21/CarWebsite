import React, { useState, useContext, useEffect } from "react";

const AutomobilesArrayContext = React.createContext();
const AutomobilesArrayAddContext = React.createContext();
const AutomobilesArrayRemoveContext = React.createContext();

export function useAutomobilesArray() {
  return useContext(AutomobilesArrayContext);
}

export function useAutomobilesArrayAdd() {
  return useContext(AutomobilesArrayAddContext);
}

export function useAutomobilesArrayRemove() {
  return useContext(AutomobilesArrayRemoveContext);
}

export function AutomobilesProvider({ children }) {
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

  function addNewAutomobileToAutomobilesArrayHandler(newAutomobile) {
    setAutomobilesArray((prevState) => {
      return [...prevState, newAutomobile];
    });
  }

  function removeSoldAutomobileFromAutomobilesArrayHandler(unsoldAutomobiles) {
    console.log("updated automobiles", unsoldAutomobiles);
    setAutomobilesArray(unsoldAutomobiles);
  }

  return (
    <AutomobilesArrayContext.Provider value={automobilesArray}>
      <AutomobilesArrayAddContext.Provider
        value={addNewAutomobileToAutomobilesArrayHandler}
      >
        <AutomobilesArrayRemoveContext.Provider
          value={removeSoldAutomobileFromAutomobilesArrayHandler}
        >
          {children}
        </AutomobilesArrayRemoveContext.Provider>
      </AutomobilesArrayAddContext.Provider>
    </AutomobilesArrayContext.Provider>
  );
}
