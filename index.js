import express from "express"
import morgan from "morgan"
import indexRoutes from "./routes/index.routes.js"

const app = express()

app.use(morgan("dev"))
app.use(indexRoutes)

const PORT = 8000

app.listen(PORT,console.log("http://localhost:"+PORT))