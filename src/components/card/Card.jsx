import "./index.scss";
const Card = ({ data }) => {
  return (
    <div className="Card">
      <img src={data.strDrinkThumb} alt="cocktal image" className="card-img" />
      <h3 className="card-title"> {data.strDrink}</h3>
      <div className="card-ingredients">
        <h4>Ingredients</h4>
        <ul className="incredients-list">
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
