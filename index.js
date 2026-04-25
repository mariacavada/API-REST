import "dotenv/config"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import indexRoutes from "./routes/index.routes.js"
import userRoutes from "./routes/user.routes.js"
import loginRoutes from "./routes/login.routes.js"
import { connectDB } from "./utils/db.js"

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(indexRoutes)
app.use(userRoutes)
app.use(loginRoutes)

const PORT = 8000

app.listen(PORT,console.log("http://localhost:"+PORT))