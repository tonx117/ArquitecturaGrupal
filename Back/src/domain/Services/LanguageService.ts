import { Language } from "../entities/Language";

export class LanguageService {
    private languages: Language[] = [];
    
    public create(language: Language): Language {
        this.languages.push(language);
        return language;
    }
    
    public list(): Language[] {
        return this.languages;
    }
    
    public findById(id: number): Language | undefined {
        return this.languages.find(language => language.id === id);
    }
    
    public findByName(name: string): Language | undefined {
        return this.languages.find(language => language.name === name);
    }
    
    public update(id: number, language: Language): Language | undefined {
        const languageIndex = this.languages.findIndex(language => language.id === id);
        if (languageIndex === -1) {
        return undefined;
        }
        this.languages[languageIndex] = language;
        return language;
    }
    
    public delete(id: number): Language | undefined {
        const languageIndex = this.languages.findIndex(language => language.id === id);
        if (languageIndex === -1) {
        return undefined;
        }
        const language = this.languages[languageIndex];
        this.languages.splice(languageIndex, 1);
        return language;
    }
}