'use strict';

const electron = require('electron');
const {app, BrowserWindow} = electron;
const isDev = require('electron-is-dev');

if (isDev) {
	require('electron-reload')(__dirname);
}

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
	mainWindow.on('closed', () => { mainWindow = null; });
	if (!isDev) {
		mainWindow.setMenu(null);
	}
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
