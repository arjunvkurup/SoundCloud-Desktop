var electron =  require('electron');
var url = require('url');
var path = require('path');

var {app, BrowserWindow} = electron;

let win;

app.on('ready', function(){
	win = new BrowserWindow({
		minWidth: 1200, 
		minHeight: 800, 
		transparent: true, 
		darkTheme: true, 
		show: false, 
		icon: path.join(__dirname, 'assets/icons/png/256x256.png'),
		webPreferences: {
      		nodeIntegration: true
    	}
	});
	win.setMenu(null);
	win.loadURL('https://soundcloud.com/');
	win.once('ready-to-show', () => {
  		win.show();
  	});
});