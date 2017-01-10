import { app, remote, Menu } from 'electron'
import path from 'path'
import url from 'url'
import DevMenu from './menus/dev_menu.es6'
import FileMenu from './menus/file_menu.es6'
import createWindow from 'utils/createWindow.es6'
import logic from './logic/index.es6'

logic(app)

app.on('ready', function () {
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

const setMenus = () => {
  let menus = [FileMenu]
  if (process.env.NODE_ENV === 'development') {
    menus.push(DevMenu)
  }

  Menu.setApplicationMenu(Menu.buildFromTemplate(menus))
}
