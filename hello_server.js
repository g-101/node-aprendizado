const path = require("path");
const express = require("express");
const app = express(); // app cria uma instancia do express, agora temos acesso as funcionalidades do framework

// o que é arquivo estatico?
// arquivos que são apresentados do mesmo jeito que foram criados
app.use(express.static(path.join(__dirname)));  
// __dirname retorna o caminho do arquivo 
// ele vai procurar por padrão o index.html


// o que é uma rota?
// um caminho para uma aplicação
app.get("/", (req, res) => {
    res.send("hello world!");
})

// sobre seria uma aplicação
app.get("/sobre", (req, res) => {
    res.send("hello world! Aqui é o Sobre");
})
app.get("/ola/:nome?/:cargo?", (req, res) => {
    // res.send("<h1>Olá</h1>" + req.params.nome); // o send envia apenas uma vez em uma rota
    // res.send("<h1>Cargo:</h1>" + req.params.cargo);

    // req.params tem acesso ao parametro da url
    res.send("<h1>Olá</h1>" + req.params.nome + "<h2>Cargo:</h2>" + req.params.cargo);
})
app.listen(3000, () => {
    // uma função callback é executada quando um evento acontece
    console.log("Servidor Hello World rodando! http://localhost:3000");
});