import { LanguageModel } from "../orm/models/LanguageModel";
import { Language } from "../../domain/entities/Language";

export class LanguageRepository {
  async create(language: Language): Promise<Language> {
    const newLanguage = await LanguageModel.create(language);
    return newLanguage.toJSON() as Language;
  }}