export const ingredientArrayPopolation = (cocktailsData) => {
  let ingredientsArray = [];
  for (let i = 1; i <= 15; i++) {
    let ingredient = cocktailsData[`strIngredient${i}`];
    if (ingredient !== null) {
      ingredientsArray.push(ingredient);
    }
  }
  return ingredientsArray;
};
