import Card from "../card/Card";
import "./index.scss";

const CardList = ({ cocktailsData, categoryFilter, setGetItemDetails }) => {
  return (
    <div className="CardList">
      {!categoryFilter
        ? cocktailsData.map((cocktail) => (
            <Card
              data={cocktail}
              key={cocktailsData.length++}
              setGetItemDetails={setGetItemDetails}
            />
          ))
        : cocktailsData
            .filter((category) => categoryFilter === category.strCategory)
            .map((cocktail) => (
              <Card
                data={cocktail}
                key={cocktailsData.length++}
                setGetItemDetails={setGetItemDetails}
              />
            ))}
    </div>
  );
};
export default CardList;
