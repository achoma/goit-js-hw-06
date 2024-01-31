const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = document.querySelector("#ingredients")
const ingredientsList = []

ingredients.forEach(ingredient => {
const heading = document.createElement("li");
heading.textContent = `${ingredient}`;
ingredientsList.push(heading);

console.log(heading)
})
ingredientsItems.append(...ingredientsList)

