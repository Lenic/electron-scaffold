import { app, ipcRender } from 'electron'

export default {
  label: '&File',
  submenu: [
    {
      label: '&Open',
      accelerator: 'CmdOrCtrl+O',
      click: () => ipcRender.send({ $type: '$open_file' })
    },
    {
      label: '&Quit',
      accelerator: 'CmdOrCtrl+Q',
      click: () => app.quit()
    }
  ]
};
