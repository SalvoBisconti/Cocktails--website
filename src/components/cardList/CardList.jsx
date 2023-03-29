import Card from "../card/Card";
import styles from "./index.module.scss";

const CardList = ({ cocktailsData, categoryFilter, setGetItemDetails }) => {
  return (
    <div className={styles.CardList}>
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
