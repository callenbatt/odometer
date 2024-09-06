const button = document.getElementById("button");

if (!button) throw new Error("Button not found");

button.addEventListener("click", addRotatingClass);

function addRotatingClass() {
  const numberElements = document.querySelectorAll(".number");
  numberElements.forEach((numberElement) => {
    numberElement.classList.toggle("rotating");
  });
}
