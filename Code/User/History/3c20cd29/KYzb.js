const express = require("express")
const app = express()

app.listen(3000,console.log("Server on"))

app.get("/", (req,res)=> res.send("Pagina de bienvenida"))