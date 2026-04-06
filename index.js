import express from "express"

const app = express()

app.get("/",(req,res) =>{res.send("Hola mundo desde la API")})

const PORT = 8000

app.listen(PORT,console.log("http://localhost:"+PORT))