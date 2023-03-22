import "./index.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./index.module.scss";

const Header = ({ scroll }) => {
  return (
    <div className={`${styles.Header} ${scroll && styles.scrolledHeader}`}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
      <ul className={styles.list}>
        <li>Menù</li>
        <li>Reviews</li>
        <li>About</li>
        <li>Order</li>
      </ul>
      <RxHamburgerMenu className={styles.hamburgerMenu} />
    </div>
  );
};
export default Header;
