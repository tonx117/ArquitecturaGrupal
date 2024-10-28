import { Router, Request, Response } from "express";
import { LanguageController } from "../controllers/LanguageController";
import { LanguageService } from "../../../domain/Services/LanguageService";
import { LanguageRepository } from "../../repositories/LanguageReposiroty";

const languageRepository = new LanguageRepository();
const languageService = new LanguageService(languageRepository);
const languageController = new LanguageController(languageService);

const LanguageRouter = Router();

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

LanguageRouter.post("/", asyncHandler((req: Request, res: Response) => languageController.createLanguage(req, res)));
LanguageRouter.get("/", asyncHandler((req: Request, res: Response) => languageController.getAllLanguages(req, res)));
LanguageRouter.get("/:id", asyncHandler((req: Request, res: Response) => languageController.getLanguageById(req, res)));
LanguageRouter.put("/:id", asyncHandler((req: Request, res: Response) => languageController.updateLanguage(req, res)));
LanguageRouter.delete("/:id", asyncHandler((req: Request, res: Response) => languageController.deleteLanguage(req, res)));

export default LanguageRouter;
