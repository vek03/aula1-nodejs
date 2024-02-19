var http = require('http')

http.createServer(function(req, res){
    res.end('Mensagem direcionada')
}).listen(8081)

console.log("Servidor está ativo")

var soma = require('./soma.js')
var sub = require('./sub.js')
var mult = require('./mult.js')
var div = require('./div.js')

console.log('soma: ' + soma(10,10))
console.log('sub: ' + sub(10,10))
console.log('mult: ' + mult(10,10))
console.log('div: ' + div(10,10))