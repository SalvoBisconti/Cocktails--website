import CardList from "../cardList";
import Filter from "../filter";
import Card from "../card/Card";
import "./index.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

const Content = () => {
  const [cocktailsData, setCocktailsData] = useState([]);
  useEffect(() => {
    GET("search.php?f=a").then(({ drinks }) => setCocktailsData(drinks));
  }, []);
  const [categoryFilter, setCategoryFilter] = useState("");
  const categoryArray = cocktailsData.map((element) => element.strCategory);
  const filterCategory = categoryArray.filter(
    (category, index) => categoryArray.indexOf(category) === index
  );

  //   const ingredientsArray = cocktailsData.filter(
  //     (ingredient) => ingredient.strIngredient6 !== null
  //   );

  //   const a = cocktailsData.map((element) => {
  //     if (element.strIngredient8 !== null) return element;
  //   });

  return (
    <div className="Content">
      <Filter
        filterCategory={filterCategory}
        setCategoryFilter={setCategoryFilter}
        categoryFilter={categoryFilter}
      />
      <CardList cocktailsData={cocktailsData} categoryFilter={categoryFilter} />
    </div>
  );
};
export default Content;
