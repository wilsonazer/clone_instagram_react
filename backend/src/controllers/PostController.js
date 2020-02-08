//Primeiro importando nosso post model
const Post =  require('../models/Post')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

//metodos que serão executados no nosso routes.js
module.exports = {
    async index( req, res ){
        const posts = await Post.find().sort('-createAt')
        res.json( posts )
    },
    async store( req, res ){
        const { author, place, description, hastags }  = req.body
        const { filename: image } = req.file

        await sharp( req.file.path )
           .resize(500)
           .jpeg( { quality: 70 })
           .toFile( 
               path.resolve( req.file.destination, 'resized', image ) 
            )

        const post = await Post.create({
            author,
            place,
            description,
            hastags,
            image
        })
    
        return res.json( post )
    }
}