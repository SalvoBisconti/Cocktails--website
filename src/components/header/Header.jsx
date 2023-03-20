import "./index.scss";
import { useState } from "react";

const Header = () => {
  return (
    <div className="Header">
      <img src="../../../public/logo.png" alt="logo" className="header-logo" />
      <ul className="header-list">
        <li>Menù</li>
        <li>Reviews</li>
        <li>About</li>
        <li>Order</li>
      </ul>
    </div>
  );
};
export default Header;
