const express = require('express')
const app = express()

var create = require('./banco.js')

app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/cadastrar/agendamento", (req, res) => {
    res.sendFile(__dirname + '/cadastrar-agendamento.html')
})

app.get("/cadastrar/agendamento/:nome/:endereco/:bairro/:cep/:cidade/:estado", (req, res) => {
    
    res.send('R: ' + req.params.nome)
    create(req.params.nome, req.params.endereco, req.params.bairro, req.params.cep, req.params.cidade, req.params.estado)

    res.send('Agendamento Cadastrado!')
    //return res.sendFile(__dirname + '/cadastrar-agendamento.html')
})

app.get("/cadastrar/agendamento/cad/?nome=:nome", (req, res) => {
    
    res.send('R: ' + req.params.nome)
    create(req.params.nome, req.params.endereco, req.params.bairro, req.params.cep, req.params.cidade, req.params.estado)

    res.send('Agendamento Cadastrado!')
    //return res.sendFile(__dirname + '/cadastrar-agendamento.html')
})

app.post("/cadastrar/agendamento/", async (req, res) => {
    
    const {nome, endereco, bairro, cep, cidade, estado} = req.body
    create(nome, endereco, bairro, cep, cidade, estado)

    res.send('Agendamento Cadastrado!')
    //return res.sendFile(__dirname + '/cadastrar-agendamento.html')
})

app.get("/pesquisar/produto/modelo/:prod", (req, res) => {
    res.sendFile(__dirname + '/modelo-prod.html/' + req.params.prod)
})

app.get("/contato/sac/produto/:prod", (req, res) => {
    res.sendFile(__dirname + '/contato-sac.html/' + req.params.prod)
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