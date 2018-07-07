const {BrowserWindow, app} = require('electron');
const path = require('path');
const config = require(path.join(__dirname, 'package.json'));

let win = null;
app.setName(config.name);
app.on('ready', () => {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: 'lightgray',
    title: config.productName,
    // show: false,
    webPreferences: {
      // nodeIntegration: false,
      contextIsolation: true,
      defaultEncoding: 'UTF-8'
    }
  });
  // win.setMenu(null);

  // and load the index.html of the app.
  win.loadFile('views/index.html');

  // Emitted when the window is closed.
  win.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});