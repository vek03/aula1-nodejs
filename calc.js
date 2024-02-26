var http = require('http')

http.createServer(function(req, res){
    res.end('Mensagem direcionada')
}).listen(8081)

console.log("Servidor está ativo")

var soma = require('./operations/soma.js')
var sub = require('./operations/sub.js')
var mult = require('./operations/mult.js')
var div = require('./operations/div.js')

console.log('soma: ' + soma(10,10))
console.log('sub: ' + sub(10,10))
console.log('mult: ' + mult(10,10))
console.log('div: ' + div(10,10))