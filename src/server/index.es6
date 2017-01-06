import { app, remote } from 'electron'
import path from 'path'
import url from 'url'
import env from './env.es6'
import createWindow from 'utils/createWindow.es6'

const rootPath = path.resolve('./app')

app.on('ready', function () {
    var mainWindow = createWindow('main', {
        width: 1000,
        height: 600
    })

    mainWindow.loadURL(url.format({
        pathname: path.join(rootPath, __dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    if (env.name === 'development') {
        mainWindow.openDevTools()
    }
})

app.on('window-all-closed', function () {
    app.quit()
})
