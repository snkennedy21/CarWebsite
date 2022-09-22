import React, { useState, useContext, useEffect } from "react";

const AutomobilesContext = React.createContext();
const AutomobilesUpdateContext = React.createContext();
const AutomobilesRenderContext = React.createContext();

export function useAutomobiles() {
  return useContext(AutomobilesContext);
}

export function useAutomobilesUpdate() {
  return useContext(AutomobilesUpdateContext);
}

export function useAutomobilesUnsold() {
  return useContext(AutomobilesRenderContext);
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

  function updateAutomobilesArrayHandler(newAutomobile) {
    setAutomobilesArray((prevState) => {
      return [...prevState, newAutomobile];
    });
  }

  function renderUnsoldAutomobiles(unsoldAutomobiles) {
    console.log("unsolde automobiles", unsoldAutomobiles);
    setAutomobilesArray(unsoldAutomobiles);
    console.log(automobilesArray);
  }

  return (
    <AutomobilesContext.Provider value={automobilesArray}>
      <AutomobilesUpdateContext.Provider value={updateAutomobilesArrayHandler}>
        <AutomobilesRenderContext.Provider value={renderUnsoldAutomobiles}>
          {children}
        </AutomobilesRenderContext.Provider>
      </AutomobilesUpdateContext.Provider>
    </AutomobilesContext.Provider>
  );
}
