const express = require('express');
var fallback = require('express-history-api-fallback');
const port = (process.env.PORT || 3000);
const app = express();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackHotMiddleware(compiler));
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPathdist
}));

app.use(fallback(__dirname + '/assets/index.html'));
app.get('/', function (_, res) { res.sendFile(__dirname + './assets/index.html')});

app.listen(port);
