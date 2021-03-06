import { BrowserWindow } from 'electron';

export default {
  label: 'Development',
  submenu: [
    {
      label: '&Reload',
      accelerator: 'CmdOrCtrl+R',
      click: function () {
        BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
      }
    },
    {
      label: '&Toggle DevTools',
      accelerator: 'Shift+CmdOrCtrl+I',
      click: function () {
        BrowserWindow.getFocusedWindow().toggleDevTools();
      }
    }
  ]
};
