import { Router } from "express";
import * as ProductController from "./product.controller.js";

const router = Router();

router.get('/getproduct', ProductController.read);

export default router