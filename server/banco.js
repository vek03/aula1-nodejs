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

const Agendamento = sequelize.define('agendamentos',{
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

Agendamento.sync()

module.exports = Agendamento