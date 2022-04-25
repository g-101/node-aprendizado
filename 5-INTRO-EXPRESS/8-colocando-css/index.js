// core modules:
const express = require("express") 
const app = express() 
const path = require("path")
// meus modulos:
const users = require("./users") // busca no diretorio o arquivo de rotas

const port = 3333
// middlewares:
app.use( express.urlencoded({
        extended: true,
    }),

)
app.use(express.json())
//Arquivos estaticos ex: javascript, css etc
app.use(express.static("public"))

//midleware ira usar o modulo importado
app.use("/users", users) 
const basePath = path.join(__dirname, "templates")
// rota da home
app.get("/", (req, res) => {
    //vai procurar index.html no path e ler
    res.sendFile(`${basePath}/index.html`) 
})


app.listen(port, () => console.log(`Servidor online: http://localhost:${port}`))