//Primeiro importando nosso post model
const Post =  require('../models/Post')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

//metodos que serão executados no nosso routes.js
module.exports = {
//metodo index lista todos os posts o sinal de menos antes de createdAt ordena em ordena em ordem decrescente    
    async index( req, res ){
        const posts = await Post.find().sort('-createdAt')
        res.json( posts )
    },

/**
 * Método asincrono store tem muitas coisas acontecendo.  Primeiro usamos a desestruturação para pegar os 
 * campos vindos do body e também o nosso campo de imagem que é do tipo file. 
 * Usamos o sharp para redimencionar nossa imagem e o fs.unlinkSync para apagar a imagem original.
 * Cadastramos as informações recebidas no banco usando nosso Model Post.create().
 * Criamos um alerta em tempo real passando nossos dados do post para req.io.emmit, o primeiro parâmetro é o nome
 * para podermos usar essa informação no frontend e o segundo o próprio post.
 */    
    async store( req, res ){
        const { author, place, description, hastags }  = req.body
        const { filename: image } = req.file
        
        const [ name ] = image.split('.')
        const fileName = `${ name }.jpg`

        //usando sharp para redimensionar imagem
        await sharp( req.file.path )
           .resize(500)
           .jpeg( { quality: 70 })
           .toFile( 
               path.resolve( req.file.destination, 'resized', fileName ) 
            )
        fs.unlinkSync( req.file.path )    

        try{
            const post = await Post.create({
                author,
                place,
                description,
                hastags,
                image: fileName
            })
            req.io.emit('post', post)
            
            return res.json( post )

        }catch(e){
            colole.log('erro : '+ e)
        }
        
    }
}