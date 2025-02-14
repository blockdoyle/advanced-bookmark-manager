const { ipcRenderer } = require("electron");

document.getElementById("test-button").addEventListener("click", () => {
  ipcRenderer.invoke(
    "show-notification",
    "Here's a notification like you asked!"
  );
});
