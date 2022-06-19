import getRandomColor from "./utils";

export default function initApp() {
  const body = document.querySelector("body");
  console.log(body);
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "Change page color";
  body.append(button);
  button.addEventListener("click", () => {
    body.style.backgroundColor = getRandomColor();
  });
}
