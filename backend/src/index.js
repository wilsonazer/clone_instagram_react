const express  = require('express')
const mongoose =  require('mongoose')
const path = require('path')
const cors = require('cors')

const routes =  require('../routes')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb+srv://wilson:51241314@cluster0-noxyc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,  
    useUnifiedTopology: true
})

app.use( ( req, res, next )=>{
    req.io = io
    next()
})

app.use( cors() )
//Adicionando rota para arquivos estático imagens redimencionadas.
app.use('/files', express.static( path.resolve( __dirname, '..' , 'uploads', 'resized' ) ) )
app.use( routes )

server.listen(3333, ()=>{ 'server running on port: 3333'})