import { ipcMain } from 'electron'

export default function register(target) {
  let keys = Object.keys(target)
  keys.forEach(key => {
    if (key.indexOf('$') === 0) {
      exec(key, target)
    }
  })
}

function exec(key, target) {
  ipcMain.on(key, (event, payload) =>
    target[key].call(target, result => event.sender.send(key, result), payload))
}
