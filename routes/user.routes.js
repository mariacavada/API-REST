import { Router } from "express"
import { getUsers, getUser, postUsers, putUser, delUser } from "../controllers/users.controllers.js"
import { validateJWT } from "../utils/jwt.js"

const router = Router()

router.get("/users", validateJWT, getUsers)
router.get("/users/:id", validateJWT, getUser)
router.post("/users", validateJWT, postUsers)
router.put("/users/:id", validateJWT, putUser)
router.delete("/users/:id", validateJWT, delUser)

export default router