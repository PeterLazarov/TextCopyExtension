document.getElementById("save").addEventListener("click", () => {
  const buttonText = document.getElementById("buttonText").value;
  chrome.storage.sync.set({ buttonText }, () => {
    alert("Settings saved!");
  });
});

// Load saved settings
chrome.storage.sync.get("buttonText", (data) => {
  if (data.buttonText) {
    document.getElementById("buttonText").value = data.buttonText;
  }
});
