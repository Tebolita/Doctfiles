const express = require("express")
const app = express()



app.use("/Home", require("./home"))

module.exports = app