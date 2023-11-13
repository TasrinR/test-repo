import React, { useContext } from "react";
import { GlobalDataContext } from "./hooks/GlobalContext";

const Popup = ({ children }) => {
  const { setPopup } = useContext(GlobalDataContext);
  const handleClose = () => {
    setPopup()
  };
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: "200px",
        background: "blue",
        left: "500px",
        height: "400px",
        width: "400px",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default Popup;
