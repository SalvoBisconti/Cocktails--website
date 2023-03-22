import styles from "./index.module.scss";
import "./index.module.scss";
import MenuList from "../menuList";

const HamburgerMenu = ({ isHamburgerMenu, setIsHamburgerMenu }) => {
  const onHandleCloseMenu = () => {
    setIsHamburgerMenu(false);
  };
  return (
    <div
      className={` ${styles.HamburgerMenu} ${isHamburgerMenu && styles.show}`}
    >
      <div className={styles.overlay} onClick={onHandleCloseMenu}></div>
      <div className={styles.content}>
        <div className={styles.listSection}>
          <ul className={styles.list}>
            <li>Menù</li>
            <li>Reviews</li>
            <li>About</li>
            <li>Order</li>
          </ul>
        </div>
        <div className={styles.closeMenuSection}>
          <button className={styles.button} onClick={onHandleCloseMenu}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};
export default HamburgerMenu;
