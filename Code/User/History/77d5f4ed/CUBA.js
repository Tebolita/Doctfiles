const express = require("express")
const endpoints = express()



endpoints.use("/Home", require("./home"))

module.exports = endpoints