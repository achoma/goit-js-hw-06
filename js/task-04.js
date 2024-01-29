const counter = document.querySelector("#value");

let counterValue = 0;

const decrement = document.querySelector(
  'button[data-action="decrement"]'
);
const increment = document.querySelector(
  'button[data-action="increment"]'
);

decrement.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});

increment.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});