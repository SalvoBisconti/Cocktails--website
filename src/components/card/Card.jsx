import "./index.scss";
import { ingredientArrayPopolation } from "../../utils/functions";
const Card = ({ data, setGetItemDetails }) => {
  const onHandleDetails = () =>
    setGetItemDetails((prev) => ({
      ...prev,
      itemData: data,
      isVisible: !prev.isVisible,
    }));

  return (
    <div className="Card" onClick={() => onHandleDetails()}>
      <img src={data.strDrinkThumb} alt="cocktal image" className="card-img" />
      <h3 className="card-title"> {data.strDrink}</h3>
      <div className="card-ingredients">
        <h4>Ingredients</h4>

        <ul className="ingredients-list">
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
