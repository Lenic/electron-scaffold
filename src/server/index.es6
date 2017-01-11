import { app } from 'electron'
import path from 'path'
import url from 'url'

import createWindow from 'utils/createWindow.es6'

import setMenus from './menus/index.es6'
import logic from './logic/index.es6'

app.on('ready', function () {
  logic()
  setMenus()
  installExtensions()

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

const installExtensions = () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer')
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS
    const extensions = ['REACT_DEVELOPER_TOOLS']

    extensions.forEach(v => {
      try {
        installer.default(installer[v], forceDownload)
          .then((name) => console.log(`Added Extension:  ${name}`))
          .catch((err) => console.log(`An error occurred when add Extension of ${v}:`, err))
      } catch (e) { }
    })
  }
}
