"use strict"

const electron		= require('electron')
const {app} 			= electron
var BrowserWindow	= electron.BrowserWindow;
var mainWindow 		= null;

app.on('ready', function(){
	mainWindow = new BrowserWindow({
		width:500,
		height: 300
	});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
});