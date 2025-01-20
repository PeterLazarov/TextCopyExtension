document.getElementById("save").addEventListener("click", () => {
  const buttonText = document.getElementById("buttonText").value;
  const placement = document.getElementById("placement").value;
  const parentSelector = document.getElementById("parentSelector").value;
  const contentSelector = document.getElementById("contentSelector").value;

  chrome.storage.sync.set(
    { buttonText, placement, parentSelector, contentSelector },
    () => {
      alert("Settings saved!");
    }
  );
});

// Load saved settings
chrome.storage.sync.get(
  ["buttonText", "placement", "parentSelector", "contentSelector"],
  (data) => {
    if (data.buttonText) {
      document.getElementById("buttonText").value = data.buttonText;
    }
    if (data.placement) {
      document.getElementById("placement").value = data.placement;
    }
    if (data.parentSelector) {
      document.getElementById("parentSelector").value = data.parentSelector;
    }
    if (data.contentSelector) {
      document.getElementById("contentSelector").value = data.contentSelector;
    }
  }
);
