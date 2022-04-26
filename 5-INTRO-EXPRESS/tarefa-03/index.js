// 1 = MODULOS
const express = require("express") // importa o modulo express
const app = express() // instancia o modulo express e armazena em app
const path = require("path") // importa o modulo path

// meus modulos de rotas
const cats = require("./cats")
const dogs = require("./dogs")

// 2 - MIDDLEWARES
// mapeia os static files
app.use(express.static("public"))
// mapeia os modulos de rotas importados
app.use(cats)
app.use(dogs)
const basePath = path.join(__dirname, "templates")

// 3-  ROTA
// home router
app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`) 
})

// configura porta do servidor de testes
app.listen(5000, () => console.log("Servidor online: http://localhost:5000") )