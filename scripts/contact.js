const submitButton = document.querySelector("#submit-button");
const main = document.querySelector("main");

submitButton.addEventListener("click", function() {
  const message = document.createElement("p");
  message.textContent = "Thank you for your message";
  message.style.fontSize = "24px";
  main.innerHTML = "";
  main.appendChild(message);
});
