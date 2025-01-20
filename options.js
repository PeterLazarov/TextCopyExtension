document.getElementById("save").addEventListener("click", () => {
  const buttonText = document.getElementById("buttonText").value;
  const placement = document.getElementById("placement").value;
  const parentSelector = document.getElementById("parentSelector").value;

  chrome.storage.sync.set({ buttonText, placement, parentSelector }, () => {
    alert("Settings saved!");
  });
});

// Load saved settings
chrome.storage.sync.get(
  ["buttonText", "placement", "parentSelector"],
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
  }
);
