import { LanguageRepository } from "../../infrastructure/repositories/LanguageReposiroty";
import { CreateLanguageDTO } from "../../application/dto/CreateLanguageDTO";

export class LanguageService {
  constructor(private languageRepository: LanguageRepository) {}

  async createLanguage(languageDTO: CreateLanguageDTO) {
    return this.languageRepository.create(languageDTO);
  }

  async getAllLanguages() {
    return this.languageRepository.getAll();
  }

  async getLanguageById(id: number) {
    return this.languageRepository.getById(id);
  }

  async updateLanguage(id: number, languageDTO: CreateLanguageDTO) {
    return this.languageRepository.update(id, languageDTO);
  }

  async deleteLanguage(id: number) {
    return this.languageRepository.delete(id);
  }
}
