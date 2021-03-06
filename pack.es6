import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import { spawn } from 'child_process'

import config from './webpack.config.render'

const app = express()
const compiler = webpack(config)
const PORT = process.env.PORT || 3000

const wdm = webpackDevMiddleware(compiler, {
  publicPath: '/assets/',
  stats: {
    colors: true,
    chunks: false
  }
})

app.use(wdm)

app.use(webpackHotMiddleware(compiler))

const server = app.listen(PORT, 'localhost', serverError => {
  if (serverError) {
    return console.error(serverError)
  }

  if (process.env.LAUNCH) {
    spawn('npm', ['run', 'start:launch'], { shell: true, env: process.env, stdio: 'inherit' })
      .on('close', code => process.exit(code))
      .on('error', spawnError => console.error(spawnError))
  }

  console.log(`Listening at http://localhost:${PORT}`)
})

process.on('SIGTERM', () => {
  console.log('Stopping dev server')
  wdm.close()
  server.close(() => {
    process.exit(0)
  })
})
