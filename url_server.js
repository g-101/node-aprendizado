const http = require("http");
// o modulo nativo url é responsável por fazer parser e formatação de URLs. 
// Irá capturar informações de query string que o usuário informar
const url = require("url");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Dados da query string</h1>");
    const result = url.parse(req.url, true);
    // a função url.parse(request.url, true)
    // fez um parser da URL obtida pela requisição do cliente

    // 
    for (let key in result.query) {
        res.write(`<h2>${key}: ${result.query[key]}</h2>`);
        //pega a query e escreve em formato html na pagina
    }
    // O módulo URL permite capturar diversas
    // informações a respeito das URLs da aplicação. Com base nele,
    // torna-se viável tratar o roteamento de páginas, além de pegar
    // informações via path ou query string.
    res.end();
});
server.listen(3000, () => {
    console.log("Servidor http://localhost:3000");
});