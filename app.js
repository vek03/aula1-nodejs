//IMPORTS
const express = require('express')
const bodyParser = require('body-parser')
var Agendamento = require('./server/banco.js')

//Inicia os imports
const app = express()
app.use(express.static('public'))
app.use(express.json())

//Iniciando Middleware que recolhe os dados do formulário via POST
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//ROTAS
//Página Inicial
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


//CREATE
app.get("/cadastrar/agendamento", (req, res) => {
    res.sendFile(__dirname + '/views/cadastrar-agendamento.html')
})

app.post("/cadastrar/agendamento", async (req, res) => {
    Agendamento.create(req.body)

    res.redirect('/listar/agendamentos');
})


//READ
app.get("/pesquisar/agendamento", (req, res) => {
    res.sendFile(__dirname + '/views/pesquisar-agendamento.html')
})

app.get("/pesquisar", async (req, res) => {
    try {
        const {nome} = req.query

        const agendamento = await Agendamento.findOne({
            where: { nome: nome } 
        })

        if(!agendamento){
            res.send('<h1>Agendamento Não Encontrado!</h1> <br><br> <a href="/">Home</a>')
        }else{
            res.send(`
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Editar - Agendamento</title>
                </head>
                <body>
                    <h1>Editar - Produto</h1>
                    <a href="/"><h3>Home</h3></a>

                    <form action="/editar/agendamento" method="POST">
                        <label for="id">ID</label><br>
                        <input type="text" name="id" id="id" value="` + agendamento.id + `" required readonly>    
                        
                        <br>
                        <br>

                        <label for="nome">Nome</label><br>
                        <input type="text" name="nome" id="nome" value="` + agendamento.nome + `" required>
                
                        <br>
                        <br>
                
                        <label for="cep">CEP</label><br>
                        <input type="text" name="cep" id="cep"  value="` + agendamento.cep + `" required>
                
                        <br>
                        <br>
                
                        <label for="endereco">Endereco</label><br>
                        <input type="text" name="endereco" id="endereco"  value="` + agendamento.endereco + `" readonly required>
                
                        <br>
                        <br>
                
                        <label for="bairro">Bairro</label><br>
                        <input type="text" name="bairro" id="bairro"  value="` + agendamento.bairro + `" readonly required>
                
                        <br>
                        <br>
                
                        <label for="cidade">Cidade</label><br>
                        <input type="text" name="cidade" id="cidade"  value="` + agendamento.cidade + `" readonly  required>
                
                        <br>
                        <br>
                
                        <label for="estado">Estado</label><br>
                        <input type="text" name="estado" id="estado"  value="` + agendamento.estado + `" readonly  required>
                
                        <br>
                        <br>
                
                        <button type="submit">Enviar<button>
                    </form>
                
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                    <script src="../js/script.js"></script>
                </body>
                </html>
            `)
        }

        
    }catch(error){
        res.status(400).json({ error: error.message });
    }
})


//LIST
app.get("/listar/agendamentos", async (req, res) => {
    try {
        const agendamentos = await Agendamento.findAll()
        var a
        agendamentos.forEach(element => {
            a += 
            `
                <tr>
                    <td>` + element.id + `</td>
                    <td>` + element.nome + `</td>
                    <td>` + element.endereco + `</td>
                    <td>` + element.cep + `</td>
                    <td>` + element.bairro + `</td>
                    <td>` + element.cidade + `</td>
                    <td>` + element.estado + `</td>
                    <td>
                        <form action="/deletar/agendamento/` + element.id + `" method="POST">
                            <button type="button">
                                <a href="/pesquisar?nome=` + element.nome + `">Editar</a>
                            </button>    
                            <button type="submit">
                                Deletar
                            </button>
                        </form>
                    </td>
                </tr>
            `
        });
            

        const b = `
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Exibir - Agendamento</title>
            </head>
            <body>
                <h1>Listar - Agendamentos</h1>
                <a href="/"><h3>Home</h3></a>

                <table border="1">
                    <thead>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Endereco</th>
                        <th>CEP</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Ação</th>
                    </thead>
                    <tbody>
                        `
                        +
                        a
                        +
                        `
                    </tbody>
                </table>
            </body>
            </html>
        `;

        res.send(b)
    }catch(error){
        res.status(400).json({ error: error.message });
    }
})


//UPDATE
app.post("/editar/agendamento", async (req, res) => {
    const agendamento = await Agendamento.findByPk(req.body.id)

    agendamento.update(req.body)

    res.redirect('/listar/agendamentos');
})


//DELETE
app.post("/deletar/agendamento/:id", async (req, res) => {
    const agendamento = await Agendamento.findByPk(req.params.id);

    if(!agendamento){
        res.send('<h1>Agendamento Não Encontrado!</h1> <br><br> <a href="/">Home</a>')
    }else{
        res.send('<h1>Agendamento Excluído!</h1> <br><br> <a href="/">Home</a>')
    }

    agendamento.destroy();
})



//ABRINDO SERVIDOR
app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081')
})