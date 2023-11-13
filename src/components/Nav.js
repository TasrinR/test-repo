import React, { useContext, useState } from "react";
import { GlobalDataContext } from "../components/hooks/GlobalContext";
import Popup from "./popup";

const Nav = () => {
  const pages = {
    home: { title: "Home", content: "Home page" },
    about: { title: "About", content: "About page" },
    service: { title: "Service", content: "Service page" },
    feature: { title: "Feature", content: "Feature page" },
    priceing: { title: "Pricing", content: "Pricing page" },
    contract: { title: "Contract", content: "Contract page" },
  };
  const [pageObject, setPageObject] = useState({});
  const { popup, setPopup } = useContext(GlobalDataContext);
  const getAllPages = () => {
    const newPages = Object.entries(pages);
    return newPages.map((page) => (
      <>
        <a href={page[0]} onClick={(e) => handleContentChange(e, page[1])}>
          {page[1].title}
        </a>
        <br></br>
      </>
    ));
  };

  const handleContentChange = (e, pageObject) => {
    e.preventDefault();
    setPageObject(pageObject);
    setPopup({ header: pageObject.title, content: pageObject.content });
  };

  return (
    <div>
      {getAllPages()}
      <p>{pageObject.content}</p>
      <Popup>
        <h1> {popup?.header} </h1>
        <p> {popup?.content} </p>
        <button>close</button>
      </Popup>
      <Popup>
        <img src="/logo.svg" />
      </Popup>
    </div>
  );
};

export default Nav;
