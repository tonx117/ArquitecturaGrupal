import { LanguageService } from "../../domain/Services/LanguageService";

export class GetLanguageById {
    private languageService: LanguageService;

    constructor(languageService: LanguageService) {
        this.languageService = languageService;
    }

    async execute(id: number) {
        return await this.languageService.getLanguageById(id);
    }
}
