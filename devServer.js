// Dev server just for webpack that could possibly be changed to be a production server.
import path from 'path'
import express from 'express'
import webpack from 'webpack'

const config = require('./webpack.config.dev')

const app = express()
const compiler = webpack(config)

const host = 'http://localhost'
const port = process.env.npm_config_port ? process.env.npm_config_port : 3000

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.info('==> Listening on port %s. Open up %s:%s/ in your browser.', port, host, port)
})
