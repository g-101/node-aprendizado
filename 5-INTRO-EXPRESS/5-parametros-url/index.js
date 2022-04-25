const express = require("express") 
const app = express() 
const port = 3333
const path = require("path")

const basePath = path.join(__dirname, "templates")

app.get("/users/:id", (req, res) => {
    // :id pode ser qualquer outro nome, porem para usuarios id é comum
    // id é usado como identificador unico em um banco de dados
    const id = req.params.id 
    // req.params mapeia a url e armazena o que foi digitado 
    // nesse caso o id apos / users
    console.log(`Buscando o usuario com id ${id}`)
    
    //vai procurar users.html no path e ler
    res.sendFile(`${basePath}/users.html`) 
})

app.get("/", (req, res) => {
    //vai procurar index.html no path e ler
    res.sendFile(`${basePath}/index.html`) 
})

app.listen(port, () => console.log(`Servidor online: http://localhost:${port}`))