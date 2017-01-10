import {server, sender} from 'utils/server.es6'
import { BrowserWindow, dialog } from 'electron'

export default app => {
  server.on('open-file', (event) => {
    let activeWindow = BrowserWindow.getFocusedWindow()
      , opts = {
        title: '打开文件',
        defaultPath: '.',
        properties: ['openFile'],
        filters: [{ name: '内存快照分析', extensions: ['diagsession'] }]
      }

    dialog.showOpenDialog(activeWindow, opts, files => {
      sender.send('opened-file', files[0])
    })
  })
}
