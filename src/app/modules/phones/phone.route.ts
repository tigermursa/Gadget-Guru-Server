import express from "express";
import { PhoneController } from "./phone.controller";


const router = express.Router()


router.post("/create", PhoneController.createPhone);
router.get("/get", PhoneController.getAllPhones)
router.get("/:id", PhoneController.getSinglePhone)
router.delete("/:id", PhoneController.deletePhone)
router.patch("/:id", PhoneController.updatePhone)

export const PhoneRoutes = router;