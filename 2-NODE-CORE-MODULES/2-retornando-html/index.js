const http = require("http"); //importa o módulo http

// cria o server que recebe um callback com os objetos request e response
const server = http.createServer( (req, res) => {
    res.statusCode = 200; // codigo status http
    res.setHeader("Contenty-Type", "text/html"); //define um header para a resposta
    //para finalizar o middleware:
    res.end("<h1>Olá, meu primeiro servidor!</h1>"); // response retorna html 
})

// criar a escuta do servidor na porta 3000
server.listen(3000, () => console.log(`Servidor online: http://localhost:3000`));