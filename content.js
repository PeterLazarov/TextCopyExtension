chrome.storage.sync.get(
  ["buttonText", "placement", "parentSelector", "contentSelector"],
  (data) => {
    const buttonText = data.buttonText || "Click Me";
    const placement = data.placement || "append"; // Default to append
    const parentSelector = data.parentSelector || "body"; // Default to body
    const contentSelector = data.contentSelector || ""; // Default to empty if not set

    // Create the button
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.style.zIndex = "1000";
    button.style.backgroundColor = "#2E294E";

    // Add functionality to copy content on button click
    button.addEventListener("click", () => {
      if (contentSelector) {
        const contentElement = document.querySelector(contentSelector);
        if (contentElement) {
          const content = contentElement.textContent;
          console.log({ content });
          navigator.clipboard.writeText(content);
        }
      }
    });

    // Find the parent element and append or prepend the button
    const parent = document.querySelector(parentSelector) || document.body;

    if (parent) {
      if (placement === "prepend") {
        parent.prepend(button);
      } else {
        parent.appendChild(button);
      }
    } else {
      console.error(`Parent element not found for selector: ${parentSelector}`);
    }
  }
);
