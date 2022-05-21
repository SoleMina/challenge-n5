import React from "react";
import "./Footer.scss";

import { useItemsContext } from "../../CartContext";

const Footer = () => {
  const { darkMode } = useItemsContext();

  const date = new Date();
  const currentDate = date.getFullYear();

  return (
    <div className={`footer ${darkMode ? "darkMode" : "lightMode"}`}>
      <div className="footer__info">
        <p className="m-0">All rights reserved - Karina Prado {currentDate}</p>
      </div>
    </div>
  );
};

export default Footer;
