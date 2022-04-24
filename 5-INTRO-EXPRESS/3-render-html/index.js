const express = require("express"); 
const app = express() // Instância o express
const port = 3333
const path = require("path")

// o diretorio base é o 3-render-html que vai procurar o arquivo dentro de templates
const basePath = path.join(__dirname, "templates")
// Rotas
// O que são Rotas?
// rotas são a ponte entre o usuario e um recurso
// ex: user acessa a url: www.nossosite.com/produtos
// a rota que codamos ira mostrar tudo que esta em /produtos
app.get("/", (req, res) => {
    //vai procurar index.html no path e ler
    res.sendFile(`${basePath}/index.html`) //midleware envia a mensagem como resposta
})


app.listen(port, () => console.log(`Servidor online: http://localhost:${port}`));