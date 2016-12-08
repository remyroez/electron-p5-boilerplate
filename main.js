const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow(
		{
			width: 800,
			height: 600,
			//transparent: true,
			//frame: false,
			//resizable: false,
			center: true
		}
	);
	mainWindow.loadURL(`file://${__dirname}/index.html`);
	mainWindow.setMenu(null);
	mainWindow.on('closed', () => { mainWindow = null; });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
