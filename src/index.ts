import { app, BrowserWindow, ipcMain } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;


if (require('electron-squirrel-startup')) {
  app.quit();
}


const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    width: 1360,
    height: 768,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: true
    },
    titleBarStyle: 'hidden',
    titleBarOverlay: {

      color: '#3b3b3b',
      symbolColor: '#FFFFFF',
      height: 35,

    },
    backgroundColor: '#121212'
  });
  mainWindow.removeMenu()
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools()
};





function init() {



  app.on('ready', createWindow);
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.whenReady().then(() => {
    ipcMain.on('set-title', (event, arg) => {
      console.log('obteniendo esto')
    })
  })

}



init()