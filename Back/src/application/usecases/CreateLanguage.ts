import { Language } from "../../domain/entities/Language";
import { LanguageService } from "../../domain/Services/LanguageService";
import { CreateLanguageDTO } from "../dto/CreateLanguageDTO";

export class CreateLanguage {
    constructor (private languageService: LanguageService) {}

    execute(data: CreateLanguageDTO): Language {
        const language = new Language(0, data.name, data.level);
        return this.languageService.create(language);
    }
}