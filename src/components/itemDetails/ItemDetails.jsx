import "./index.scss";

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
        <h3> {data.strDrink}</h3>

        <div className="details-text-instructions">
          <h4>Preparation</h4>
          <p>{data.strInstructions}</p>
        </div>

        <div className="details-text-ingredients">
          <h4>Ingredients</h4>
          <ul className="details-text-ingredients-list">
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
