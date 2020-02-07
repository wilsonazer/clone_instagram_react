//Primeiro importando nosso post model
const Post =  require('../models/Post')

//metodos que serão executados no nosso routes.js
module.exports = {
    async index( req, res ){

    },
    async store( req, res ){
        const { author, place, description, hastags }  = req.body
        const { filename: image } = req.file

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