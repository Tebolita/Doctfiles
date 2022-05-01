const express = require('express')
const app = express()
const firebaseconfig = require('./config')

const fireApp = firebaseconfig.initializeApp.initializeApp(firebaseconfig.firebaseconfig)

app.set("port", 3000 )
app.listen(app.get("port"), console.log("Server On"))
