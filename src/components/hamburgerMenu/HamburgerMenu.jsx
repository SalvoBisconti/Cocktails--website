import styles from "./index.module.scss";
import "./index.module.scss";
import MenuList from "../menuList";

const HamburgerMenu = ({
  isHamburgerMenu,
  setIsHamburgerMenu,
  setIsPresentationModal,
}) => {
  const onHandleCloseMenu = () => {
    setIsHamburgerMenu(false);
  };
  const onHandleReservation = () => {
    setIsPresentationModal((prev) => !prev);
    setIsHamburgerMenu((prev) => !prev);
  };

  return (
    <div
      className={` ${styles.HamburgerMenu} ${isHamburgerMenu && styles.show}`}
    >
      <div className={styles.overlay} onClick={onHandleCloseMenu}></div>
      <div className={styles.content}>
        <div className={styles.listSection}>
          <MenuList
            listClass={styles.list}
            prenote={styles.prenoteBtn}
            func={onHandleReservation}
          />
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
