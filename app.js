const express = require('express');
const bp = require('cookie-parser');
const cp = require('cookie-parser');
const axi = require('axios');
const fallback = require('express-history-api-fallback');
const port = (process.env.PORT || 3000);


const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(cp());

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
