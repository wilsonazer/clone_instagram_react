//Primeiro importando nosso post model
const Post =  require('../models/Post')

//metodos que serão executados no nosso routes.js
module.exports = {
    async index( req, res ){

    },

    async store( req, res ){
        console.log( req.body )
        return res.json( { ok: true} )
    }
}