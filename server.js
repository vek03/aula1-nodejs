const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send('Node JS')
})

app.get("/cadastrar", (req, res) => {
    res.send('Página de Cadastro')
})

app.get("/listar", (req, res) => {
    res.send('Página de Listar')
})

app.get("/editar", (req, res) => {
    res.send('Página de Editar')
})

app.post("/editar", (req, res) => {
    res.send('Editando...')
})

app.post("/deletar", (req, res) => {
    res.send('Deletando...')
})

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081')
})