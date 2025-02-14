// imports
const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");

// window options
const loadMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));
};

// load the application window
app.on("ready", loadMainWindow);

// end process on window close
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// load the application window on app start
app.on("active", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    loadMainWindow();
  }
});

// handle notification
ipcMain.handle("show-notification", (event, message) => {
  new Notification({ title: "Notification", body: message }).show();
});
