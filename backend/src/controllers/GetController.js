module.exports = {
    index( req, res ){
        res.send(`<h1> Bem vindo ${ req.query.name }</h1>`)
    }
}