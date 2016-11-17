var koa = require('koa');
var static = require('koa-static');
var Wiki = require('../model/wiki.js');
var app = koa();

var wiki = new Wiki("root");

app.use(function*(next) {
    console.dir(this);
    this.type = "text/html";
    this.body = wiki.getPage(this.request.url);
});
app.use(static('.'));

var port = process.env.PORT || 3000;
console.log('Listening on port ' + port);
app.listen(port);

