import { Router } from "express";
import userRouter from "./user/user.route.js"
import productRouter from "./product/product.route.js"

const router = Router()

router.use('/user', userRouter),
router.use('/product', productRouter)


export default router
