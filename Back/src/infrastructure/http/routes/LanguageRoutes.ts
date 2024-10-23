import { Router } from "express";
import { LanguageController } from "../controllers/LanguageController";

const router = Router();

router.post("/languages", LanguageController.create);

export default router;
