import { Router } from "express";

import * as userController from "./user.controller.js"

const router = Router()

router.post('/create', userController.create)
router.get('/read', userController.read)
router.put('/update',userController.update)
router.post('/getuser', userController.getUser)
router.post('/edit', userController.editUser)
router.post('/insert', userController.insertUser)

export default router