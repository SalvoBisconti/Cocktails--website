export const ingredientArrayPopolation = (cocktailsData) => {
  let ingredientsArray = [];
  for (let i = 0; i < 15; i++) {
    let ingredient = cocktailsData[`strIngredient${i}`];
    if (ingredientsArray !== null) {
      ingredientsArray.push(ingredient);
    }
  }
  return ingredientsArray;
};
