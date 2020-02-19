console.log('Olá')

const http = require('http')
const moduloTeste = require("./moduloTeste.js")

const server = http.createServer(function (req, res) {
    if(req.url == "/contato"){
        moduloTeste.ola()
        console.log(moduloTeste.ola())

        return res.end("Voce acessou a pagina contato!")
    }
    console.log(req)

    res.end("Voce acessou a pagina inicial!")
})

server.listen(3030, "localhost", () =>
    console.log("Server on localhost:3030"))