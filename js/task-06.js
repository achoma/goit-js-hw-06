const inputText = document.querySelector("#validation-input");
const textLength = Number(inputText.dataset.length);
inputText.addEventListener("input", () => {
    
    if (inputText.value.length === textLength) {
        inputText.classList.replace("invalid", "valid");
    } else {
        inputText.classList.add("invalid")
    }
});