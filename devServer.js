// Dev server just for webpack that could possibly be changed to be a production server.
import express from 'express'
import path from 'path'

const app = express()
const port = process.env.npm_config_port || 3000
const root = path.join(__dirname, 'dist')

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable global-require */
  const webpack = require('webpack')
  const webpackConfig = require('./webpack.config.dev')

  const compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    noInfo: true,
    stats: 'minimal',
  }))

  app.use(require('webpack-hot-middleware')(compiler))
  /* eslint-enable global-require */
}

app.use(express.static(root))

app.get('/*', (req, res) => {
  res.sendFile('index.html', {
    root,
  })
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
})
