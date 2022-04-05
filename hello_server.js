const http = require("http");
// createServer() é responsável por levantar um servidor
// o callback (req, res) => {} só é executado quando há uma requisição
const server = http.createServer( (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>hello world</h1>");
    res.end();
});
// o event-loop verifica constantemente se o servidor foi
// requisitado e, quando recebe uma requisição, ele emite um evento
// para que seja executado o callback.
server.listen(3000, () => {
    console.log("Servidor Hello World rodando! http://localhost:3000");
});
// Servidor está sendo executado na porta 3000 
// e por padrão responde um resultado em html pela rota raiz "/"