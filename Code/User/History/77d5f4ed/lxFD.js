const express = require("express")
const endpoints = express()



endpoints.use("/watch", require("./home"))

module.exports = endpoints