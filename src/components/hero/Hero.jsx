import "./index.module.scss";
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.overlay}></div>
      <img
        src="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/11/02114003/whiskey-cocktails-2-1600x900.jpeg"
        alt="hero image"
        className={styles.image}
      />
      <div className={styles.text}>
        <h1> Cocktails</h1>
        <p>...drink responsibly</p>
      </div>
    </div>
  );
};
export default Hero;
