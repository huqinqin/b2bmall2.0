/**
 * Created by wangmin on 2017/5/7.
 */

//每次编译需要手动将dist 文件copy dev
var http = require('http'),
  express = require('express'),
  path = require('path'),
  httpProxy = require('http-proxy'),
  servestatic = require('serve-static')

var proxy = httpProxy.createProxyServer({
  target: 'http://localhost:8780'
})
var app = express()
app.use(servestatic('dev', { redirect: false,index:'index.html' }))
app.use(function(req, res, next) {
  proxy.web(req, res)
})

proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Something went wrong. And we are reporting a custom error message.');
});

var server = http.createServer(app)
server.listen(4001)
server.on('error', function(e) {
  console.log(e)
})
server.on('listening', function() {
  var addr = server.address()
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log('Listening on ' + bind)
})
