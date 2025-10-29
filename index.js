const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'src', 'images','Skull.png'),
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  // Load the React app from dist/
  win.loadFile(path.join(__dirname, 'dist/index.html'));
}

app.whenReady().then(createWindow);

