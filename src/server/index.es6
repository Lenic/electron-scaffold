import { app, remote } from 'electron'
import path from 'path'
import url from 'url'
import createWindow from 'utils/createWindow.es6'

const installExtensions = () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer')
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS

    return Promise.all(['REACT_DEVELOPER_TOOLS'].forEach(v => {
      try {
        return installer.default(installer[v], forceDownload)
      } catch (e) {
        return Promise.reject(e)
      }
    }))
  } else {
    return Promise.resolve()
  }
}

app.on('ready', function () {
  installExtensions()
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log(`An error occurred when add Extension of ${name}:`, err))

  var mainWindow = createWindow('main', {
    width: 1000,
    height: 600
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true
  }))

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools()
  }
})

app.on('window-all-closed', function () {
  return app.quit()
})
