const express = require("express") 
const router = express.Router()
const path = require("path")

const basePath = path.join(__dirname, "../templates")

// aqui são as rotas do endpoint /users
// com o router não há mais necessidade de ter /users/add, apenas /add
router.get("/add", (req, res) => {
    res.sendFile(`${basePath}/user-form.html`)
    
})
// POST
// Metodo para ENVIAR DADOS
router.post("/save", (req, res) => {
    // quando recebemos os dados pelo POST
    // temos acesso ao req.body que é transformado em objeto javascript
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuario é ${name} e tem ${age} anos`)
    res.sendFile(`${basePath}/user-form.html`)
})

router.get("/:id", (req, res) => {
    // :id pode ser qualquer outro nome, porem para usuarios id é comum
    // id é usado como identificador unico em um banco de dados
    const id = req.params.id 
    // req.params mapeia a url e armazena o que foi digitado 
    // nesse caso o id apos / users
    console.log(`Buscando o usuario com id ${id}`)
    
    //vai procurar users.html no path e ler
    res.sendFile(`${basePath}/users.html`) 
})

module.exports = router // exportando o router



