module.exports = {
    index( req, res ){
        const user = req.query.name ? req.query.name : 'Visitante'
        res.send(`<h1> Bem vindo ${ user }</h1>`)
    }
}