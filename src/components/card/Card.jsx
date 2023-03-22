import styles from "./index.module.scss";
import { ingredientArrayPopolation } from "../../utils/functions";
import "./index.module.scss";

const Card = ({ data, setGetItemDetails }) => {
  const onHandleDetails = () =>
    setGetItemDetails((prev) => ({
      ...prev,
      itemData: data,
      isVisible: !prev.isVisible,
    }));

  return (
    <div className={styles.Card} onClick={() => onHandleDetails()}>
      <div className={styles.flipbox}>
        <div className={styles.front}>
          <img
            src={data.strDrinkThumb}
            alt="cocktal image"
            className={styles.image}
          />
          <h3 className={styles.title}> {data.strDrink}</h3>
        </div>

        <div className={styles.retro}>
          <h3 className={styles.title}> {data.strDrink}</h3>
          <h3 className={styles.retroTitle}>Ingredients</h3>

          <ul className={styles.ingredientsList}>
            {console.log(ingredientArrayPopolation(data))}
            {ingredientArrayPopolation(data).map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Card;
