import { Router } from "express";
import {getUser, getUsers, postUser, putUser, delUser} from "../controllers/users.controllers.js"

const router = Router()

router.get("/users",getUsers)
router.get("/users/:id",getUser)
router.post("/user",postUser)
router.put("/users/:id",putUser)
router.delete("/users/:id",delUser)

export default router