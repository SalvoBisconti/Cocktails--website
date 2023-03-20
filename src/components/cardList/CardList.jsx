import Card from "../card/Card";
import "./index.scss";

const CardList = ({ cocktailsData, categoryFilter }) => {
  return (
    <div className="CardList">
      {!categoryFilter
        ? cocktailsData.map((cocktail) => (
            <Card data={cocktail} key={cocktailsData.length++} />
          ))
        : cocktailsData
            .filter((category) => categoryFilter === category.strCategory)
            .map((cocktail) => (
              <Card data={cocktail} key={cocktailsData.length++} />
            ))}
    </div>
  );
};
export default CardList;
