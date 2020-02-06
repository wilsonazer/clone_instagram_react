const express  = require('express')
const mongoose =  require('mongoose')
const app = express()
const routes =  require('./routes')

mongoose.connect('mongodb+srv://wilson:51241314@cluster0-noxyc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,  
    useUnifiedTopology: true
})

app.use( routes )

app.listen(3333)