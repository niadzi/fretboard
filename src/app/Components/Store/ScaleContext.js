import React, { createContext, useContext, useState } from "react";

// Create context
const ScaleContext = createContext();

// Custom hook that uses the context
export function useScale() {
  return useContext(ScaleContext);
}

// Provider component
export function ScaleProvider({ children }) {
  const [scale, setScale] = useState(["A", "B", "C#", "D", "E", "F#", "G#"]);
  //const [tonic, setTonic] = useState("A");

  return (
    <ScaleContext.Provider
      value={{
        scale,
        setScale,
        // tonic,
        // setTonic,
      }}
    >
      {children}
    </ScaleContext.Provider>
  );
}

// In your App component
//import { ScaleProvider } from "./ScaleContext";
