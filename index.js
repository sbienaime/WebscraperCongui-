const { app, BrowserWindow } = require('electron');
const  fs  = require('fs');
const {dialog}=require('electron');

//const puppeteer = require('puppeteer');
//var csv = require('csv');
//const CREDS = require('./creds');
//var id=[] ;





function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}



app.on('ready', createWindow)
