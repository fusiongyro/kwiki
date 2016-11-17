var koa = require('koa');
var webpackDevServer = require('koa-webpack-dev');
var static = require('koa-static');
var app = koa();

app.use(webpackDevServer({
    config: 'serve/webpack.config.js'
}));
app.use(static('.'));

var port = process.env.PORT || 3000;
console.log('Listening on port ' + port);
app.listen(port);

