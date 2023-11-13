import { createContext, useState } from "react";

export const GlobalDataContext = createContext();

const GlobalDataProvider = ({ children }) => {
  const [popup, setPopup] = useState();

  return (
    <GlobalDataContext.Provider value={{ popup, setPopup }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
