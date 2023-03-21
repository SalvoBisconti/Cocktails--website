import "./index.scss";
import { RxHamburgerMenu } from "react-icons/rx";

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
      <RxHamburgerMenu className="hamburger-menu" />
    </div>
  );
};
export default Header;
