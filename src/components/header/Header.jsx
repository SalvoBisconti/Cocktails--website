import "./index.scss";
import { useState, useEffect, useRef } from "react";

const Header = ({ scroll }) => {
  return (
    <div className={`Header ${scroll && "scrolled-header"}`}>
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
