import { Request, Response } from "express";
import { LanguageService } from "../../../domain/Services/LanguageService";
import { CreateLanguageDTO } from "../../../application/dto/CreateLanguageDTO";

export class LanguageController {
  constructor(private languageService: LanguageService) {}

  // Crear idioma
  async createLanguage(req: Request, res: Response): Promise<Response> {
    const languageDTO: CreateLanguageDTO = req.body;
    const language = await this.languageService.createLanguage(languageDTO);
    return res.status(201).json(language);
  }

  // Obtener todos los idiomas
  async getAllLanguages(req: Request, res: Response): Promise<Response> {
    const languages = await this.languageService.getAllLanguages();
    return res.status(200).json(languages);
  }

  // Obtener idioma por ID
  async getLanguageById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const language = await this.languageService.getLanguageById(Number(id));
    if (!language) {
      return res.status(404).json({ message: "Language not found" });
    }
    return res.status(200).json(language);
  }

  // Actualizar idioma
  async updateLanguage(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const languageDTO: CreateLanguageDTO = req.body;
    const updatedLanguage = await this.languageService.updateLanguage(Number(id), languageDTO);
    if (!updatedLanguage) {
      return res.status(404).json({ message: "Language not found" });
    }
    return res.status(200).json(updatedLanguage);
  }

  // Eliminar idioma
  async deleteLanguage(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const isDeleted = await this.languageService.deleteLanguage(Number(id));
    if (!isDeleted) {
      return res.status(404).json({ message: "Language not found" });
    }
    return res.status(204).send();
  }
}
