chrome.storage.sync.get(
  ["buttonText", "placement", "parentSelector"],
  (data) => {
    const buttonText = data.buttonText || "Click Me";
    const placement = data.placement || "append"; // Default to append
    const parentSelector = data.parentSelector || "body"; // Default to body

    // Create the button
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.style.position = "relative"; // Use relative for non-body placement
    button.style.zIndex = "1000";

    // Add functionality
    button.addEventListener("click", () => {
      alert(`${buttonText} clicked!`);
    });

    // Find the parent element
    const parent = document.querySelector(parentSelector);

    if (parent) {
      // Add button based on placement
      if (placement === "prepend") {
        parent.prepend(button);
      } else {
        parent.appendChild(button);
      }
    } else {
      document.body.appendChild(button);
    }
  }
);
