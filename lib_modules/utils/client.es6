import { ipcRenderer } from 'electron'

export default function (payload, tick = 10000) {
  let channel = `$${payload.$type}`
    , deferred = {}

  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve
    deferred.reject = reject
  })

  ipcRenderer.send(channel, payload)

  let callback = (event, result) => deferred.resolve(result)
  ipcRenderer.once(channel, callback)

  let waiter = new Promise(function (resolve, reject) {
    setTimeout(function () {
      ipcRenderer.removeListener(channel, callback)
      reject()
    }, tick)
  })
  return Promise.race([deferred.promise, waiter])
}

export var global = {
  on: function (channelName, listener) {
    ipcRenderer.on(channelName, listener)
  },
  off: function (channelName, listener) {
    ipcRenderer.removeListener(channelName, listener)
  }
}
