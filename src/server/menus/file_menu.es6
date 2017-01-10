import { app } from 'electron'
import {server} from 'utils/server.es6'

export default {
  label: '&File',
  submenu: [
    {
      label: '&Open',
      accelerator: 'CmdOrCtrl+O',
      click: () => server.emit('open-file')
    },
    {
      label: '&Quit',
      accelerator: 'CmdOrCtrl+Q',
      click: () => app.quit()
    }
  ]
};
