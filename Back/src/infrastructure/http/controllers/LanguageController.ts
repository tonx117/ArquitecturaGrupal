import { Request, Response } from "express";
import { CreateLanguage } from "../../../application/usecases/CreateLanguage";
import { LanguageRepository } from "../../repositories/LanguageReposiroty";

export class LanguageController {
  static async create(req: Request, res: Response) {
    const repository = new LanguageRepository();
    const createLanguage = new CreateLanguage(repository);
    const language = await createLanguage.execute(req.body);
    res.status(201).json(language);
  }
}