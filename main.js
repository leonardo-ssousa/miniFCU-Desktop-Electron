const { app, BrowserWindow, nativeTheme, screen } = require('electron')
const fs = require("fs")
const { execFile } = require("child_process")

const path = `C:/Users/leona/OneDrive/Documentos/Projeto MiniFCU 2024/volumeMixer - Server C#/miniFCUServer/bin/Debug/MiniFCUServer.exe`
const openServer = () =>{
    execFile(path, [],(error, stdout, stderr) => {
      if (error) {
        console.log(error);
        
      }
      console.log(stdout);
    })
}

const createWindow = () => {
  const display = screen.getPrimaryDisplay()

  const win = new BrowserWindow({
    height: display.size.height/100*80,
    width: 600,
    minWidth: 600,
    maxWidth: 600,
    resizable: true,
    autoHideMenuBar: true,
  })

  win.loadURL("http://localhost:5173")
  openServer()
}

app.whenReady().then(() => {
  nativeTheme.themeSource = "system"
  createWindow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
    openServer.kill
})