const express = require("express")
const endpoints = express()



endpoints.use("/", require("./home"))

module.exports = endpoints