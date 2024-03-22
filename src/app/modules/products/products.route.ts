
import express from "express";
import { ProductController } from "./products.controller";



const router = express.Router()


router.post("/create", ProductController.createProduct);
router.get("/get", ProductController.getAllProduct)
router.get("/:id", ProductController.getSingleProduct)
router.delete("/:id", ProductController.deleteProduct)
router.patch("/:id", ProductController.updateProduct)

export const ProductRoutes = router;