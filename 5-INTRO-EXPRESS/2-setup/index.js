const express = require("express"); 
const app = express(); // Instância o express
const port = 3333;


// Rotas
// O que são Rotas?
// rotas são a ponte entre o usuario e um recurso
// ex: user acessa: www.nossosite.com/produtos
// a rota que codamos ira mostrar tudo que esta em /produtos


app.get("/", (req, res) => {
    // req é a requisição recebida
    // res é a resposta enviada
    res.send("Fsociety") //midleware envia a mensagem como resposta
})


app.listen(port, () => console.log(`Servidor online: http://localhost:${port}`));