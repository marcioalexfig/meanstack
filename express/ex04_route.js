const express = require('express')

const server = express()

server.route("/clientes")
	.get(   (req, res) => {console.log('get..'), res.send('Listar Clientes')} )
	.post(  (req, res) => {console.log('post..'), res.send('Cadastrar Cliente')} )
	.put(   (req, res) => {console.log('put..'), res.send('Alterar Cliente')} )
	.delete((req, res) => {console.log('delete..'), res.send('Deletar Cliente')} )

server.listen(3001, () => console.log('Executando'))