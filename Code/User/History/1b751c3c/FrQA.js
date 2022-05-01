const express = require('express')
const app = express()
const endpoints = require('./endpoints/index')



app.use(endpoints)
app.set("port", 3000 )
app.listen(app.get("port"), console.log("Server On"))

