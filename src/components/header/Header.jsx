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
      <MenuList listClass={styles.list} />
      <RxHamburgerMenu
        className={styles.hamburgerMenu}
        onClick={onHandleOpenMenu}
      />
    </div>
  );
};
export default Header;
