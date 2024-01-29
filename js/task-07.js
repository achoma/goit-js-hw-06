
const textSize = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

textSize.addEventListener("input", (event) => {
textElement.style.fontSize =`${textSize.value}px`;
});