import CardList from "../cardList";
import CategorySelect from "../categorySelect";
import Filter from "../filter";

import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

const Content = ({ setGetItemDetails }) => {
  const [categoryLetter, setCategoryLetter] = useState("A");

  const [cocktailsData, setCocktailsData] = useState([]);
  useEffect(() => {
    GET(`search.php?f=${categoryLetter}`).then(({ drinks }) =>
      setCocktailsData(drinks)
    );
  }, [categoryLetter]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const categoryArray = cocktailsData.map((element) => element.strCategory);
  const filterCategory = categoryArray.filter(
    (category, index) => categoryArray.indexOf(category) === index
  );

  return (
    <div className={styles.Content}>
      <h2 className={styles.title}>Discover the fantastic world of beverage</h2>
      <hr className={styles.line} />
      <CategorySelect
        categoryLetter={categoryLetter}
        setCategoryLetter={setCategoryLetter}
      />
      <Filter
        filterCategory={filterCategory}
        setCategoryFilter={setCategoryFilter}
        categoryFilter={categoryFilter}
      />
      <CardList
        cocktailsData={cocktailsData}
        categoryFilter={categoryFilter}
        setGetItemDetails={setGetItemDetails}
      />
    </div>
  );
};
export default Content;
