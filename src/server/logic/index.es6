import fileHandler from './file-handler.es6'

export default app => {
  app.on('ready', () => {
    fileHandler(app)
  })
}
