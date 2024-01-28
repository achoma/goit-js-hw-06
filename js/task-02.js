const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = document.querySelector("#ingredients")


// const heading = document.createElement("h2");
// heading.textContent = "Ingredients:";
// ulItems.before(heading);
// const items = ingredients.map((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.className = "item";
//   return item;
// });
// ulItems.append(...items);
// //////////////////////////////////////////////////// 
// const elements = [];
// ingredients.forEach(ingredient => {
//   const newLi = document.createElement("li");
//    newLi.textContent = ingredient;
//    newLi.classList.add("item");
//   elements.push(newLi)
//   })
//   ulIngredients.append(...elements);

// Napisz skrypt, który dla każdego 
// elementu tablicy ingredients:

// Utworzy oddzielny element <li>. Obowiązkowo użyj 
// metody document.createElement().
// Doda nazwę elementu (string z tablicy) jako jego 
// zawartość tekstową.
// Doda do elementu klasę item.
// Następnie jedna operacja umieści wszystkie <li> 
// na liście ul#ingredients.