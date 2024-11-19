import { LanguageService } from '../../domain/Services/LanguageService';
import { CreateLanguageDTO } from '../dto/CreateLanguageDTO'; // Puedes usar un DTO más específico si lo necesitas.

export class UpdateLanguage {
    private languageService: LanguageService;

    constructor(languageService: LanguageService) {
        this.languageService = languageService;
    }

    async execute(id: number, data: CreateLanguageDTO) {
        return await this.languageService.updateLanguage(id, data);
    }
}
