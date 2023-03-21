import CardList from "../cardList";
import Filter from "../filter";

import "./index.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

const Content = ({ setGetItemDetails }) => {
  const [cocktailsData, setCocktailsData] = useState([]);
  useEffect(() => {
    GET("search.php?f=d").then(({ drinks }) => setCocktailsData(drinks));
  }, []);
  const [categoryFilter, setCategoryFilter] = useState("");
  const categoryArray = cocktailsData.map((element) => element.strCategory);
  const filterCategory = categoryArray.filter(
    (category, index) => categoryArray.indexOf(category) === index
  );

  return (
    <div className="Content">
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
