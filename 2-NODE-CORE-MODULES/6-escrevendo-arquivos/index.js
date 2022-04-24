const http = require("http");
const fs = require("fs");
const url = require("url");


// cria o server que recebe um callback com os objetos request e response
const server = http.createServer( (req, res) => {
    const urlInfo = url.parse(req.url, true);
    const name = urlInfo.query.name; //busca o parametro name

    // se name for false, ou seja assim que carregar o input estara vazio
    if(!name) {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Contenty-Type": "text/html" })
            res.write(data)
            res.end() // encerra o middleware
        })
    }
    else {
        // ao entrar o input, escreve no arquivo.txt, usando o parametro name la no html
        fs.writeFile("arquivo.txt", name, () => {
            res.writeHead(302, { Location: "/"})
            res.end()
        })
    }
    

})

// criar a escuta do servidor na porta 3000
server.listen(3000, () => console.log(`Servidor online: http://localhost:3000`));