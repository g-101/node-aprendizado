const http = require("http"); //importa o módulo http
const url = require("url");

// cria o server que recebe um callback com os objetos request e response
const server = http.createServer( (req, res) => {
    const urlInfo = url.parse(req.url, true);
    const name = urlInfo.query.name; //busca o parametro name
    res.statusCode = 200; // codigo status http
    res.setHeader("Contenty-Type", "text/html");
    if(!name) {
        // se name tiver vazio, o form é mostrado
        res.end('<h1>Preencha seu nome: </h1><form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"/>')
    }
    else {
        // se name for preenchido, renderiza a mensagem
        res.end(`<h1>Seja bem-vindo ${name}`);
    }
    //para finalizar o middleware:
    res.end();
})

// criar a escuta do servidor na porta 3000
server.listen(3000, () => console.log(`Servidor online: http://localhost:3000`));