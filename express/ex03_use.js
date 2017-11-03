const express = require('express')

const server = express()

server.use('/api', function(req, res, next) {
	console.log("Inicio....")
	next()
	console.log("Fim...")
})

server.use('/api', function(req, res) {
	console.log("Respondendo...")
	res.send('<h1>Teste</h1>')
})

server.listen(3001, () => console.log('Executando'))