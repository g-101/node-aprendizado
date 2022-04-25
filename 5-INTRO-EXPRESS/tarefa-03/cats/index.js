const express = require("express")
const router = express.Router()
const path = require("path")


const basePath = path.join(__dirname, "../templates")

router.get("/cats", (req, res) => {
    res.sendFile(`${basePath}/cats.html`)
})

module.exports = router