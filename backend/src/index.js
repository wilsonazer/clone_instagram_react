const express  = require('express')
const mongoose =  require('mongoose')
const path = require('path')
const cors = require('cors')

const routes =  require('../routes')

const app = express()
//confiração para o uso de real time com socket.io
const server = require('http').Server(app)
const io = require('socket.io')(server)

//connectando com mongodb usando atlas server
mongoose.connect('mongodb+srv://wilson:51241314@cluster0-noxyc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,  
    useUnifiedTopology: true
})

//middleware para o uso de socket.io em nossas requições
app.use( ( req, res, next )=>{
    req.io = io
    next()
})

//Usando o cors para permitir que nossa aplicação converse com apicações externas
app.use( cors() )

//Adicionando rota para arquivos estático imagens redimencionadas.
app.use('/files', express.static( path.resolve( __dirname, '..' , 'uploads', 'resized' ) ) )

//middleware para nosso arquivo de rotas
app.use( routes )

server.listen(3333, ()=>{ 'server running on port: 3333'})