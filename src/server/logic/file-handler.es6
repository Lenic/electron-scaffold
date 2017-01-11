import { BrowserWindow, dialog } from 'electron'

export default {
  $open_file: function (done) {
    let activeWindow = BrowserWindow.getFocusedWindow()
      , opts = {
        title: '打开文件',
        defaultPath: '.',
        properties: ['openFile'],
        filters: [{ name: '内存快照分析', extensions: ['diagsession'] }]
      }

    dialog.showOpenDialog(activeWindow, opts, files => {
      done(files && files.length && files[0])
    })
  }
}
