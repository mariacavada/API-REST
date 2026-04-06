import { Router } from "express";
import { abc, hola, womp } from "../controllers/index.controllers.js";

const router = Router()

router.get("/", hola)
router.get("/womp", womp)
router.get("/abc", abc)

export default router