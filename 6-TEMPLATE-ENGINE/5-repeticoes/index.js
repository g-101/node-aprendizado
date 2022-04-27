const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//mapeia o template engine
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
    const user = {
        name: "Angela",
        surname: "Silva",
        age: 30,
    }
    const teste = "teste hahahh"
    const auth = true
    // vai renderizar as variaveis que eu colocar
    res.render("home", { user:user, teste, auth })
})

app.get("/dashboard", (req, res) => {
    const items = ["item A", "item B", "item C"]
    res.render("dashboard", { items })
})


app.listen(3000, () => console.log("Servidor online: http://localhost:3000") )