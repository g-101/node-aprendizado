const express = require("express")
const exphbs = require("express-handlebars")

const app = express()


// O que é TEMPLATE ENGINE?
// facilita criação de paginas html, deixando mais dinamica
// podendo fazer o uso da linguagem e logica de programação


//mapeia o template engine
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
    res.render("home", { layout:false } ) // iniciando com falso pois n temos layout
})

app.listen(3000, () => console.log("Servidor online: http://localhost:3000") )