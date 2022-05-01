const express = require("express")
const endpoints = express()



endpoints.use("/home", require("./home"))

module.exports = endpoints