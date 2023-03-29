import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.topSection}>
        <img src="/logo.png" alt="logo" className={styles.logo} />
        <ul className={styles.list}>
          <li>About us</li>
          <li>Concacts</li>
          <li>Policy</li>
          <li>Privacy</li>
        </ul>
      </div>

      <div className={styles.bottomSection}>
        <p>Created by Salvo Bisconti. © All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
