const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send('Node JS')
})

app.get("/contato", (req, res) => {
    res.send('Página de Contato')
})

app.get("/cadastrar/:item/:name/:price/:qtdd", (req, res) => {
    res.send('Página de Cadastro' + 
    '<br><br>Item: ' + req.params.item +
    '<br><br>Nome: ' + req.params.name +
    '<br><br>Preço: ' + req.params.price +
    '<br><br>Quantidade: ' + req.params.qtdd)
})

app.get("/listar", (req, res) => {
    res.send('Página de Listar')
})

app.get("/editar/:item", (req, res) => {
    res.send('Página de Editar<br> Item: ' + req.params.item)
})

app.post("/editar:item", (req, res) => {
    res.send('Editando...')
})

app.post("/deletar:item", (req, res) => {
    res.send('Deletando...')
})

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081')
})