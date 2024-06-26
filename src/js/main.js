const { app, BrowserWindow } = require("electron");
const path = require("path");
app.on("ready", () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webviewTag: true,
        },
    });

    mainWindow.loadFile("index.html");
    mainWindow.setIcon(path.join(__dirname, "icon.png"));
    app.dock.setIcon(path.join(__dirname, "icon.png"));
});
