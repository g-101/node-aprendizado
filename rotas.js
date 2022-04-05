const http = require("http");
// createServer() é responsável por levantar um servidor
// o callback (req, res) => {} só é executado quando há uma requisição
const server = http.createServer( (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    // req.url retorna uma string 
    // sobre o que foi digitado na barra de endereço do browser.
    if(req.url === "/") {
        res.write("<h1>Home Page</h1>");
    }
    else if(req.url === "/bemvindo") {
        res.write("<h1>Bem vindo =)</h1>");
    }
    else {
        res.write('<img src="https://http.cat/404">');
    }
    res.end();
    // Esses endereços usam padrões para capturar valores na URL.
    // Esses padrões são: query strings ( ?nome=joao ) e path ( /admin ).
    // Em um projeto de grande porte, torna-se cansativo e inviável tratar
    // todas as URLs com if else, principalmente se você precisar
    // construir um tratamento de rotas dinâmicas.
});
// o event-loop verifica constantemente se o servidor foi
// requisitado e, quando recebe uma requisição, ele emite um evento
// para que seja executado o callback.
server.listen(3000, () => {
    console.log("Servidor Hello World rodando! http://localhost:3000");
});
// Servidor está sendo executado na porta 3000 
// e por padrão responde um resultado em html pela rota raiz "/"