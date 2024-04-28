const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 280,
      minWidth: 280,
      height: 280,
      minHeight: 200,
      frame: false,
      transparent: true,
      icon: "icon.png",
    })

    win.loadFile('index.html');
    win.setAlwaysOnTop(true, 'normal');
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})