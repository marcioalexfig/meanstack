const express = require('express')

const server = express()

server.get('/', function(req, res) {
	res.send('<h1>Index: h1 do html no express</h1>')
})

server.all('/teste', function(req, res) {
	res.send('<h1>Teste</h1>')
})

server.listen(3001, () => console.log('Executando'))