import "./index.scss";
import { ingredientArrayPopolation } from "../../utils/functions";

const ItemDetails = ({ data, setGetItemDetails }) => {
  const onHandleCloseDetails = () => {
    setGetItemDetails((prev) => !prev.isVisible);
  };
  return (
    <div className="ItemDetails">
      <div className="details-image-section">
        <button
          className="details-image-section-btn"
          onClick={onHandleCloseDetails}
        >
          X
        </button>
        <img
          src={data.strDrinkThumb}
          alt={data.strDrink}
          className="details-img"
        />
      </div>
      <div className="details-text">
        <h2> {data.strDrink}</h2>

        <div className="details-text-instructions">
          <h4>Preparation</h4>
          <p>{data.strInstructions}</p>
        </div>

        <div className="details-text-ingredients">
          <h4>Ingredients</h4>
          <ul className="details-text-ingredients-list">
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
