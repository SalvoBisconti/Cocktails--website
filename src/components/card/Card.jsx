import "./index.scss";
import { ingredientArrayPopolation } from "../../utils/functions";
const Card = ({ data, setGetItemDetails }) => {
  const onHandleClick = () =>
    setGetItemDetails((prev) => ({
      ...prev,
      itemData: data,
      isVisible: !prev.isVisible,
    }));

  return (
    <div className="Card" onClick={() => onHandleClick()}>
      <img src={data.strDrinkThumb} alt="cocktal image" className="card-img" />
      <h3 className="card-title"> {data.strDrink}</h3>
      <div className="card-ingredients">
        <h4>Ingredients</h4>

        <ul className="incredients-list">
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
        </ul>
        {/* <ul className="incredients-list">
          {ingredientArrayPopolation(data).map((ingredient) => (
            <li key={data.length++} className="card-ingredients">
              {ingredient}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
export default Card;
