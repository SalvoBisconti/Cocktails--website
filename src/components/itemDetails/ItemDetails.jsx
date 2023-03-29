import { ingredientArrayPopolation } from "../../utils/functions";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import styles from "./index.module.scss";

const ItemDetails = ({ data, setGetItemDetails }) => {
  const onHandleCloseDetails = () => {
    setGetItemDetails((prev) => !prev.isVisible);
  };
  return (
    <div className={styles.ItemDetails}>
      <div className={styles.imageSection}>
        <BsFillArrowLeftSquareFill
          className={styles.button}
          onClick={onHandleCloseDetails}
        />
        <img
          src={data.strDrinkThumb}
          alt={data.strDrink}
          className={styles.image}
        />
      </div>
      <div className={styles.text}>
        <h2> {data.strDrink}</h2>

        <div className={styles.instruction}>
          <h4>Preparation</h4>
          <p>{data.strInstructions}</p>
        </div>

        <div className={styles.ingredients}>
          <h4>Ingredients</h4>
          <ul className={styles.ingredientsList}>
            {console.log(ingredientArrayPopolation(data))}
            {ingredientArrayPopolation(data).map((ingredient, i) => (
              <li key={i} className="card-ingredients">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
