const express = require("express")
const router = express.Router()
const path = require("path")


const basePath = path.join(__dirname, "../templates")

router.get("/dogs", (req, res) => {
    res.sendFile(`${basePath}/dogs.html`)
})

module.exports = router