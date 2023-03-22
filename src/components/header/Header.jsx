import "./index.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./index.module.scss";
import MenuList from "../menuList";
const Header = ({ scroll, setIsHamburgerMenu }) => {
  const onHandleOpenMenu = () => {
    setIsHamburgerMenu((prev) => !prev);
  };
  return (
    <div className={`${styles.Header} ${scroll && styles.scrolledHeader}`}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
      {/* <MenuList className={styles.list} /> */}
      <ul className={styles.list}>
        <li>Menù</li>
        <li>Reviews</li>
        <li>About</li>
        <li>Order</li>
      </ul>
      <RxHamburgerMenu
        className={styles.hamburgerMenu}
        onClick={onHandleOpenMenu}
      />
    </div>
  );
};
export default Header;
