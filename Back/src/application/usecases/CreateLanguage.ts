import { LanguageService } from '../../domain/Services/LanguageService';
import { CreateLanguageDTO } from '../dto/CreateLanguageDTO';
LanguageService

export class CreateLanguage {
    private languageService: LanguageService;

    constructor(languageService: LanguageService) {
        this.languageService = languageService;
    }

    async execute(data: CreateLanguageDTO) {
        return await this.languageService.createLanguage(data);
    }
}
