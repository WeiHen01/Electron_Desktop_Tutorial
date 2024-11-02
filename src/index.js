const { app, BrowserWindow } = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 850,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        frame: true,
        icon: __dirname + './Images/Icon.jpg', //icon for the application
        
    });
    mainWindow.setMenu(null);
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadURL(__dirname + `/View/Home.html`); // def

    try {
        require('electron-reloader')(module)
    } 
    catch (_) {
        
    }
}

app.whenReady().then(createWindow);