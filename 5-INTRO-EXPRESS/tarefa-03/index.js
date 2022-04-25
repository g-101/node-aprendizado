const express = require("express")
const app = express()
const path = require("path")

const cats = require("./cats")
const dogs = require("./dogs")

app.use(express.static("public"))
const basePath = path.join(__dirname, "templates")

app.use(cats)
app.use(dogs)
// home
app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`) 
})

app.listen(5000, () => console.log("Servidor online: http://localhost:5000") )