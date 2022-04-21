const http = require("http"); //importa o módulo http

// cria o server que recebe um callback com os objetos request e response
const server = http.createServer( (req, res) => {
    res.write("oi http"); // response retorna a string
    //para finalizar o middleware:
    res.end();
})

// criar a escuta do servidor na porta 3000
server.listen(3000, () => console.log(`Servidor online: http://localhost:3000`));