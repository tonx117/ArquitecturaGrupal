import { LanguageService } from "../../domain/Services/LanguageService";

export class GetAllLanguages {
    private languageService: LanguageService;

    constructor(languageService: LanguageService) {
        this.languageService = languageService;
    }

    async execute() {
        return await this.languageService.getAllLanguages();
    }
}
