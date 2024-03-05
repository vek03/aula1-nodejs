const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'exemplo_bd',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

sequelize.authenticate().then(function(){
    console.log('Servidor Ativo!')
}).catch(function(e){
    console.log('Falha ao conectar: ' + e)
})

const agendamentos = sequelize.define('agendamentos',{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    }
})

agendamentos.sync()

var create = function(nome, endereco, bairro, cep, cidade, estado){
    agendamentos.create({
        nome: nome,
        endereco: endereco,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        estado: estado,
    })
}

module.exports = create