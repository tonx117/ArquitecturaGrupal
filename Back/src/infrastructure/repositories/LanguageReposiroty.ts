import { LanguageModel } from "../orm/models/LanguageModel";
import { CreateLanguageDTO } from "../../application/dto/CreateLanguageDTO";

export class LanguageRepository {
  async create(languageDTO: CreateLanguageDTO) {
    return await LanguageModel.create({...languageDTO});
  }

  async getAll() {
    return await LanguageModel.findAll();
  }

  async getById(id: number) {
    return await LanguageModel.findByPk(id);
  }

  async update(id: number, languageDTO: CreateLanguageDTO) {
    const language = await LanguageModel.findByPk(id);
    if (!language) return null;
    return await language.update(languageDTO);
  }

  async delete(id: number) {
    const language = await LanguageModel.findByPk(id);
    if (!language) return false;
    await language.destroy();
    return true;
  }
}
