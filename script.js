 const textInput = document.getElementById("text-input");

 const char = document.getElementById("char");

const charCount = document.getElementById("char-count");

function characterCount(text) {
  return text.length;
}   

textInput.addEventListener("input", () => {
  const count = characterCount(textInput.value);
  char.textContent = count;
  if (count >= 50) {
    textInput.style.border = "2px solid red";
    textInput.value = textInput.value.slice(0, 50);
    charCount.style.color = "red";
  }
});

