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
      <img
        src={data.strDrinkThumb}
        alt="cocktal image"
        className={styles.image}
      />
      <h3 className={styles.title}> {data.strDrink}</h3>
      <div className={styles.ingredients}>
        <h4>Ingredients</h4>

        <ul className={styles.ingredientsList}>
          {console.log(ingredientArrayPopolation(data))}
          {ingredientArrayPopolation(data).map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Card;
