const button = document.createElement("button");
button.textContent = "Click Me";
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
button.style.zIndex = "1000";
button.style.backgroundColor = "#2E294E";

// Add functionality
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// Add to the page
document.body.appendChild(button);
