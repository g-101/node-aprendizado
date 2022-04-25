const express = require("express") 
const app = express() 
const port = 3333
const path = require("path")

const basePath = path.join(__dirname, "templates")
const checkAuth = function(req, res, next) {
    
    req.authStatus = false // isso é apenas para exemplificar uma autenticação
    if(req.authStatus) {
        console.log("está logado")
        next() // o next passa para o proximo, que nesse contexto é a rota "/"
        
    } 
    else {
        console.log("não está logado, faça o login para continuar")
        next() // se não existir o next() a requisição fica em loop e não continua o codigo
    }
    
    

}
app.use(checkAuth)
// o metodo .use() executa nossos middlewares 



// Rotas
// O que são Rotas?
// rotas são a ponte entre o usuario e um recurso
// ex: user acessa a url: www.nossosite.com/produtos
// a rota que codamos ira mostrar tudo que esta em /produtos
app.get("/", (req, res) => {
    //vai procurar index.html no path e ler
    res.sendFile(`${basePath}/index.html`) 
})


app.listen(port, () => console.log(`Servidor online: http://localhost:${port}`))