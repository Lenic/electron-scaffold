import { ipcMain, BrowserWindow } from 'electron'

let result = {
  server: ipcMain
}

Object.defineProperty(result, 'sender', {
  get: () => BrowserWindow.getFocusedWindow().webContents
})

module.exports = result
