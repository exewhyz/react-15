import { useState, useContext, createContext } from "react";

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [city, setCity] = useState("Mohali");
  return (
    <DataContext.Provider value={{ city, setCity }}>
      {children}
    </DataContext.Provider>
  );
}
export const useData = () => useContext(DataContext);
