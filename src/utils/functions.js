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

// export const takeDate = (data) => {
//   let firstDate = data.date.split("-");
//   let day = firstDate[2].split("T");
//   const prenotationHour = day[1];
//   return prenotationHour;
// };
