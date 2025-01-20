chrome.storage.sync.get("buttonText", (data) => {
  const buttonText = data.buttonText || "Click Me";

  // Create the button
  const button = document.createElement("button");
  button.textContent = buttonText;
  button.style.position = "fixed";
  button.style.top = "10px";
  button.style.right = "10px";
  button.style.zIndex = "1000";
  // button.style.backgroundColor = "#2E294E";

  // Add functionality
  button.addEventListener("click", () => {
    alert(`${buttonText} clicked!`);
  });

  // Add to the page
  document.body.appendChild(button);
});
